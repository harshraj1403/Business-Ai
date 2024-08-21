import Image from 'next/image'
import * as React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '100px',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
      </div>
      <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-400 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
      <li ><button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Home
</button>
</li>
        <li><button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        Pricing
</button></li>
        <li><button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        News Room
</button></li>
        <li ><button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        Features
</button></li>
        <li ><button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        Contact us
</button></li>
      </ul>
      <Link
        href="/dashboard"
        // className="bg-orange px-4 py-2 rounded-sm text-white"
      >
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Free Trial
  </span>
</button>
      </Link>
    </div>
  )
}

export default NavBar

