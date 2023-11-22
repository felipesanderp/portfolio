import { MobileNav } from './mobile-nav'

export function Header() {
  return (
    <header className="sticky mb-12 p-4 lg:flex lg:h-20 lg:items-center lg:shadow-lg">
      <div className="flex items-center justify-between lg:mx-auto lg:w-full lg:max-w-[1440px]">
        <span>felipesanderp</span>
        <MobileNav />
      </div>
    </header>
  )
}
