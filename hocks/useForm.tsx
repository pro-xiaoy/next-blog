import { useEffect, useState } from "react"
import axios from "axios"
type Posts = {
  arttitle: String;
  content: String;
  date: String;
  title: String;
}
export const usePosts = (options) => {
  const submitForm = () => { }
  const initFormData = { username: '', password: '' }
  const [formData, setFormData] = useState(initFormData);
  const [errors, setErrors] = useState(() => {
    const errobj = {}
    for(let key in initFormData) {
      errobj[key] = ''
    }
    return {}
  })
  const fileds = [
    { label: '用户名', type: 'text', key: 'username', },
    { label: '密码', type: 'password', key: 'password', }
  ]
  const setChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }
  const buttons = (<button type="submit">登录</button>)
  const form = (
    <form onSubmit={submitForm}>
      {fileds.map(filed => (
        <div>
          <div>
            <label>用户名: {filed.label}</label>
            <input type={filed.type} onChange={e => setChange(filed.key, e.target.value)} />
          </div>
          {errors[filed.key] && <div style={{ color: 'red' }}>{errors[filed.key]}</div>}
        </div>
      ))}
      {buttons}
    </form>
  )
  return {
    form,
  }
}