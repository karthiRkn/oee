// ButtonComponent.jsx
import React from 'react';
import { Button } from 'antd';

const DynamicButton = ({ type, text, onClick, disabled, loading }) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled} loading={loading}>
      {text}
    </Button>
  );
};

export default DynamicButton;
