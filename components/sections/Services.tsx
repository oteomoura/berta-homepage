'use client'

import React from 'react'
import { Box, CardContent, Chip, Container, Grid, Typography, alpha, useTheme } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import SpaIcon from '@mui/icons-material/Spa'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import { HeroUnderline, ServiceCard } from "../ui/StyledComponents"

export function Services() {
  const theme = useTheme();
  
  return (
    <Box 
      id="servicos" 
      component="section" 
      sx={{ 
        width: '100%', 
        py: { xs: 6, md: 12, lg: 16 },
        position: 'relative',
        backgroundColor: theme.palette.common.white,
      }}
    >
      {/* Top gradient */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 120,
        background: 'linear-gradient(to bottom, #FDF2F8, #FFFFFF)',
        zIndex: 0,
      }} />
      
      {/* Bottom gradient - will add this to help transition to Testimonials */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 120,
        background: `linear-gradient(to top, ${alpha(theme.palette.primary.light, 0.05)}, #FFFFFF)`,
        zIndex: 0,
      }} />
      
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 5 }}>
          <Chip 
            label="Nossos serviços" 
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
              Cuidado{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                completo
                <HeroUnderline />
              </Box>{' '}
              para você
            </Typography>
            <Typography 
              sx={{ 
                color: theme.palette.primary.dark,
                fontSize: { md: '1.125rem' },
                maxWidth: 900,
                mx: 'auto'
              }}
            >
              Por meio de informação aberta e inteligência artificial, diminuímos o tempo de diagnóstico da endometriose em mais de dez vezes.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4} sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={10} sm={6} md={3}>
            <ServiceCard>
              <CardContent sx={{ pt: 5, px: 4, pb: 4 }}>
                <Box sx={{ 
                  mb: 3,
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  color: theme.palette.primary.main,
                  mx: 'auto',
                }}>
                  <CheckCircleIcon sx={{ fontSize: 32 }} />
                </Box>
                
                <Typography variant="h6" sx={{ color: theme.palette.primary.dark, fontWeight: 600, mb: 2 }}>
                  Pré-diagnóstico Gratuito
                </Typography>
                
                <Typography sx={{ color: theme.palette.primary.dark }}>
                  Responda nosso questionário especializado e receba uma avaliação preliminar sobre seus sintomas com base 
                  na análise de milhares de casos.
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
          
          <Grid item xs={10} sm={6} md={3}>
            <ServiceCard>
              <CardContent sx={{ pt: 5, px: 4, pb: 4 }}>
                <Box sx={{ 
                  mb: 3,
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  color: theme.palette.primary.main,
                  mx: 'auto',
                }}>
                  <LibraryBooksIcon sx={{ fontSize: 32 }} />
                </Box>
                
                <Typography variant="h6" sx={{ color: theme.palette.primary.dark, fontWeight: 600, mb: 2 }}>
                  Tratamento interdisciplinar
                </Typography>
                
                <Typography sx={{ color: theme.palette.primary.dark }}>
                  Conectamos você com um tratamento completo, incluindo ginecologistas especialistas em endometriose, médicos da dor, fisioterapeutas, psicólogos, entre outros.
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
          
          <Grid item xs={10} sm={6} md={3}>
            <ServiceCard>
              <CardContent sx={{ pt: 5, px: 4, pb: 4 }}>
                <Box sx={{ 
                  mb: 3,
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  color: theme.palette.primary.main,
                  mx: 'auto',
                }}>
                  <SpaIcon sx={{ fontSize: 32 }} />
                </Box>
                
                <Typography variant="h6" sx={{ color: theme.palette.primary.dark, fontWeight: 600, mb: 2 }}>
                  Acompanhamento Premium
                </Typography>
                
                <Typography sx={{ color: theme.palette.primary.dark }}>
                  Nós sabemos o quão difícil é gerenciar um tratamento de longo prazo sentindo dor. Por isso gerenciaremos seu acompanhamento de perto para que você possa focar apenas na sua melhora. 
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
          
          <Grid item xs={10} sm={6} md={3}>
            <ServiceCard>
              <CardContent sx={{ pt: 5, px: 4, pb: 4 }}>
                <Box sx={{ 
                  mb: 3,
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  color: theme.palette.primary.main,
                  mx: 'auto',
                }}>
                  <RestaurantIcon sx={{ fontSize: 32 }} />
                </Box>
                
                <Typography variant="h6" sx={{ color: theme.palette.primary.dark, fontWeight: 600, mb: 2 }}>
                  Suporte Nutricional
                </Typography>
                
                <Typography sx={{ color: theme.palette.primary.dark }}>
                  Receba orientação nutricional especializada para controle de sintomas e melhora da qualidade de vida.
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 