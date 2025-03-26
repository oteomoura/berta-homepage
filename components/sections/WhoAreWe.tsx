'use client'

import React from 'react'
import { Box, Chip, Container, Grid, Typography, alpha, useTheme } from "@mui/material"
import { HeroUnderline } from "../ui/StyledComponents"
import Image from "next/image"

export function WhoAreWe() {
  const theme = useTheme();
  
  return (
    <Box 
      id="quem-somos" 
      component="section" 
      sx={{ 
        width: '100%', 
        py: { xs: 6, md: 12, lg: 16 },
        position: 'relative',
        backgroundColor: theme.palette.common.white,
      }}
    >
      {/* Subtle background effect */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.03,
        background: `radial-gradient(circle at top left, ${theme.palette.primary.light}, transparent 40%),
                    radial-gradient(circle at bottom right, ${theme.palette.primary.light}, transparent 40%)`,
        zIndex: 0,
      }} />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 8 }}>
          <Chip 
            label="Quem somos" 
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
              Conheça nossa{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                história
                <HeroUnderline />
              </Box>
            </Typography>
            <Typography 
              sx={{ 
                color: theme.palette.primary.dark,
                fontSize: { md: '1.125rem' },
                maxWidth: 900,
                mx: 'auto'
              }}
            >
              A jornada por trás da Berta - uma plataforma nascida da experiência pessoal
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={6} alignItems="center" sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              position: 'relative',
              mb: { xs: 4, md: 0 }
            }}>
              <Box sx={{ 
                width: { xs: 240, sm: 280, md: 320 },
                height: { xs: 240, sm: 280, md: 320 },
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                border: `4px solid ${alpha(theme.palette.primary.light, 0.3)}`,
                boxShadow: `0 12px 28px ${alpha(theme.palette.primary.main, 0.15)}`,
              }}>
                <Image
                  src="/berta-homepage/images/founder.jpg"
                  alt="Fundadora da Berta"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              
              {/* Decorative elements */}
              <Box sx={{ 
                position: 'absolute',
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                border: `2px dashed ${alpha(theme.palette.primary.main, 0.2)}`,
                top: '10%',
                left: '10%',
                animation: 'spin 30s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' }
                }
              }} />
              
              <Box sx={{ 
                position: 'absolute',
                bottom: '5%',
                right: '15%',
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: alpha(theme.palette.primary.light, 0.15),
                zIndex: -1,
              }} />
              
              <Box sx={{ 
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: alpha(theme.palette.primary.light, 0.2),
                zIndex: -1,
              }} />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Box>
              <Typography 
                variant="h5" 
                component="h3" 
                sx={{ 
                  color: theme.palette.primary.dark, 
                  fontWeight: 600, 
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '1.75rem' }
                }}
              >
                Hannah Ribeiro Parnes, Fundadora & CEO
              </Typography>
              
              <Typography 
                sx={{ 
                  color: theme.palette.primary.dark,
                  mb: 3,
                  fontSize: '1rem',
                  lineHeight: 1.7
                }}
              >
                Minha jornada com a endometriose começou aos 15 anos, com dores menstruais intensas que muitos médicos 
                descartaram como "normais". Após anos buscando respostas, aos 23 anos finalmente recebi o diagnóstico 
                de endometriose profunda.
              </Typography>
              
              <Typography 
                sx={{ 
                  color: theme.palette.primary.dark,
                  mb: 3,
                  fontSize: '1rem',
                  lineHeight: 1.7
                }}
              >
                Durante meu tratamento, percebi as inúmeras barreiras que mulheres com condições crônicas enfrentam: 
                longos períodos para diagnóstico, falta de acesso a especialistas qualificados, e tratamentos 
                fragmentados que não consideram a pessoa como um todo.
              </Typography>
              
              <Typography 
                sx={{ 
                  color: theme.palette.primary.dark,
                  mb: 3,
                  fontSize: '1rem',
                  lineHeight: 1.7
                }}
              >
                Formada em Ciência Política e com mestrado em andamento também em Ciência Política, uni minha experiência pessoal e 
                profissional para criar a Berta em 2025 — uma plataforma que oferece acompanhamento 
                integral e personalizado para pessoas com endometriose e outras condições crônicas.
              </Typography>
              
              <Typography 
                sx={{ 
                  color: theme.palette.primary.dark,
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  lineHeight: 1.7
                }}
              >
                "Meu objetivo é que nenhuma mulher precise esperar anos por um diagnóstico ou se sinta desamparada 
                durante seu tratamento. Na Berta, acreditamos que cuidado de qualidade deve ser acessível, 
                personalizado e baseado em evidências científicas."
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 