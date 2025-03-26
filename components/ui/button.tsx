'use client'

import * as React from 'react'
import { 
  Button as MuiButton, 
  ButtonProps as MuiButtonProps,
  styled
} from '@mui/material'

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  size?: 'small' | 'medium' | 'large' | 'lg';
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'size',
})<ButtonProps>(({ theme, size, variant }) => ({
  borderRadius: 24,
  textTransform: 'none',
  boxShadow: variant === 'contained' ? '0 10px 15px -3px rgba(236, 72, 153, 0.2)' : 'none',
  transition: 'all 0.3s',
  '&:hover': {
    boxShadow: variant === 'contained' ? '0 10px 15px -3px rgba(236, 72, 153, 0.3)' : 'none',
    transform: variant === 'contained' ? 'translateY(-2px)' : 'none',
  },
  ...(size === 'large' && {
    padding: '12px 24px',
    fontSize: '1rem',
  }),
}));

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'medium', children, ...props }, ref) => {
    const muiSize = size === 'lg' ? 'large' : size;
    
    return (
      <StyledButton
        ref={ref}
        size={muiSize}
        {...props}
      >
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
