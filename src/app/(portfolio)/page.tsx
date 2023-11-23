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

      <div className="hidden md:order-last md:flex md:flex-col">
        <Image
          className="mb-6"
          src="/bro-2.png"
          alt=""
          width={500}
          height={500}
          quality={100}
        />
        <Image
          className="translate-x-4 rotate-[130deg]"
          src="/graphic-03.svg"
          alt=""
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <div className="flex flex-col gap-6 lg:max-w-xl">
        <h2 className="text-gradient bg-gradient-to-r from-primary-500 to-secondary bg-clip-text font-kalam text-4xl/10 text-transparent">
          Hi, I&apos;m Felipe
        </h2>
        <p className="text-2xl/8 font-medium">
          Full-stack developer and innovation enthusiast
        </p>
        <span className="text-base text-text-secondary">
          Over 4 years of experience in the tech industry. I specialize in
          building innovative web and mobile applications using technologies
          such as React, React Native, and Node.js.
        </span>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="flex h-14 items-center gap-2 rounded-lg bg-surface-secondary p-6 hover:bg-surface-secondary/80 lg:w-auto"
          >
            <BookText />
            My Resume
          </Link>

          <Link
            href="#"
            className="flex h-14 items-center gap-2 rounded-lg bg-primary-500 p-6 hover:bg-primary-500/80 lg:w-auto"
          >
            Get in touch
            <MoveRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
