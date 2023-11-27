'use client'

import { MoveUp } from 'lucide-react'

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex h-28 items-center justify-center px-[112px] py-8">
      <div className="flex flex-col justify-between gap-4 md:w-full md:max-w-7xl md:flex-row">
        <p className="text-sm/6 text-text-secondary">
          FelipeDev 2023. Layout based on Rocketseats template.
        </p>
        <div className="flex items-center justify-center gap-6 text-base/6 text-text-secondary">
          <a
            href="https://github.com/felipesanderp"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://github.com/felipesanderp"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/felipesanderp"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-background transition-colors hover:bg-surface-primary/80"
            onClick={scrollToTop}
          >
            <MoveUp />
          </button>
        </div>
      </div>
    </div>
  )
}
