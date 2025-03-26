'use client'

import { Box, Chip, Container, Link as MuiLink, Stack, Typography, alpha, useTheme } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ShieldIcon from '@mui/icons-material/Shield'
import { MailingListModal } from "../MailingListModal"
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export function CallToAction() {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box 
      component="section" 
      sx={{ 
        width: '100%', 
        py: { xs: 8, md: 12, lg: 16 },
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        color: theme.palette.common.white,
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/images/pattern-bg.png")',
          backgroundRepeat: 'repeat',
          opacity: 0.05,
          zIndex: 0,
        }}
      />
      <Box sx={{
        position: 'absolute',
        top: 80,
        right: 80,
        width: 256,
        height: 256,
        backgroundColor: alpha('#FFFFFF', 0.2),
        borderRadius: '50%',
        filter: 'blur(48px)',
        zIndex: 0,
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: 80,
        left: 80,
        width: 288,
        height: 288,
        backgroundColor: alpha('#FFFFFF', 0.2),
        borderRadius: '50%',
        filter: 'blur(48px)',
        zIndex: 0,
      }} />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Chip 
            label="Comece agora" 
            sx={{ 
              mb: 2, 
              backgroundColor: alpha('#FFFFFF', 0.2),
              color: theme.palette.common.white,
              py: 0.5,
              px: 1,
              backdropFilter: 'blur(4px)',
            }} 
          />
          
          <Box sx={{ maxWidth: '85%', mx: 'auto', mb: 4 }}>
            <Typography 
              variant="h3"
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                color: theme.palette.common.white,
                mb: 2,
                fontSize: { xs: '1.875rem', sm: '2.25rem', md: '3rem' },
              }}
            >
              Comece sua jornada para uma vida com mais qualidade
            </Typography>
            <Typography 
              sx={{ 
                color: alpha('#FFFFFF', 0.9),
                fontSize: { md: '1.25rem' },
                maxWidth: 900,
                mx: 'auto'
              }}
            >
              Dê o primeiro passo hoje para uma vida com menos dor e mais bem-estar.
            </Typography>
          </Box>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            sx={{ mb: 5 }}
          >
            <Button
              onClick={() => setModalOpen(true)}
              variant="contained"
              size="lg"
              endIcon={<ArrowRightIcon />}
            >
              Fazer avaliação gratuita
            </Button>
            <MailingListModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </Stack>
          
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              backgroundColor: alpha(theme.palette.common.white, 0.1),
              backdropFilter: 'blur(4px)',
              borderRadius: 24,
              px: 3,
              py: 1.5,
            }}
          >
            <ShieldIcon fontSize="small" />
            <Typography variant="body2">
              Seus dados estão seguros conosco. Leia nossa{' '}
              <MuiLink 
                href="#" 
                underline="always"
                sx={{ color: theme.palette.common.white }}
              >
                Política de Privacidade
              </MuiLink>.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 