import { ProjectCard } from '@/components/ProjectCard'
import { BookText, Github, Instagram, Linkedin, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import * as Input from '@/components/input'
import { Textarea } from '@/components/textarea'

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:mx-auto md:gap-16 lg:max-w-[1440px]">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-32 md:px-28">
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
          <div className="animate-bounce">
            <Image
              className="translate-x-4 rotate-[130deg]"
              src="/graphic-03.svg"
              alt=""
              width={100}
              height={100}
              quality={100}
            />
          </div>
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
      <div className="flex w-full flex-col gap-6 rounded-2xl bg-surface-primary px-6 py-12 md:grid md:grid-cols-2 md:p-20">
        <Image src="/girl.svg" alt="" quality={100} width={500} height={500} />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <Image
              src="/stack/JavaScript.png"
              width={24}
              height={24}
              alt=""
              quality={100}
            />

            <Image
              src="/stack/Node.js.png"
              width={24}
              height={24}
              alt=""
              quality={100}
            />

            <Image
              src="/stack/React.png"
              width={24}
              height={24}
              alt=""
              quality={100}
            />

            <Image
              src="/stack/Tailwind.png"
              width={24}
              height={24}
              alt=""
              quality={100}
            />
          </div>
          <span className="font-kalam text-base/4 text-secondary">
            About Me
          </span>
          <h2 className="text-2xl font-medium text-text-primary">
            I&apos;m a passionate software developer looking for my first
            international opportunity
          </h2>
          <p className="text-base/6 text-text-secondary">
            Beyond coding, I&apos;m a coffee enthusiast, a cat lover, and a
            self-taught artist who enjoys spending my free time doodling. I am
            currently seeking opportunities to bring my skills and enthusiasm to
            a tech company in the United States or Europe and am excited about
            the prospect of relocating to pursue new challenges.
          </p>

          <Link
            href="#"
            className="flex h-14 w-fit items-center gap-2 rounded-lg bg-primary-500 p-6 hover:bg-primary-500/80"
          >
            <BookText />
            My Resume
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 md:px-28 md:py-[72px]">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-kalam text-base/4 text-secondary">Projects</h3>
          <h2 className="text-2xl/8 font-medium">
            Take a look at my highlighted projects
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:items-center md:gap-8">
          <ProjectCard />

          <ProjectCard />

          <ProjectCard />
        </div>
        <Link
          href="#"
          className="flex h-14 items-center gap-2 rounded-lg bg-surface-secondary p-6 hover:bg-surface-secondary/80 lg:w-auto"
        >
          See all
          <MoveRight />
        </Link>
      </div>
      <div className="flex w-full flex-col gap-6 rounded-2xl bg-surface-primary px-6 py-12 md:grid md:grid-cols-2 md:gap-[136px] md:p-[72px]">
        <div className="flex flex-col gap-6">
          <Image
            src="/cute-avatar.svg"
            alt=""
            width={160}
            height={160}
            quality={100}
          />
          <span className="font-kalam text-base/4 text-secondary">Contact</span>
          <h2 className="text-2xl font-medium text-text-primary">
            Enjoy my work? Let&apos;s work together
          </h2>
          <p className="text-base/6 text-text-secondary">
            I&apos;m always up for a chat.Pop me an email at{' '}
            <span className="text-secondary underline">
              felipesanderp@hotmail.com
            </span>{' '}
            or give me a shout on social media
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/felipesanderp"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-secondary hover:bg-surface-secondary/80"
              rel="noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://github.com/felipesanderp"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-secondary hover:bg-surface-secondary/80"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/felipesanderp"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-secondary hover:bg-surface-secondary/80"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>

        <form className="flex flex-col gap-4">
          <Input.Root>
            <Input.Control type="text" id="name" placeholder="Name" />
          </Input.Root>
          <Input.Root>
            <Input.Control type="email" id="email" placeholder="E-mail" />
          </Input.Root>
          <Textarea placeholder="Your Message" />

          <button className="mt-2 flex h-14 w-fit items-center gap-2 rounded-lg bg-primary-500 p-6 hover:bg-primary-500/80">
            Send me a message
            <MoveRight />
          </button>
        </form>
      </div>
    </div>
  )
}
