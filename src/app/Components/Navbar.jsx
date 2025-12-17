"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 md:px-0 py-6 gap-x-4 sm:gap-x-6 md:gap-x-12">
        
        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-2 shrink-0">
          <Image
            src="/neubodhi-logo.png"
            width={30}
            height={36}
            alt="Neubodhi Logo"
          />
          <span className="text-[16px] text-zinc-900 font-light font-exo2 whitespace-nowrap">
            Neubodhi
          </span>
        </div>

        {/* RIGHT: Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-zinc-900 text-base font-normal font-exo2">
            Home
          </Link>

          <Link href="/projects" className="text-neutral-400 hover:text-zinc-900 text-base font-normal font-exo2">
            Projects
          </Link>
          
          <Link href="/about" className="text-neutral-400 hover:text-zinc-900 text-base font-normal font-exo2">
            AboutUs
          </Link>
          
          <Link href="/contact" className="text-neutral-400 hover:text-zinc-900 text-base font-normal font-exo2">
            ContactUs
          </Link>
        </div>

      </div>
    </nav>
  );
}

