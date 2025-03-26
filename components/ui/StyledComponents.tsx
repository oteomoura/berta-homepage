'use client'

import React from 'react'
import { Box, Card, Chip, Link as MuiLink, alpha, styled } from "@mui/material"

// Logo styled component
export const Logo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& .logoIcon': {
    position: 'relative',
    width: 32,
    height: 32,
    overflow: 'hidden',
    borderRadius: '50%',
    background: `linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    padding: 2,
    transition: 'all 0.3s',
    '&:hover': {
      background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    },
    '& .iconContainer': {
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      backgroundColor: theme.palette.common.white,
    }
  },
  '& .logoText': {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontFamily: 'var(--font-playfair)',
  }
}));

// Nav link styled component
export const NavLink = styled(MuiLink)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 300,
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  position: 'relative',
  fontFamily: 'var(--font-outfit)',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -4,
    left: 0,
    width: 0,
    height: 2,
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s',
  },
  '&:hover': {
    color: theme.palette.primary.main,
    '&::after': {
      width: '100%',
    },
  },
}));

// SparkleChip component
export const SparkleChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  color: theme.palette.primary.dark,
  padding: '4px 8px',
  borderRadius: 24,
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  '& .MuiChip-icon': {
    color: theme.palette.primary.main,
  }
}));

// HeroUnderline SVG component
export const HeroUnderline = () => (
  <Box
    component="svg"
    viewBox="0 0 358 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{
      position: 'absolute',
      bottom: -8,
      left: 0,
      width: '100%',
    }}
  >
    <path
      d="M3 9C118.957 4.47226 242.456 -1.86658 355 9"
      stroke="#EC4899"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </Box>
);

// FeatureCard component
export const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  boxShadow: theme.shadows[1],
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  '& .iconContainer': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    borderRadius: '50%',
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .icon': {
    color: theme.palette.primary.main,
    width: 20,
    height: 20,
  }
}));

// Feature Card with icon header
export const IconCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderColor: alpha(theme.palette.primary.main, 0.2),
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[3],
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 4,
    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  }
}));

// Circle Icon component
export const CircleIcon = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  borderRadius: '50%',
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
  '.MuiCard-root:hover &': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  }
}));

// Testimonial Card
export const TestimonialCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderColor: alpha(theme.palette.primary.main, 0.2),
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[3],
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 4,
    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  }
}));

// Partner Logo Box
export const PartnerLogo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  '& .logoContainer': {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(3),
    borderRadius: '50%',
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    boxShadow: theme.shadows[3],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  '&:hover .logoContainer': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  }
}));

// ServiceCard component
export const ServiceCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderColor: alpha(theme.palette.primary.main, 0.2),
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[3],
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 4,
    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  }
}));

// CheckItem component for service features
export const CheckItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
  '& .checkIcon': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    borderRadius: '50%',
    padding: 4,
    display: 'flex',
    marginTop: 2,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 16,
    color: theme.palette.primary.main,
  }
})); 