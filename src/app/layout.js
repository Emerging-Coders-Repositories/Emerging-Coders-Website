import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emerging Coders',
  description: 'Emerging Coders is a community for FGLI (First-Gen Low-income) students who are interested in technology. They focus on providing mentorship and support for underrepresented groups within technology, providing pathways for students to develop their skills in technology, and promoting equality and a social environment where each other can learn from one another..',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
