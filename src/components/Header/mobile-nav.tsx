'use client'

import * as Sheet from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet.Root open={open} onOpenChange={setOpen}>
      <Sheet.Trigger asChild>
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </Sheet.Trigger>
      <Sheet.Portal>
        <Sheet.Overlay className="bg-surface-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-sm" />
        <Sheet.Content className="data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left bg-surface-primary data-[state=open]:animate-in data-[state=closed]:animate-out fixed inset-y-0 right-0 z-50 h-full w-72 gap-4 border-r p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 sm:max-w-sm">
          <Sheet.Close className="focus:ring-surface-background absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2  focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Sheet.Close>
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet.Root>
  )
}
