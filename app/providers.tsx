'use client'

import { SessionProvider } from 'next-auth/react'

import { ToastProvider } from '@/components/ui/Toast'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ToastProvider>{children}</ToastProvider>
    </SessionProvider>
  )
}

export default Providers
