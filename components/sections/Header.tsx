'use client'

import React, { useState } from 'react'
import Link from "next/link"
import { AppBar, Box, Container, Button, Link as MuiLink, Stack, Toolbar, alpha, useTheme } from "@mui/material"
import FlowerIcon from '@mui/icons-material/LocalFlorist'
import { Logo, NavLink } from "../ui/StyledComponents"
import { MailingListModal } from "../MailingListModal"

export function Header() {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <AppBar 
      position="sticky" 
      color="transparent" 
      elevation={0}
      sx={{ 
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(8px)',
        backgroundColor: alpha('#fff', 0.8),
      }}
    >
      <Container sx={{ 
        position: 'relative', 
        zIndex: 1,
        px: { xs: 2, sm: 3, md: 4 } // Smaller padding on mobile (xs)
      }}>
        <Toolbar sx={{ height: 64 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
            <Link href="/" legacyBehavior>
              <MuiLink component="a" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                <Logo>
                  <Box className="logoIcon">
                    <Box className="iconContainer">
                      <FlowerIcon sx={{ height: 20, width: 20, color: theme.palette.primary.main }} />
                    </Box>
                  </Box>
                  <Box component="span" className="logoText">
                    Berta
                  </Box>
                </Logo>
              </MuiLink>
            </Link>
            
            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <NavLink href="#sobre">Sobre</NavLink>
              <NavLink href="#servicos">Serviços</NavLink>
              <NavLink href="#programa-beta">Junte-se a nós</NavLink>
              <NavLink href="#quem-somos">Quem somos</NavLink>
            </Stack>
          </Box>
          
          <Stack direction="row" spacing={2}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => setModalOpen(true)}
            >
              Começar agora
            </Button>
            <MailingListModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
} 