"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

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
        <div className="flex flex-row gap-4 sm:gap-6 text-sm sm:text-base overflow-x-auto">                
          <Link
            href="/"
            className={`text-base font-normal font-exo2 ${
              isActive("/") ? "text-zinc-900" : "text-neutral-400 hover:text-zinc-900"
            }`}
          >
            Home
          </Link>

          <Link
            href="/Projects"
            className={`text-base font-normal font-exo2 ${
              isActive("/Projects") ? "text-zinc-900" : "text-neutral-400 hover:text-zinc-900"
            }`}
          >
            Projects
          </Link>
          
          <Link
            href="/AboutUs"
            className={`text-base font-normal font-exo2 ${
              isActive("/AboutUs") ? "text-zinc-900" : "text-neutral-400 hover:text-zinc-900"
            }`}
          >
            AboutUs
          </Link>
          
          <Link
            href="/ContactUs"
            className={`text-base font-normal font-exo2 ${
              isActive("/ContactUs") ? "text-zinc-900" : "text-neutral-400 hover:text-zinc-900"
            }`}
          >
            ContactUs
          </Link>
        </div>
      </div>
    </nav>
  );
}
