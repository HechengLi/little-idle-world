import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd'

const Register = ({ className }) => {
  const history = useHistory()

  const onFinish = event => {
    event.preventDefault()
    axios.post('/uapi/register', { username: '' })
      .then(res => {
        history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  }

  return (
    <Form
      className={className}
      {...layout}
      name="register"
      onFinish={onFinish}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="重复密码"
        name="passwordRepeat"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="邮箱"
        name="email"
        rules={[{ required: true, message: '请输入邮箱' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
        <Button onClick={() => history.push('/login')}>
          返回登录
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
