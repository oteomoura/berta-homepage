'use client'

import Image from "next/image"
import { Box, Chip, Container, Grid, Typography, alpha, useTheme } from "@mui/material"
import { HeroUnderline, PartnerLogo } from "../ui/StyledComponents"

export function Partners() {
  const theme = useTheme();
  
  return (
    <Box 
      id="parceiros" 
      component="section" 
      sx={{ 
        width: '100%', 
        py: { xs: 6, md: 12, lg: 16 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background gradients */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, #FDF2F8, #FFFFFF, #FFFFFF)',
        zIndex: -10,
      }} />
      <Box sx={{
        position: 'absolute',
        top: 160,
        right: 80,
        width: 288,
        height: 288,
        backgroundColor: alpha(theme.palette.primary.light, 0.3),
        borderRadius: '50%',
        filter: 'blur(48px)',
        zIndex: -10,
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: 160,
        left: 80,
        width: 288,
        height: 288,
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
        borderRadius: '50%',
        filter: 'blur(48px)',
        zIndex: -10,
      }} />

      <Container sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 5 }}>
          <Chip 
            label="Parceiros" 
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
              Trabalhamos com os{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                melhores
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
              Parcerias com os melhores profissionais e instituições para garantir seu bem-estar.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto', py: 6, justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={4}>
            <PartnerLogo>
              <Box className="logoContainer">
                <Image
                  src="/images/clinic-logo.png"
                  width={100}
                  height={100}
                  alt="Logo de clínica parceira"
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark, fontSize: '1.125rem' }}>
                  Clínica Especializada
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                  Referência em endometriose
                </Typography>
              </Box>
            </PartnerLogo>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <PartnerLogo>
              <Box className="logoContainer">
                <Image
                  src="/images/hospital-logo.png"
                  width={100}
                  height={100}
                  alt="Logo de hospital parceiro"
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark, fontSize: '1.125rem' }}>
                  Hospital Referência
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                  Excelência em tratamentos
                </Typography>
              </Box>
            </PartnerLogo>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <PartnerLogo>
              <Box className="logoContainer">
                <Image
                  src="/images/lab-logo.png"
                  width={100}
                  height={100}
                  alt="Logo de laboratório parceiro"
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark, fontSize: '1.125rem' }}>
                  Laboratório Premium
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                  Exames de alta precisão
                </Typography>
              </Box>
            </PartnerLogo>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 