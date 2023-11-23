import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-2xl border border-surface-primary bg-surface-primary p-4 transition-colors hover:cursor-pointer hover:border-secondary">
      <Image
        className="rounded-tl-lg rounded-tr-lg"
        src="/projects/dev-links.png"
        width={336}
        height={160}
        alt=""
      />
      <div className="flex items-center justify-between">
        <span className="text-sm/6 text-text-secondary">Jul - Dec 2022</span>
        <Image src="/stack/JavaScript.png" alt="" width={24} height={24} />
      </div>

      <p className="text-xl/6 font-medium">DevLinks</p>
      <span className="text-base/6">A link agragator for social media.</span>
    </div>
  )
}
