import { Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/Toaster'
import ThemeMenu from '@/components/ThemeMenu'
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
          <main className='flex h-screen w-full flex-col items-center pt-[15vh]'>
            {children}

            <ThemeMenu />
          </main>

          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
