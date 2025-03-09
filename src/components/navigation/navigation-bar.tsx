"use client";

import { ReactNode, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
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
    className={navigationMenuTriggerStyle()}
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
    <header className="fixed left-0 right-0 top-0 z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-[1070px]">
        <nav
          className="rounded-2xl border border-gray-200 bg-background px-2 transition-all duration-300 ease-in-out dark:border-gray-50"
          aria-label="Main navigation"
        >
          <div className="flex h-12 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Image
                src="/disc_logo.png"
                alt="DISC Logo"
                width={40}
                height={40}
                unoptimized
                onClick={() => router.push("/")}
                className="cursor-pointer"
              />
              <nav className="ml-4 hidden md:block" aria-label="Main menu">
                <NavigationMenu>
                  <NavigationMenuList className="text-black/60 dark:text-gray-500">
                    <NavItem
                      href="/#about"
                      onClick={(e) => handleNavigation(e, "intro")}
                    >
                      About
                    </NavItem>
                    <NavItem
                      href="/#features"
                      onClick={(e) => handleNavigation(e, "features")}
                    >
                      What We Do
                    </NavItem>
                    <NavItem
                      href="/#projects"
                      onClick={(e) => handleNavigation(e, "projects")}
                    >
                      Projects
                    </NavItem>
                    <NavItem
                      href="/#team"
                      onClick={(e) => handleNavigation(e, "team")}
                    >
                      Team
                    </NavItem>
                    <NavItem
                      href="/#faq"
                      onClick={(e) => handleNavigation(e, "faq")}
                    >
                      FAQ
                    </NavItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>
            <div className="lg:hidden">{/* <MobileMenu /> */}</div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {/* <Link
                  href="/clients"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  For Clients
                </Link> */}
                <Link
                  href="/executive-board"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Exec Board Apps
                </Link>
                <Link
                  href="/discover-program"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Discover Program
                </Link>
                <Link
                  href="https://workshops.discnu.org"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Workshop Series
                </Link>
                <Button className="bg-[#40B4B4] hover:bg-[#369999] text-white font-semibold">
                  <a href="https://discord.gg/mqRQ7s9CyS">Join DISC</a>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
