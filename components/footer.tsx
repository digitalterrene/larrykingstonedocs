import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  HeartIcon,
  HexagonIcon,
  LinkedinIcon,
  TriangleIcon,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <img alt="Vertueal Docs" src={"/logosmall.png"} className="w-10" />
          <p className="text-center">
            Official
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/digitalterrene"
            >
              Larry Docs
            </Link>
            documentation. A comphrehensive documentation for my projects
            <Link
              className="px-1 underline underline-offset-2"
              href="https://larrykingstone.com"
            >
              Website
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/larry-kingstone-71516824a/"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <LinkedinIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        LinkedIn
      </Link>
      <Link
        href="https://github.com/digitalterrene/larrykingstonedocs"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Repository
      </Link>
    </>
  );
}
