'use client'

import React from 'react'
import { useState } from 'react'
import { 
  Box, 
  Button, 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  IconButton, 
  TextField, 
  Typography, 
  alpha, 
  useTheme,
  CircularProgress
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import FlowerIcon from '@mui/icons-material/LocalFlorist'
import { HeroUnderline } from './ui/StyledComponents'

interface MailingListModalProps {
  open: boolean
  onClose: () => void
}

export function MailingListModal({ open, onClose }: MailingListModalProps) {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Replace "your@email.com" with your actual email
      const response = await fetch('https://formsubmit.co/mourateogenes@gmail.com', {
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
  
  const handleReset = () => {
    setSubmitted(false)
    setEmail('')
    setName('')
  }
  
  return (
    <Dialog 
      open={open} 
      onClose={submitted ? () => { onClose(); handleReset() } : onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: `0 10px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
        }
      }}
    >
      <DialogTitle sx={{ 
        pb: 1, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ 
            width: 36, 
            height: 36, 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: alpha(theme.palette.primary.light, 0.2),
          }}>
            <FlowerIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
          </Box>
          <Typography variant="h6" sx={{ color: theme.palette.primary.dark }}>
            Berta
          </Typography>
        </Box>
        <IconButton onClick={submitted ? () => { onClose(); handleReset() } : onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 2, pb: 4 }}>
        {!submitted ? (
          <>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  fontWeight: 700, 
                  color: theme.palette.primary.dark,
                  mb: 1,
                }}
              >
                Fique por dentro de todas as{' '}
                <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                  novidades
                  <HeroUnderline />
                </Box>
              </Typography>
              <Typography sx={{ color: theme.palette.primary.dark }}>
                Cadastre-se para receber atualizações sobre o lançamento, dicas de saúde e promoções exclusivas.
              </Typography>
            </Box>
            
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="Seu nome"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                sx={{ mb: 2 }}
              />
              
              <TextField
                label="Seu email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 3 }}
              />
              
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loading}
                sx={{ 
                  py: 1.5,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  '&:hover': { 
                    backgroundColor: theme.palette.primary.dark,
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s',
                  boxShadow: `0 8px 16px -4px ${alpha(theme.palette.primary.main, 0.25)}`,
                }}
                endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              >
                {loading ? 'Enviando...' : 'Inscrever-se'}
              </Button>
              
              {error && (
                <Typography 
                  color="error" 
                  sx={{ mt: 2, textAlign: 'center' }}
                >
                  {error}
                </Typography>
              )}
              
              <Typography 
                variant="body2" 
                sx={{ 
                  mt: 2, 
                  textAlign: 'center',
                  color: alpha(theme.palette.primary.dark, 0.7),
                  fontSize: '0.75rem',
                }}
              >
                Ao se inscrever, você concorda com nossa Política de Privacidade.
                Nunca enviaremos spam e você pode cancelar sua inscrição a qualquer momento.
              </Typography>
            </Box>
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <Box 
              sx={{ 
                width: 64, 
                height: 64, 
                borderRadius: '50%', 
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <SendIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
            </Box>
            
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                color: theme.palette.primary.dark,
                mb: 1,
              }}
            >
              Obrigado por se inscrever!
            </Typography>
            
            <Typography sx={{ color: theme.palette.primary.dark, mb: 3 }}>
              Você agora faz parte da comunidade Berta. Enviaremos atualizações sobre nosso lançamento 
              e conteúdo exclusivo diretamente para sua caixa de entrada.
            </Typography>
            
            <Button 
              variant="outlined"
              onClick={() => { onClose(); handleReset() }}
              sx={{ 
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.05) },
              }}
            >
              Fechar
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  )
} 