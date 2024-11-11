"use client";
import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="h-full w-full bg-cover">
      <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
        <Link
          href="https://github.com/digitalterrene"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
        >
          Visit my githhub{" "}
          <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
        </Link>
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
          A detailed documentation for Larry's portfolio projects
        </h1>
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          This comprehensive documentation for some of my projects, built with
          Next.js, offers a sleek and responsive design, that gives you a great
          UX.
        </p>
        <div className="flex flex-row items-center gap-5">
          <Link
            href={`/docs/${page_routes[0].href}`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Read Documentation
          </Link>
          <Link
            href="https://larrykingstone.com"
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              className: "px-6",
              size: "lg",
            })}
          >
            Visit My Portfolio
          </Link>
        </div>
        <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
          <TerminalIcon className="w-4 h-4 mr-1" /> ~ compiled by digitalterrene
        </span>
      </div>
    </div>
  );
}
