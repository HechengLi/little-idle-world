const bcrypt = require('bcrypt')
const Joi = require('joi')

const User = require('../entity/user')
const Stat = require('../entity/stat')
const UserRepository = require('../repository/userRepository')
const StatRepository = require('../repository/statRepository')
const defaultStat = require('../data/defaultData/defaultStat')

const { GENERATE_TOKEN } = require('../utils/actions')

const saltRounds = 10

const authenticationRoutes = {
  '/uapi/auth': ['post', async (ctx, next) => {
    const connection = await ctx.connection
    const userRepository = new UserRepository(connection)

    const data = ctx.request.body
    const schema = Joi.object({
      username: Joi.string()
        .alphanum()
        .required(),
      password: Joi.string()
        .required()
    })
    const validation = schema.validate(data)
    if (validation.error) {
      ctx.throw(422, validation.error)
    }

    const { username, password } = data
    const user = await userRepository.findByUsername(username)
    if (!user) ctx.throw(401, '用户名/密码错误')
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      ctx.throw(401, '用户名/密码错误')
    }
    ctx.state[GENERATE_TOKEN] = { userId: user.id }
    ctx.status = 200
    await next()
  }],
  '/uapi/register': ['post', async (ctx, next) => {
    const connection = ctx.connection
    const userRepository = new UserRepository(connection)
    const statRepository = new StatRepository(connection)

    const schema = Joi.object({
      username: Joi.string()
        .alphanum()
        .min(4)
        .max(32)
        .required(),
      nickname: Joi.string()
        .min(1)
        .max(8)
        .required(),
      password: Joi.string()
        .min(8)
        .max(32)
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
    })

    const data = ctx.request.body
    const validation = schema.validate(data)
    data.password = await bcrypt.hash(data.password, saltRounds)
    if (validation.error) {
      ctx.throw(422, validation.error)
    }

    await new Promise((resolve, reject) => {
      connection.beginTransaction(async err => {
        if (err) throw err
        // create user
        let userId
        try {
          userId = await userRepository.insert(new User(data))
        } catch(err) {
          console.log(1)
          connection.rollback(err => { if (err) reject(err) })
          reject(err)
          return
        }

        // create user stat
        const stat = new Stat(defaultStat)
        stat.user_id = userId
        try {
          await statRepository.insert(stat)
        } catch (err) {
          connection.rollback(err => { if (err) reject(err) })
          reject(err)
          return
        }

        // commit
        connection.commit(err => {
          if (err) {
            connection.rollback(err => { if (err) reject(err) })
            reject(err)
          } else {
            resolve()
          }
        })
      })
    }).catch(err => {
      if (err.code === 'ER_DUP_ENTRY' || err.errno == 1062) {
        switch(err.sqlMessage) {
          case 'Duplicate entry \'test\' for key \'tb_user.username\'':
            ctx.throw(409, '用户名已存在')
            break
          case 'Duplicate entry \'test\' for key \'tb_user.nickname\'':
            ctx.throw(409, '昵称已存在')
            break
          case 'Duplicate entry \'test\' for key \'tb_user.email\'':
            ctx.throw(409, '邮箱已存在')
            break
          default: throw err
        }
      } else {
        throw err
      }
    })

    ctx.status = 200
    await next()
  }]
}

module.exports = authenticationRoutes
