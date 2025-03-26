'use client'

import React from 'react'
import Image from "next/image"
import { Box, Container, Grid, Button, Stack, Typography, alpha, useTheme } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShieldIcon from '@mui/icons-material/Shield'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { FeatureCard, HeroUnderline, SparkleChip } from "../ui/StyledComponents"
import { useCallback } from "react"

export function Hero() {
  const theme = useTheme();
  
  // Custom smooth scroll function
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate header height for offset (approximately 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);
  
  return (
    <Box 
      component="section" 
      sx={{ 
        width: '100%', 
        py: { xs: 3, md: 4, lg: 4, xl: 10 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background gradients */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at top right, #FDF2F8, #FFFFFF, #FFFFFF)',
        zIndex: -10,
      }} />
      <Box sx={{
        position: 'absolute',
        top: 80,
        right: 80,
        width: 256,
        height: 256,
        backgroundColor: alpha(theme.palette.primary.light, 0.3),
        borderRadius: '50%',
        filter: 'blur(48px)',
        zIndex: -10,
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: 80,
        left: 80,
        width: 288,
        height: 288,
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
        borderRadius: '50%',
        filter: 'blur(48px)',
        zIndex: -10,
      }} />

      <Container sx={{ position: 'relative' }}>
        <SparkleChip 
          icon={<AutoAwesomeIcon />} 
          label="Plataforma inovadora" 
          sx={{ mb: 3 }}
        />

        <Grid container spacing={{ xs: 3, lg: 6 }}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: 3 }}>
              <Box sx={{ mb: 2 }}>
                <Typography
                  component="h1"
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: '#831843', // text-pink-900
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                  }}
                >
                  Cuidado{' '}
                  <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                    especializado
                    <HeroUnderline />
                  </Box>{' '}
                  para doenças crônicas
                </Typography>
                <Typography 
                  sx={{ 
                    maxWidth: 600, 
                    color: '#BE185D', // text-pink-700
                    fontSize: { md: '1.25rem' },
                    lineHeight: 1.6,
                    mt: 2,
                  }}
                >
                  Plataforma de bem-estar para pessoas com endometriose e outras doenças crônicas, com acompanhamento
                  personalizado e baseado em evidências científicas.
                </Typography>
              </Box>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
                sx={{ mb: 4 }}
              >
                <Button 
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('programa-beta')}
                  endIcon={<ArrowRightIcon />}
                >
                  Faça uma avaliação gratuita
                </Button>
                <Button 
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection('sobre')}
                >
                  Saiba mais
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              position: 'relative',
              height: '100%',
            }}>
              {/* Blurred decorative elements */}
              <Box sx={{
                position: 'absolute',
                top: -40,
                left: -40,
                width: 160,
                height: 160,
                backgroundColor: alpha(theme.palette.primary.light, 0.2),
                borderRadius: '50%',
                filter: 'blur(24px)',
                zIndex: -1,
              }} />
              <Box sx={{
                position: 'absolute',
                bottom: -40,
                right: -40,
                width: 160,
                height: 160,
                backgroundColor: alpha(theme.palette.primary.light, 0.2),
                borderRadius: '50%',
                filter: 'blur(24px)',
                zIndex: -1,
              }} />

              <Box sx={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: { xs: '100%', md: 500 },
              }}>
                {/* Decorative circles */}
                <Box sx={{
                  position: 'absolute',
                  top: -24,
                  right: -24,
                  width: 128,
                  height: 128,
                  backgroundColor: alpha(theme.palette.primary.light, 0.3),
                  borderRadius: '50%',
                  zIndex: -1,
                }} />
                <Box sx={{
                  position: 'absolute',
                  bottom: -24,
                  left: -24,
                  width: 128,
                  height: 128,
                  backgroundColor: alpha(theme.palette.primary.light, 0.3),
                  borderRadius: '50%',
                  zIndex: -1,
                }} />

                {/* Main image */}
                <Box sx={{ 
                  position: 'relative', 
                  zIndex: 1, 
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: theme.shadows[15],
                  height: { xs: 300, sm: 400, md: 450, lg: 500 },
                }}>
                  <Image
                    src="/berta-homepage/images/hero-woman.png"
                    alt="Mulher sorrindo em consulta médica"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </Box>

                {/* Feature card 1 */}
                <FeatureCard sx={{
                  position: 'absolute',
                  bottom: -16,
                  left: -16,
                  zIndex: 2,
                }}>
                  <Box className="iconContainer">
                    <FavoriteIcon className="icon" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.primary.dark, fontWeight: 500 }}>
                      Cuidado personalizado
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
                      Baseado em ciência
                    </Typography>
                  </Box>
                </FeatureCard>

                {/* Feature card 2 */}
                <FeatureCard sx={{
                  position: 'absolute',
                  top: -16,
                  right: -16,
                  zIndex: 2,
                }}>
                  <Box className="iconContainer">
                    <ShieldIcon className="icon" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.primary.dark, fontWeight: 500 }}>
                      Médicos especialistas
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
                      Reconhecidos internacionalmente
                    </Typography>
                  </Box>
                </FeatureCard>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 