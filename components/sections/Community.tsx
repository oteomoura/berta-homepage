'use client'

import { useState } from 'react'
import { Box, Button, Chip, Container, Grid, Link, Typography, alpha, useTheme } from "@mui/material"
import { HeroUnderline } from "../ui/StyledComponents"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import MessageIcon from '@mui/icons-material/Message'
import SchoolIcon from '@mui/icons-material/School'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { MailingListModal } from "../MailingListModal"

export function Community() {
  const theme = useTheme()
  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <Box 
      id="comunidade" 
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 5 }}>
          <Chip 
            label="Nossa Comunidade" 
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
              Faça parte da nossa{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                comunidade
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
              Junte-se a outras mulheres em uma comunidade dedicada ao bem-estar e qualidade de vida.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={5} sx={{ maxWidth: 1200, mx: 'auto', mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%',
                p: 4,
                border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                backgroundColor: theme.palette.common.white,
                '&:hover': {
                  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <PeopleAltIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ 
                  color: theme.palette.primary.dark, 
                  fontWeight: 600, 
                  mb: 2 
                }}
              >
                Comunidade de Apoio
              </Typography>
              <Typography sx={{ color: theme.palette.primary.dark, mb: 'auto' }}>
                Conecte-se com outras mulheres que compartilham experiências 
                semelhantes e encontre apoio emocional quando mais precisar.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%',
                p: 4,
                border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                backgroundColor: theme.palette.common.white,
                '&:hover': {
                  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <MessageIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ 
                  color: theme.palette.primary.dark, 
                  fontWeight: 600, 
                  mb: 2 
                }}
              >
                Fóruns de Discussão
              </Typography>
              <Typography sx={{ color: theme.palette.primary.dark, mb: 'auto' }}>
                Participe de conversas moderadas por especialistas sobre 
                tratamentos, dicas de bem-estar e novas pesquisas científicas.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%',
                p: 4,
                border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                backgroundColor: theme.palette.common.white,
                '&:hover': {
                  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: alpha(theme.palette.primary.light, 0.15),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <SchoolIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ 
                  color: theme.palette.primary.dark, 
                  fontWeight: 600, 
                  mb: 2 
                }}
              >
                Conteúdo Educativo
              </Typography>
              <Typography sx={{ color: theme.palette.primary.dark, mb: 'auto' }}>
                Acesse artigos, vídeos e webinars sobre endometriose, 
                autocuidado e como melhorar sua qualidade de vida.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            textAlign: 'center',
            p: 5,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.15)} 0%, ${alpha('#FFFFFF', 0.8)} 100%)`,
            mb: 4
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              color: theme.palette.primary.dark, 
              fontWeight: 600, 
              mb: 2 
            }}
          >
            Fique por dentro das novidades
          </Typography>
          <Typography sx={{ color: theme.palette.primary.dark, mb: 4, maxWidth: 800, mx: 'auto' }}>
            Nossa plataforma está em desenvolvimento. Cadastre-se para receber atualizações,
            dicas de saúde e ser uma das primeiras a experimentar nossa plataforma quando for lançada.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setModalOpen(true)}
            sx={{ 
              py: 1.5,
              px: 4,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
              '&:hover': { 
                backgroundColor: theme.palette.primary.dark,
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s',
              boxShadow: `0 8px 16px -4px ${alpha('#000', 0.1)}`,
            }}
            endIcon={<ArrowRightIcon />}
          >
            Inscrever-se na lista
          </Button>
        </Box>
        
        <MailingListModal open={modalOpen} onClose={() => setModalOpen(false)} />
        
        <Box 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            px: 2,
            py: 3,
            mt: 4,
            mx: 'auto',
            maxWidth: 600,
            backgroundColor: alpha(theme.palette.primary.light, 0.05),
            borderRadius: 2,
          }}
        >
          <Box 
            sx={{ 
              width: 40, 
              height: 40, 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: alpha(theme.palette.primary.light, 0.2),
              flexShrink: 0,
            }}
          >
            <MessageIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
          </Box>
          <Typography variant="body2" sx={{ color: theme.palette.primary.dark }}>
            Mais de 2000 pessoas já acompanham o Endopolítica, nosso projeto irmão sobre endometriose e dor crônica.
            Que tal se <Link href="https://www.instagram.com/endopolítica/" target="_blank" rel="noopener noreferrer">juntar a nós?</Link> 
          </Typography>
        </Box>
      </Container>
    </Box>
  )
} 