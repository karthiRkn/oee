import React from 'react'
import {Input} from 'antd'
import './index.css'

const DynamicInput = ({placeholder, value, onChange, disabled}) => {
  return (
    <Input
      className="dynamic-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

export default DynamicInput
