"use client";

import { ReactNode, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/navigation/navigation-menu";
import { Button } from "@/components/ui/button";
// import MobileMenu from "@/_components/ui/mobile-menu";

const NavItem = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  children: ReactNode;
}) => (
  <NavigationMenuLink
    asChild
    className="text-white/90 hover:text-white transition-colors px-3 py-2 text-base font-mono"
    onClick={onClick}
  >
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
);

// const getImagePath = (src: string) => {
//   return process.env.NODE_ENV === "production" ? `/disc-website${src}` : src;
// };

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault();
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            const navHeight = 60;
            const buffer = 264;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - navHeight - buffer;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          const navHeight = 60;
          const buffer = 264;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navHeight - buffer;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    },
    [pathname, router]
  );

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const navHeight = 60;
          const buffer = 264;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navHeight - buffer;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <header className="fixed top-4 z-50 w-full lg:top-2 md:mt-4">
      <div className="mx-auto !max-w-[1550px] !px-6 md:!px-9]">
        <nav
          className="rounded-2xl px-2 transition-all duration-300 ease-in-out"
          aria-label="Main navigation"
        >
          <div className="flex py-0 md:py-2 items-center">
            <div>
              <Link
                href="/"
                className="flex flew-row justify-center items-center gap-1"
              >
                <Image
                  src="https://se-images.campuslabs.com/clink/images/7fa49590-7782-41cb-942b-c4602cdf50c4e027cf3b-b17e-4e7c-82c9-4012c2c07b3c.png?preset=med-sq"
                  alt="Emerging Coders Logo"
                  width={35}
                  height={35}
                  unoptimized
                  onClick={() => router.push("/")}
                  className="cursor-pointer"
                />
                <h2 className="text-white/90 text-lg font-semibold ml-2 font-mono">
                  EMERGING CODERS
                </h2>
              </Link>
            </div>
            <div className="hidden md:flex flex-1 justify-center">
              <NavigationMenu>
                <NavigationMenuList className="text-white/90 text-lg flex justify-center space-x-4">
                  <NavItem
                    href="/#about"
                    onClick={(e) => handleNavigation(e, "intro")}
                  >
                    ABOUT
                  </NavItem>
                  <NavItem
                    href="/#features"
                    onClick={(e) => handleNavigation(e, "features")}
                  >
                    MISSION
                  </NavItem>
                  <NavItem
                    href="/#projects"
                    onClick={(e) => handleNavigation(e, "projects")}
                  >
                    CONTACT
                  </NavItem>
                  <NavItem
                    href="/#team"
                    onClick={(e) => handleNavigation(e, "team")}
                  >
                    TEAM
                  </NavItem>
                  <NavItem href="/blog">BLOG</NavItem>
                  <NavItem
                    href="/opportunities"
                    onClick={(e) => handleNavigation(e, "opportunities")}
                  >
                    OPPORTUNITIES
                  </NavItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="md:hidden flex-none">{/* <MobileMenu /> */}</div>
            <div className="hidden md:block flex-none">
              <Button className="bg-white hover:bg-white/90 text-black font-semibold transition-colors text-base font-mono py-5">
                <a href="https://discord.gg/mqRQ7s9CyS">Join EMCO</a>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
