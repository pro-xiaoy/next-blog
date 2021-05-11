import { useEffect, useState } from "react"
import {AxiosResponse} from 'axios';

type Posts = {
  arttitle: String;
  content: String;
  date: String;
  title: String;
}
export const useForm = (options) => {
  const submitForm = (e) => {
    e.preventDefault()
    submit.request(formData).then(res => {
      alert(submit.message)
    }, err => {
      const response: AxiosResponse = err.response;
      if (response.status === 422) {
        setErrors(response.data);
      }
    })
    
  }
  const {initFormData, fileds, buttons, submit} = options
  const [formData, setFormData] = useState(initFormData);
  const [errors, setErrors] = useState(() => {
    const errobj = {}
    for (let key in initFormData) {
      errobj[key] = ''
    }
    return {}
  })

  const setChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }
  const form = (
    <form onSubmit={submitForm}>
      {fileds.map(filed => (
        <div key={filed.key}>
          <div>
            <label>{filed.label}:</label>
            {filed.type === 'textarea' ?
              <textarea />
            :
              <input type={filed.type} onChange={e => setChange(filed.key, e.target.value)} />
            }
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