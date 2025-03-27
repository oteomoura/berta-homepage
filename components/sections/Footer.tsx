'use client'

import React from 'react'
import Link from "next/link"
import { Box, Container, Divider, Grid, IconButton, Link as MuiLink, Stack, Typography, alpha, useTheme } from "@mui/material"
import FlowerIcon from '@mui/icons-material/LocalFlorist'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Logo } from "../ui/StyledComponents"

export function Footer() {
  const theme = useTheme();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        width: '100%',
        py: 6,
        borderTop: '1px solid',
        borderColor: alpha(theme.palette.primary.main, 0.2),
        backgroundColor: theme.palette.common.white,
        position: 'relative',
        padding: '1rem'
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 48,
        background: 'linear-gradient(to bottom, #FDF2F8, #FFFFFF)',
        zIndex: 0,
      }} />
      
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} sx={{ mb: 4, mt: 2  }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <Link href="/" legacyBehavior>
                <MuiLink component="a" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Logo>
                    <Box className="logoIcon">
                      <Box className="iconContainer">
                        <FlowerIcon sx={{ height: 20, width: 20, color: theme.palette.primary.main }} />
                      </Box>
                    </Box>
                    <Box component="span" className="logoText">
                      Berta
                    </Box>
                  </Logo>
                </MuiLink>
              </Link>
            </Box>
            
            <Typography sx={{ color: theme.palette.primary.dark, mb: 2, fontSize: '0.875rem' }}>
              Plataforma de bem-estar para pessoas com doenças crônicas, oferecendo cuidado personalizado e baseado em
              ciência.
            </Typography>
            
            <Stack direction="row" spacing={2}>
              <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" sx={{ color: theme.palette.primary.dark, mb: 2, fontWeight: 600 }}>
              Serviços
            </Typography>
            <Stack spacing={1}>
              <MuiLink 
                href="#" 
                underline="hover"
                sx={{ 
                  color: theme.palette.primary.dark,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main }
                }}
              >
                Pré-diagnóstico
              </MuiLink>
              <MuiLink 
                href="#" 
                underline="hover"
                sx={{ 
                  color: theme.palette.primary.dark,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main }
                }}
              >
                Consultas Especializadas
              </MuiLink>
              <MuiLink 
                href="#" 
                underline="hover"
                sx={{ 
                  color: theme.palette.primary.dark,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main }
                }}
              >
                Acompanhamento Premium
              </MuiLink>
              <MuiLink 
                href="#" 
                underline="hover"
                sx={{ 
                  color: theme.palette.primary.dark,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main }
                }}
              >
                Suporte Nutricional
              </MuiLink>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" sx={{ color: theme.palette.primary.dark, mb: 2, fontWeight: 600 }}>
              Empresa
            </Typography>
            <Stack spacing={1}>
              <MuiLink 
                href="#quem-somos" 
                underline="hover"
                sx={{ 
                  color: theme.palette.primary.dark,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main }
                }}
              >
                Sobre nós
              </MuiLink>
              <MuiLink 
                href="https://www.instagram.com/endopolítica/" 
                underline="hover"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: theme.palette.primary.dark,
                  fontSize: '0.875rem',
                  '&:hover': { color: theme.palette.primary.main }
                }}
              >
                Endopolítica
              </MuiLink>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" sx={{ color: theme.palette.primary.dark, mb: 2, fontWeight: 600 }}>
              Contato
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>
                  (61) 99925-7252
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>
                  contato@bertasaude.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>
                  São Paulo, SP
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3, borderColor: alpha(theme.palette.primary.main, 0.1) }} />
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'center' },
          gap: 2
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.primary.dark,
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            © 2025 Berta Saúde. Todos os direitos reservados.{' '}
          </Typography>
          
          <Stack 
            direction="row" 
            spacing={3}
            sx={{ 
              justifyContent: { xs: 'center', md: 'flex-end' }
            }}
          >
            <MuiLink 
              href="#" 
              underline="hover"
              sx={{ 
                color: theme.palette.primary.dark,
                fontSize: '0.875rem',
                '&:hover': { color: theme.palette.primary.main }
              }}
            >
              Termos de Serviço
            </MuiLink>
            <MuiLink 
              href="#" 
              underline="hover"
              sx={{ 
                color: theme.palette.primary.dark,
                fontSize: '0.875rem',
                '&:hover': { color: theme.palette.primary.main }
              }}
            >
              Política de Privacidade
            </MuiLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
} 