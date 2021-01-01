import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import $request from '../../resource/plugins/request'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd'

import { updateUserStatus } from '../../store/user/action'

const Login = ({ className, updateUserStatus }) => {
  const [loggingIn, setLoggingIn] = useState(false)
  const history = useHistory()

  const onFinish = values => {
    setLoggingIn(true)
    $request.post('/uapi/auth', values)
      .then(res => {
        updateUserStatus(true)
        history.push('/')
      })
      .catch(err => {
        setLoggingIn(false)
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
      name="login"
      onFinish={onFinish}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          { required: true, message: '请输入用户名', whitespace: true }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[
          { required: true, message: '请输入密码' }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" loading={loggingIn}>
          登录
        </Button>
      </Form.Item>
      <Form.Item className='mb-0' {...tailFormItemLayout} style={{ textAlign: 'right' }}>
        没有账号? <Button type="link" onClick={() => history.push('/register')}>前往注册</Button>
      </Form.Item>
      <Form.Item {...tailFormItemLayout} style={{ textAlign: 'right' }}>
        忘记密码? <Button type="link" onClick={() => history.push('')}>找回密码</Button>
      </Form.Item>
    </Form>
  )
}

const LoginStyled = styled(Login)`
  max-width: 600px;
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const mapDispatchToProps = dispatch => ({
  updateUserStatus: status => dispatch(updateUserStatus(status))
})

const LoginReduxed = connect(
  null,
  mapDispatchToProps
)(LoginStyled)

export default LoginReduxed
