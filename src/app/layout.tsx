import type { Metadata } from 'next'
import { Heebo, Kalam } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--font-heebo',
  weight: ['400', '600'],
})
const kalam = Kalam({
  subsets: ['latin'],
  variable: '--font-kalam',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Felipe Dev | Portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${heebo.variable} ${kalam.variable}`}>
      <body className="bg-surface-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
