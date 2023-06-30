'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Laptop, Moon, Sun } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import { Button } from '@/components/ui/Button'

const ThemeMenu = () => {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='absolute right-[5vw] top-5 md:right-5'>
        <Button variant='outline' size='icon' aria-label='Switch theme'>
          <Sun size={18} className='inline-block text-lg dark:hidden' />
          <Moon size={18} className='hidden text-lg dark:inline-block' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side='top' align='end'>
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={cn(theme === 'light' && 'bg-accent')}
        >
          <Sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={cn(theme === 'dark' && 'bg-accent')}
        >
          <Moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={cn(theme === 'system' && 'bg-accent')}
        >
          <Laptop className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeMenu
