import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Form, Input, Checkbox, Button } from 'antd'

const Register = ({ className }) => {
  const [registering, setRegistering] = useState(false)
  const history = useHistory()

  const onFinish = values => {
    setRegistering(true)
    const data = Object.assign({} , values)
    delete data.passwordRepeat
    axios.post('/uapi/register', data)
      .then(res => {
        history.push('/login')
      })
      .catch(err => {
        setRegistering(false)
        console.log(err)
      })
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }

  return (
    <Form
      className={className}
      {...formItemLayout}
      name="register"
      onFinish={onFinish}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          { required: true, message: '请输入用户名', whitespace: true },
          { min: 4, max: 32, message: '长度在4到32之间' },
          { pattern: /^[a-zA-Z0-9]+$/, message: '只能使用字母或数字' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="昵称"
        name="nickname"
        rules={[
          { required: true, message: '请输入昵称', whitespace: true },
          { min: 1, max: 8, message: '长度在1到8之间' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[
          { required: true, message: '请输入密码' },
          { min: 5, max: 32, message: '长度在5到32之间' }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="重复密码"
        name="passwordRepeat"
        rules={[
          { required: true, message: '请重复密码' },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('两次密码不相同');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱格式' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('请阅读并同意用户条款'),
          },
        ]}
        {...tailFormItemLayout}
        style={{ textAlign: 'left', marginBottom: 0 }}
      >
        <Checkbox>
          我已阅读并同意 <a href="">用户条款</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout} style={{ textAlign: 'right' }}>
        已有账号? <Button type="link" onClick={() => history.push('/login')}>立刻登录</Button>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" loading={registering}>
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}

const RegisterStyled = styled(Register)`
  max-width: 600px;
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default RegisterStyled
