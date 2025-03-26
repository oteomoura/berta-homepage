'use client'

import { Box, Container, useTheme, alpha } from "@mui/material"
import { Header } from "../components/sections/Header"
import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Services } from "../components/sections/Services"
import { BetaProgram } from "../components/sections/BetaProgram"
import { WhoAreWe } from "../components/sections/WhoAreWe"
import { CallToAction } from "../components/sections/CallToAction"
import { Footer } from "../components/sections/Footer"

export default function LandingPage() {
  const theme = useTheme();
  
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      {/* Background gradients */}
      <Box 
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '33%',
          height: '100vh',
          background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.primary.light, 0.2)})`,
          zIndex: -10,
          filter: 'blur(24px)',
        }}
      />
      <Box 
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '33%',
          height: '100vh',
          background: `linear-gradient(to top, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.primary.light, 0.2)})`,
          zIndex: -10,
          filter: 'blur(24px)',
        }}
      />

      {/* Header */}
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section with reduced top spacing */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Beta Program Section */}
        <BetaProgram />
        
        {/* Who Are We Section (replacing Community) */}
        <WhoAreWe />
        
        {/* CTA Section */}
        <CallToAction />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  )
}

