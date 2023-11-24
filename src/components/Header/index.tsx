import { MobileNav } from './mobile-nav'

export function Header() {
  return (
    <header className="sticky mb-12 p-4 md:px-[112px] md:py-8 lg:flex lg:h-20 lg:items-center lg:shadow-lg">
      <div className="flex w-full items-center justify-between md:mx-auto md:max-w-7xl">
        <span>felipesanderp</span>
        <MobileNav />
      </div>
    </header>
  )
}
