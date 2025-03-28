'use client'

import React from 'react'
import { Box, Button, Chip, Container, Grid, TextField, Typography, alpha, useTheme } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import StarIcon from '@mui/icons-material/Star'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import { HeroUnderline, ServiceCard } from "../ui/StyledComponents"
import { useState } from "react"
import Image from "next/image"

export function BetaProgram() {
  const theme = useTheme();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    console.log("nome")
    console.log(name)
    console.log("email")
    console.log(email)
    try {
      const response = await fetch('https://formsubmit.co/a3f5fe9fc198adeae3cc97ad435dbaeb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          _subject: "Nova inscrição no Programa Beta Berta"
        })
      })
      
      console.log("response")
      console.log(response)
      
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      // Clear form and show success message
      setSubmitted(true)
      setName('')
      setEmail('')
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <Box 
      id="programa-beta" 
      component="section" 
      sx={{ 
        width: '100%', 
        py: { xs: 6, md: 12, lg: 16 },
        position: 'relative',
        backgroundColor: theme.palette.common.white,
      }}
    >
      {/* Top gradient to match transition from Services */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 120,
        background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.light, 0.05)}, rgba(255,255,255,0))`,
        zIndex: 0,
      }} />
      
      {/* Very subtle radial gradients for visual interest */}
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
            label="Programa Beta" 
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
              Seja uma das{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                primeiras
                <HeroUnderline />
              </Box>{' '}
              usuárias
            </Typography>
            <Typography 
              sx={{ 
                color: theme.palette.primary.dark,
                fontSize: { md: '1.125rem' },
                maxWidth: 900,
                mx: 'auto',
                mt: 2
              }}
            >
              Junte-se ao nosso programa beta e ajude a moldar o futuro do cuidado para mulheres com endometriose.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4} sx={{ py: 6 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%' }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: theme.palette.primary.dark, 
                  fontWeight: 600, 
                  mb: 4,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Benefícios exclusivos para membros beta
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                p: { xs: 2, md: 4 },
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.primary.light, 0.02),
                height: 'calc(100% - 80px)',
              }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <StarIcon sx={{ color: theme.palette.primary.main, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.dark, mb: 0.5, fontWeight: 600 }}>
                      Acesso antecipado e vitalício
                    </Typography>
                    <Typography sx={{ color: theme.palette.primary.dark }}>
                      Seja uma das primeiras a ter acesso à nossa plataforma e garanta benefícios vitalícios exclusivos.
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <HealthAndSafetyIcon sx={{ color: theme.palette.primary.main, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.dark, mb: 0.5, fontWeight: 600 }}>
                      50% de desconto no plano premium
                    </Typography>
                    <Typography sx={{ color: theme.palette.primary.dark }}>
                      Usuárias beta receberão um desconto exclusivo de 50% na assinatura do plano premium por 12 meses.
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <SupportAgentIcon sx={{ color: theme.palette.primary.main, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.dark, mb: 0.5, fontWeight: 600 }}>
                      Suporte prioritário
                    </Typography>
                    <Typography sx={{ color: theme.palette.primary.dark }}>
                      Tenha acesso direto à nossa equipe de suporte e ajude a moldar o futuro da plataforma com seu feedback.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
                borderRadius: 2,
                p: { xs: 3, md: 5 },
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha('#FFF', 0.8)} 100%)`,
                boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.1)}`,
                backdropFilter: 'blur(8px)',
                height: '100%',
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: theme.palette.primary.dark, 
                  fontWeight: 600, 
                  mb: 4,
                  textAlign: 'center'
                }}
              >
                Inscreva-se para o programa beta
              </Typography>
              
              {!submitted ? (
                <Box 
                  component="form" 
                  onSubmit={handleSubmit}
                  suppressHydrationWarning
                >
                  <Box sx={{ mb: 4 }}>
                    <Typography 
                      sx={{ 
                        color: theme.palette.primary.dark,
                        mb: 3,
                        textAlign: 'center'
                      }}
                    >
                      Estamos selecionando as primeiras 100 usuárias para testar nossa plataforma. 
                      Deixe seu email para garantir sua vaga prioritária.
                    </Typography>
                    
                    <TextField 
                      fullWidth
                      label="Seu nome"
                      type="text"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      sx={{ 
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: alpha('#FFFFFF', 0.8),
                        }
                      }}
                    />
                    
                    <TextField 
                      fullWidth
                      label="Seu email"
                      type="email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      sx={{ 
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: alpha('#FFFFFF', 0.8),
                        }
                      }}
                    />
                    
                    <Button 
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      sx={{ 
                        py: 1.5,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        borderRadius: 2,
                        '&:hover': { 
                          backgroundColor: theme.palette.primary.dark,
                          transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s',
                        boxShadow: `0 10px 15px -3px ${alpha('#000', 0.1)}`,
                      }}
                      endIcon={<SendIcon />}
                      
                    >
                      Garantir minha vaga
                    </Button>
                  </Box>
                  
                  <Typography 
                    variant="body2" 
                    align="center"
                    sx={{ 
                      color: alpha(theme.palette.primary.dark, 0.8),
                      fontSize: '0.875rem',
                    }}
                  >
                    Vagas limitadas. Selecionaremos as primeiras inscritas e 
                    entraremos em contato quando o programa beta estiver disponível.
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: theme.palette.primary.main,
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    Obrigado pelo seu interesse!
                  </Typography>
                  <Typography sx={{ color: theme.palette.primary.dark, mb: 4 }}>
                    Seu email foi registrado com sucesso. Entraremos em contato assim que o programa beta estiver disponível.
                  </Typography>
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
                    onClick={() => setSubmitted(false)}
                  >
                    Inscrever outro email
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            mt: 8, 
            p: 3, 
            backgroundColor: alpha(theme.palette.primary.light, 0.05),
            borderRadius: 2,
            textAlign: 'center',
            maxWidth: 900,
            mx: 'auto'
          }}
        >
          <Typography variant="h6" sx={{ color: theme.palette.primary.dark, mb: 1, fontWeight: 600 }}>
            Lançamento previsto: Julho 2025
          </Typography>
          <Typography sx={{ color: theme.palette.primary.dark }}>
            Nossa plataforma está em fase final de desenvolvimento. 
            As usuárias do programa beta serão as primeiras a experimentar a Berta e 
            terão um papel fundamental em moldar o futuro do cuidado para mulheres com endometriose.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
} 