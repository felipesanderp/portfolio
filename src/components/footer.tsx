import { MoveUp } from 'lucide-react'

export function Footer() {
  return (
    <div className="flex h-28 items-center justify-center px-[112px] py-8">
      <div className="flex flex-col justify-between gap-4 md:w-full md:max-w-7xl md:flex-row">
        <p className="text-sm/6 text-text-secondary">
          FelipeDev 2023. Layout based on Rocketseats template.
        </p>
        <div className="flex items-center justify-center gap-6 text-base/6 text-text-secondary">
          <span>GitHub</span>
          <span>LinkedIn</span>
          <span>Instagram</span>
          <button>
            <MoveUp />
          </button>
        </div>
      </div>
    </div>
  )
}
