import { Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/Toaster'
import Providers from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Auth Practice',
  description: 'A small app which is intended to play around with Next Auth',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <main className='mt-[10vh] flex h-screen w-full items-start justify-center'>
            {children}
          </main>

          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
