import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rishad Islam',
  description: 'Best Full Stack Web Developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar></Navbar>
        </header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
