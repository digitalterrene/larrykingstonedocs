"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { AiOutlineLinkedin } from "react-icons/ai";
import { LuGithub } from "react-icons/lu";
import { BsGlobe2 } from "react-icons/bs";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { useEffect, useState } from "react";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs/${page_routes[0].href}`,
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-8">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex">
              <Link
                href="https://larrykingstone.com"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <BsGlobe2 className="text-lg" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/larry-kingstone-71516824a/"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <AiOutlineLinkedin className="text-lg" />
              </Link>
              <Link
                href="https://github.com/digitalterrene"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <LuGithub className="text-lg" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This ensures the component only renders after mounting
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoids SSR issues with theme

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <img
        alt="Larry's Docs"
        src={`${theme === "dark" ? "/logodark.png" : "/logo.png"}`}
        className="w-60"
      />
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-black dark:text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
