'use client'

import * as React from 'react'
import { ThemeProvider as MUIThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { PaletteMode } from '@mui/material'

// Define light theme
const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#EC4899', // Pink color from your previous design
      light: '#F9A8D4',
      dark: '#BE185D',
    },
    secondary: {
      main: '#9333EA', // Secondary color
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9FAFB',
    },
  },
  typography: {
    fontFamily: "'DM Sans', 'Outfit', 'Playfair Display', sans-serif",
    h1: {
      fontWeight: 700,
      color: '#831843', // text-pink-900 equivalent
    },
    h2: {
      fontWeight: 700,
      color: '#831843',
    },
    h3: {
      fontWeight: 600,
      color: '#831843',
    },
    h4: {
      fontWeight: 600,
      color: '#831843',
    },
    body1: {
      color: '#BE185D', // text-pink-700 equivalent
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24, // Rounded-full equivalent
          padding: '8px 16px',
        },
        containedPrimary: {
          boxShadow: '0 10px 15px -3px rgba(236, 72, 153, 0.2)',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgba(236, 72, 153, 0.3)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

// Dark theme
const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#EC4899',
      light: '#F9A8D4',
      dark: '#BE185D',
    },
    secondary: {
      main: '#9333EA',
    },
    background: {
      default: '#111827',
      paper: '#1F2937',
    },
  },
  typography: {
    fontFamily: "'DM Sans', 'Outfit', 'Playfair Display', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '8px 16px',
        },
        containedPrimary: {
          boxShadow: '0 10px 15px -3px rgba(236, 72, 153, 0.2)',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgba(236, 72, 153, 0.3)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
};

// ColorModeContext
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export function ThemeProvider({ 
  children, 
  defaultTheme = 'light'
}: ThemeProviderProps) {
  const [mode, setMode] = React.useState<PaletteMode>(defaultTheme === 'dark' ? 'dark' : 'light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
}
