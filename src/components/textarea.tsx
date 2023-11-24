import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[160px] w-full resize-y rounded-lg border border-surface-background bg-surface-background px-4 py-3 text-text-primary shadow-sm outline-none placeholder:text-text-secondary focus:border-secondary focus:ring-2 focus:ring-secondary"
      {...props}
    />
  )
}
