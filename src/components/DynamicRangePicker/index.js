// DynamicRangePicker.jsx
import React from 'react'
import {DatePicker} from 'antd'

const DynamicRangePicker = ({
  value,
  onChange,
  format,
  disabledDate,
  showTime,
  placeholder,
}) => {
  return (
    <DatePicker.RangePicker
      value={value}
      onChange={onChange}
      format={format}
      disabledDate={disabledDate}
      showTime={showTime}
      placeholder={placeholder}
      style={{marginRight: '10px'}}
    />
  )
}

export default DynamicRangePicker
