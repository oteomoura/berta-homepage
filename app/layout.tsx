import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Outfit, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"

// Modern font for body text
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

// Font for navbar
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Berta - Plataforma de bem-estar",
  description: "Plataforma de bem-estar para pessoas com endometriose e outras doenças crônicas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Outfit:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className={`${dmSans.variable} ${outfit.variable} ${playfair.variable}`}>
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
