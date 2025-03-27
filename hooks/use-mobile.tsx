import * as React from "react"
import { useMediaQuery, useTheme } from '@mui/material';

/**
 * Hook that returns whether the current viewport matches the mobile breakpoint
 * using Material UI's built-in breakpoint system
 * 
 * @returns boolean indicating if current viewport is mobile size
 */
export function useIsMobile() {
  const theme = useTheme();
  // Uses MUI's breakpoint system (xs and sm are considered mobile)
  return useMediaQuery(theme.breakpoints.down('md'));
}

/**
 * Alternative hook that returns all breakpoint statuses
 * for more granular responsive control
 */
export function useBreakpoints() {
  const theme = useTheme();
  
  return {
    isXs: useMediaQuery(theme.breakpoints.only('xs')),
    isSm: useMediaQuery(theme.breakpoints.only('sm')),
    isMd: useMediaQuery(theme.breakpoints.only('md')),
    isLg: useMediaQuery(theme.breakpoints.only('lg')),
    isXl: useMediaQuery(theme.breakpoints.only('xl')),
    isMobile: useMediaQuery(theme.breakpoints.down('md')),
    isTablet: useMediaQuery(theme.breakpoints.between('sm', 'md')),
    isDesktop: useMediaQuery(theme.breakpoints.up('md'))
  };
}

/**
 * Example usage of responsive conditional rendering with MUI
 */
/* 
function ResponsiveExample() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <div>
      {isMobile ? (
        <MobileLayout />
      ) : (
        <DesktopLayout />
      )}
    </div>
  );
}
*/
