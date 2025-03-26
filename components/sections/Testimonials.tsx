'use client'

import React from 'react'
import { Avatar, Box, Button, CardContent, Chip, Container, Grid, Rating, Typography, alpha, useTheme } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { HeroUnderline, TestimonialCard } from "../ui/StyledComponents"

export function Testimonials() {
  const theme = useTheme();
  
  return (
    <Box 
      id="depoimentos" 
      component="section" 
      sx={{ 
        width: '100%', 
        py: { xs: 6, md: 12, lg: 16 },
        position: 'relative',
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 120,
        background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.light, 0.05)}, rgba(255,255,255,0))`,
        zIndex: 0,
      }} />
      
      <Box sx={{
        position: 'absolute',
        top: 120,
        left: 0,
        width: '100%',
        height: 'calc(100% - 120px)',
        opacity: 0.03,
        background: `radial-gradient(circle at top left, ${theme.palette.primary.light}, transparent 40%),
                    radial-gradient(circle at bottom right, ${theme.palette.primary.light}, transparent 40%)`,
        zIndex: 0,
      }} />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 5 }}>
          <Chip 
            label="Depoimentos" 
            sx={{ 
              mb: 2, 
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.dark,
              py: 0.5,
              px: 1,
            }} 
          />
          
          <Box sx={{ maxWidth: '85%', mx: 'auto' }}>
            <Typography 
              variant="h3"
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                color: '#831843',
                mb: 1.5,
                fontSize: { xs: '1.875rem', sm: '2.25rem', md: '3rem' },
              }}
            >
              O que nossas{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                pacientes
                <HeroUnderline />
              </Box>{' '}
              dizem
            </Typography>
            <Typography 
              sx={{ 
                color: theme.palette.primary.dark,
                fontSize: { md: '1.125rem' },
                maxWidth: 900,
                mx: 'auto'
              }}
            >
              Histórias reais de mulheres que transformaram suas vidas com nossa plataforma.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto', py: 6 }}>
          <Grid item xs={12} md={6}>
            <TestimonialCard>
              <CardContent sx={{ pt: 5, px: 4, pb: 4 }}>
                <Box sx={{ 
                  position: 'relative',
                  '&::before': {
                    content: '"""',
                    position: 'absolute',
                    top: -35,
                    left: -20,
                    fontSize: 80,
                    fontFamily: 'serif',
                    color: alpha(theme.palette.primary.light, 0.3),
                    zIndex: -1,
                  }
                }}>
                  <Rating value={5} readOnly sx={{ mb: 3, color: '#FBBF24' }} />
                  
                  <Typography 
                    sx={{ 
                      fontStyle: 'italic', 
                      color: theme.palette.primary.dark,
                      fontSize: '1.125rem',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    "Depois de anos sofrendo com dores intensas, finalmente encontrei médicos que entenderam meu caso.
                    O acompanhamento personalizado da Berta fez toda a diferença no meu tratamento de endometriose."
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                    <Avatar 
                      src="/images/testimonial1.jpg" 
                      alt="Foto de Mariana S."
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        border: `2px solid ${alpha(theme.palette.primary.light, 0.3)}`,
                        p: 0.5,
                        backgroundColor: alpha(theme.palette.primary.light, 0.1),
                      }}
                    />
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark, fontSize: '1.125rem' }}>
                        Mariana S.
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                        São Paulo, SP • Cliente há 1 ano
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </TestimonialCard>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TestimonialCard>
              <CardContent sx={{ pt: 5, px: 4, pb: 4 }}>
                <Box sx={{ 
                  position: 'relative',
                  '&::before': {
                    content: '"""',
                    position: 'absolute',
                    top: -35,
                    left: -20,
                    fontSize: 80,
                    fontFamily: 'serif',
                    color: alpha(theme.palette.primary.light, 0.3),
                    zIndex: -1,
                  }
                }}>
                  <Rating value={5} readOnly sx={{ mb: 3, color: '#FBBF24' }} />
                  
                  <Typography 
                    sx={{ 
                      fontStyle: 'italic', 
                      color: theme.palette.primary.dark,
                      fontSize: '1.125rem',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    "O plano premium da Berta é incrível! Ter alguém para me ajudar com as receitas, marcar consultas
                    e me lembrar dos medicamentos facilitou muito minha vida. Recomendo para todas as mulheres com
                    endometriose."
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                    <Avatar 
                      src="/images/testimonial2.jpg" 
                      alt="Foto de Camila R."
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        border: `2px solid ${alpha(theme.palette.primary.light, 0.3)}`,
                        p: 0.5,
                        backgroundColor: alpha(theme.palette.primary.light, 0.1),
                      }}
                    />
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark, fontSize: '1.125rem' }}>
                        Camila R.
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                        Rio de Janeiro, RJ • Cliente há 8 meses
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </TestimonialCard>
          </Grid>
        </Grid>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            sx={{ 
              py: 1.5,
              px: 4,
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.05) },
            }}
            endIcon={<ArrowRightIcon />}
          >
            Ver mais depoimentos
          </Button>
        </Box>
      </Container>
    </Box>
  )
} 