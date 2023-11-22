import { BookText, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 md:mx-auto md:flex-row md:justify-between md:gap-32 lg:max-w-7xl">
      <Image
        className="md:hidden"
        src="/bro.png"
        alt=""
        width={250}
        height={250}
        quality={100}
      />

      <Image
        className="hidden md:order-last md:flex"
        src="/bro-2.png"
        alt=""
        width={500}
        height={500}
        quality={100}
      />
      <div className="flex flex-col gap-6 lg:max-w-xl">
        <h2 className="font-kalam text-gradient from-primary-500 to-secondary bg-gradient-to-r bg-clip-text text-4xl/10 text-transparent">
          Hi, I&apos;m Felipe
        </h2>
        <p className="text-2xl/8 font-medium">
          Full-stack developer and innovation enthusiast
        </p>
        <span className="text-text-secondary text-base">
          Over 4 years of experience in the tech industry. I specialize in
          building innovative web and mobile applications using technologies
          such as React, React Native, and Node.js.
        </span>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="bg-surface-secondary hover:bg-surface-secondary/80 flex h-14 items-center gap-2 rounded-lg p-6 lg:w-auto"
          >
            <BookText />
            My Resume
          </Link>

          <Link
            href="#"
            className="bg-primary-500 hover:bg-primary-500/80 flex h-14 items-center gap-2 rounded-lg p-6 lg:w-auto"
          >
            Get in touch
            <MoveRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
