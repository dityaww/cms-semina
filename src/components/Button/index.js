import { Button } from '@mui/material'
import React from 'react'

function SButton({ children, disabled, onClick, variant, size, color }) {
  return (
    <Button 
        color={color}
        disabled={disabled}
        variant={variant}
        size={size}
        onClick={onClick}
    >
        {children}
    </Button>
  )
}

export default SButton