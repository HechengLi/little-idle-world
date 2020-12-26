const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const dayjs = require('dayjs')

const User = require('../entity/user')
const UserRepository = require('../repository/userRepository')

const secret = process.env.JWT_SECRET || 'secret'
const saltRounds = 10

const authenticationRoutes = {
  '/uapi/auth': ['post', async (ctx, next) => {
    const connection = await ctx.db.getConnection()
    const userRepository = new UserRepository()

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
    const user = await userRepository.findByUsername(connection, username)
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      ctx.throw(401, 'Incorrect username/password')
    }
    const payload = { username, expire: dayjs().unix() }
    const token = jwt.sign(payload, secret)
    ctx.state.token = token
    ctx.body = token
    await next()
  }],
  '/uapi/register': ['post', async (ctx, next) => {
    const connection = await ctx.db.getConnection()
    const userRepository = new UserRepository()
    const schema = Joi.object({
      username: Joi.string()
        .alphanum()
        .min(4)
        .max(30)
        .required(),
      password: Joi.string()
        .min(8)
        .max(30)
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
    await userRepository.insert(connection, new User(data))
    ctx.status = 200
    await next()
  }]
}

module.exports = authenticationRoutes
