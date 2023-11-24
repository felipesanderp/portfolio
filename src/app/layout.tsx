import type { Metadata } from 'next'
import { Heebo, Kalam } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/footer'

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--font-heebo',
  weight: ['400', '500'],
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
        <div className="min-h-screen">
          <Header />

          <main className="p-6">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
