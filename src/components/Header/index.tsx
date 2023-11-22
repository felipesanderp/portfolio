import { MobileNav } from './mobile-nav'

export function Header() {
  return (
    <header className="sticky p-4">
      <div className="flex items-center justify-between">
        <span>felipesanderp</span>
        <MobileNav />
      </div>
    </header>
  )
}
