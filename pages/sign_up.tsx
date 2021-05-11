import { useCallback, useState } from "react"
import axios from 'axios'
import { useForm } from 'hocks/useForm'

const SignUp = () => {

  const [user, setUser] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  })

  const { form } = useForm({
    initFormData: { username: '', password: '', passwordConfirm: '' },
    fileds: [
      { label: '用户名', type: 'text', key: 'username', },
      { label: '密码', type: 'password', key: 'password', },
      { label: '确定密码', type: 'password', key: 'passwordConfirm' }
    ],
    buttons: <button type="submit">确定</button>,
    submit: {
      request: formData => axios.post(`/api/v1/signup`, formData),
      message: '注册成功'
    }
  })

  const submitForm = useCallback((e) => {
    e.preventDefault()
    axios.post('/api/v1/signup', user).then((res) => {
      alert('注册成功')
      window.location.href = '/sign_in'
    }, error => {
      setErrors(error.response.data)
    })
  }, [user])

  return (
    <div style={{ padding: '40px' }}>
      <h2>这是一个注册页面</h2>
      <div>
        {form}
      </div>

    </div>
  )
}

export default SignUp