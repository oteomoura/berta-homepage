'use client'

import React from 'react'
import { Box, CardContent, Chip, Container, Grid, Typography, alpha, useTheme } from "@mui/material"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import PeopleIcon from '@mui/icons-material/People'
import ShieldIcon from '@mui/icons-material/Shield'
import { CircleIcon, HeroUnderline, IconCard } from "../ui/StyledComponents"

export function About() {
  const theme = useTheme();
  
  return (
    <Box 
      id="sobre" 
      component="section" 
      sx={{ 
        width: '100%', 
        py: { xs: 6, md: 12, lg: 16 },
        position: 'relative',
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 5 }}>
          <Chip 
            label="Nossa proposta" 
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
              Uma nova abordagem para o{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                bem-estar
                <HeroUnderline />
              </Box>
            </Typography>
            <Typography 
              sx={{ 
                color: theme.palette.primary.dark,
                fontSize: { md: '1.125rem' },
                maxWidth: 900,
                mx: 'auto',
                textAlign: 'justify',
                mt: 4
              }}
            >
            Chega de informação pela metade e afirmações rasas. Na Berta, nós aliamos experiência própria com o que há de mais avançado na tecnologia médica para endometriose e dor crônica.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4} sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={10} md={4}>
            <IconCard>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, padding: '1rem', textAlign: 'justify' }}>
                  <CircleIcon sx={{ p: 1.5 }}>
                    <EmojiEventsIcon sx={{ fontSize: 32 }} />
                  </CircleIcon>
                  <Typography variant="h6" sx={{ color: theme.palette.primary.dark, fontWeight: 600 }}>
                    Experiência Comprovada
                  </Typography>
                </Box>
                <Typography sx={{ color: theme.palette.primary.dark }}>
                  Com base na nossa própria experiência e da nossa comunidade, sabemos os detalhes da realidade da dor crônica e te ajudaremos
                  a não passar por vários dos problemas que encontramos na nossa jornada. Tudo isso com transparência, parceria e cuidado.
                </Typography>
              </CardContent>
            </IconCard>
          </Grid>

          <Grid item xs={10} md={4}>
            <IconCard>
              <CardContent sx={{ pt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, padding: '1rem', textAlign: 'justify' }}>
                  <CircleIcon sx={{ p: 1.5 }}>
                    <PeopleIcon sx={{ fontSize: 32 }} />
                  </CircleIcon>
                  <Typography variant="h6" sx={{ color: theme.palette.primary.dark, fontWeight: 600 }}>
                    Médicos Qualificados
                  </Typography>
                </Box>
                <Typography sx={{ color: theme.palette.primary.dark }}>
                  Selecionamos nossos profissionais de saúde parceiros após uma análise minunciosa de currículo, experiência de pacientes e referências profissionais. 
                  Trabalhamos apenas com aqueles que, como nós, acompanham de perto os últimos desenvolvimentos da medicina para tratamento da endometriose e dor crônica.
                </Typography>
              </CardContent>
            </IconCard>
          </Grid>

          <Grid item xs={10} md={4}>
            <IconCard>
              <CardContent sx={{ pt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, padding: '1rem', textAlign: 'justify' }}>
                  <CircleIcon sx={{ p: 1.5 }}>
                    <ShieldIcon sx={{ fontSize: 32 }} />
                  </CircleIcon>
                  <Typography variant="h6" sx={{ color: theme.palette.primary.dark, fontWeight: 600 }}>
                    Compromisso com a Ciência
                  </Typography>
                </Box>
                <Typography sx={{ color: theme.palette.primary.dark }}>
                  Trabalhamos apenas com tratamentos cientificamente validados, sem espaço para abordagens não
                  comprovadas ou pseudocientíficas. Aqui você terá acesso ao melhor que a medicina
                  moderna pode oferecer. 
                </Typography>
              </CardContent>
            </IconCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 