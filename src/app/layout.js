'use client'
import Navber from '@/components/navber/Navber'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { inter } from './font'
import { ThemeProvider } from '../../context/ThemeContext'
// import { inter } from './fonts'


export const metadata = {
  title: 'This is first app of Next js',
  description: 'learn next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider >
          <Navber />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
