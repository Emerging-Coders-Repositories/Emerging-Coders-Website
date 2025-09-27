'use client';

import { ReactNode, useCallback } from 'react';

import MobileMenu from '@/components/navigation/mobile-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/navigation/navigation-menu';
import { Button } from '@/components/ui/button';
import {
  blogPosts,
  mainNavItems,
  opportunityItems,
} from '@/constants/header-links';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

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
    className='text-white/90 hover:text-white transition-colors px-3 py-2 text-base font-mono'
    onClick={onClick}
  >
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
);

const ListItem = ({
  className,
  title,
  description,
  href,
}: {
  className?: string;
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10 border border-transparent hover:border-zinc-700 duration-300',
            className
          )}
        >
          <div className='text-sm font-medium leading-none text-white/90'>
            {title}
          </div>
          <p className='line-clamp-2 text-sm leading-snug text-white/70'>
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault();
      if (pathname !== '/') {
        router.push('/');
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
              behavior: 'smooth',
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
            behavior: 'smooth',
          });
        }
      }
    },
    [pathname, router]
  );

  return (
    <header className='fixed top-4 z-50 w-full lg:top-2 mt-16 md:mt-2 h-20'>
      <div className='mx-auto !max-w-[1550px] !px-6 md:!px-9]'>
        <nav
          className='rounded-2xl transition-all duration-300 ease-in-out bg-black'
          aria-label='Main navigation'
        >
          <div className='flex w-full justify-between items-center px-4 py-2'>
            <div>
              <Link
                href='/'
                className='flex flew-row justify-center items-center gap-1'
              >
                <svg
                  width='48'
                  height='48'
                  viewBox='0 0 90 86'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                >
                  <g clipPath='url(#clip0_1_19)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M19.3734 10.7812C19.2454 10.8398 19.1215 10.9014 19.0014 10.9659C17.6889 11.6818 16.7543 12.7955 16.1974 14.3068C15.6605 15.7983 15.392 17.7074 15.392 20.0341V31.9659C15.392 33.5171 15.1832 34.929 14.7656 36.2017C14.3679 37.4744 13.6222 38.5682 12.5284 39.483C11.4347 40.3977 9.87358 41.1037 7.84517 41.6009C7.58675 41.6648 7.31828 41.7247 7.03977 41.7804V42.6741C7.31828 42.7299 7.58675 42.7897 7.84517 42.8537C9.87358 43.3509 11.4347 44.0568 12.5284 44.9716C13.6222 45.8864 14.3679 46.9801 14.7656 48.2528C15.1832 49.5256 15.392 50.9375 15.392 52.4886V64.4205C15.392 66.7472 15.6605 68.6563 16.1974 70.1477C16.7543 71.6392 17.6889 72.7429 19.0014 73.4588C20.3338 74.1946 22.1534 74.5625 24.4602 74.5625V80.4091C21.5369 80.4091 19.081 80.0909 17.0923 79.4546C15.1037 78.8182 13.5128 77.8438 12.3196 76.5313C11.1264 75.2188 10.2614 73.5582 9.72443 71.5497C9.20739 69.5412 8.94886 67.1648 8.94886 64.4205V54.875C8.94886 51.6136 8.28267 49.2869 6.95028 47.8949C5.63778 46.5028 3.32102 45.8068 0 45.8068V42.3466V42.108V38.6477C3.32102 38.6477 5.63778 37.9517 6.95028 36.5597C8.28267 35.1676 8.94886 32.8409 8.94886 29.5796V20.0341C8.94886 17.2898 9.20739 14.9134 9.72443 12.9048C10.2614 10.8963 11.1264 9.2358 12.3196 7.9233C13.5128 6.6108 15.1037 5.63637 17.0923 5.00001C18.9058 4.41969 21.1079 4.10397 23.6987 4.05286L24.539 3.52952C33.6742 17.5964 40.7006 28.5928 47.727 39.5892C54.4293 50.0786 61.1317 60.5679 69.6643 73.7222C69.8477 73.6404 70.0231 73.5526 70.1903 73.4588C71.5227 72.7429 72.4574 71.6392 72.9943 70.1477C73.5511 68.6563 73.8295 66.7472 73.8295 64.4205V52.4886C73.8295 50.9375 74.0284 49.5256 74.4261 48.2528C74.8437 46.9801 75.5994 45.8864 76.6932 44.9716C77.7869 44.0568 79.3381 43.3509 81.3466 42.8537C81.6146 42.788 81.893 42.7267 82.1818 42.6697V41.7849C81.893 41.7279 81.6146 41.6665 81.3466 41.6009C79.3381 41.1037 77.7869 40.3977 76.6932 39.483C75.5994 38.5682 74.8437 37.4744 74.4261 36.2017C74.0284 34.929 73.8295 33.5171 73.8295 31.9659V20.0341C73.8295 17.7074 73.5511 15.7983 72.9943 14.3068C72.4574 12.7955 71.5227 11.6818 70.1903 10.9659C68.8778 10.25 67.0682 9.89205 64.7614 9.89205V4.04546C67.6846 4.04546 70.1406 4.36364 72.1292 5.00001C74.1179 5.63637 75.7088 6.6108 76.902 7.9233C78.0952 9.2358 78.9503 10.8963 79.4673 12.9048C80.0042 14.9134 80.2727 17.2898 80.2727 20.0341V29.5796C80.2727 32.8409 80.929 35.1676 82.2415 36.5597C83.5739 37.9517 85.9006 38.6477 89.2216 38.6477V42.108V42.3466V45.8068C85.9006 45.8068 83.5739 46.5028 82.2415 47.8949C80.929 49.2869 80.2727 51.6136 80.2727 54.875V64.4205C80.2727 67.1648 80.0042 69.5412 79.4673 71.5497C78.9503 73.5582 78.0952 75.2188 76.902 76.5313C75.7088 77.8438 74.1179 78.8182 72.1292 79.4546C70.1527 80.0871 67.7145 80.4052 64.8146 80.4091L64.6921 80.5046L19.3734 10.7812Z'
                      fill='white'
                    />
                  </g>
                  <circle
                    cx='30.8977'
                    cy='78'
                    r='6.25'
                    fill='none'
                    stroke='white'
                    strokeWidth='3.5'
                  />
                  <circle
                    cx='58.8977'
                    cy='8'
                    r='6.25'
                    fill='none'
                    stroke='white'
                    strokeWidth='3.5'
                  />
                  <defs>
                    <clipPath id='clip0_1_19'>
                      <rect
                        width='89.2216'
                        height='76.3636'
                        fill='white'
                        transform='translate(0 4.04546)'
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className='text-white/90 text-lg font-semibold ml-2 font-mono'>
                  EMERGING CODERS
                </h2>
              </Link>
            </div>
            <div className='hidden md:flex flex-1 justify-center'>
              <NavigationMenu className='[&_[data-slot=navigation-menu-viewport]]:bg-black [&_[data-slot=navigation-menu-viewport]]:border-zinc-900 [&_[data-slot=navigation-menu-viewport]]:shadow-none'>
                <NavigationMenuList className='text-white/90 text-lg flex justify-center space-x-4'>
                  {mainNavItems.map((item) => (
                    <NavItem
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.id)}
                    >
                      {item.label}
                    </NavItem>
                  ))}

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-white/90 hover:text-white transition-colors px-3 py-2 text-base font-mono bg-transparent hover:bg-transparent'>
                      BLOG
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='bg-black'>
                      <ul className='grid w-[400px] gap-3 p-4 bg-black border border-black rounded-lg'>
                        {blogPosts.map((post) => (
                          <ListItem
                            key={post.href}
                            href={post.href}
                            title={post.title}
                            description={post.description}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-white/90 hover:text-white transition-colors px-3 py-2 text-base font-mono bg-transparent hover:bg-transparent'>
                      OPPORTUNITIES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='bg-black'>
                      <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black border border-black rounded-lg'>
                        <li className='row-span-3 col-span-2 md:col-span-1'>
                          <NavigationMenuLink asChild>
                            <Link
                              className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-purple-600 via-purple-500/50 to-fuchsia-500/40 p-6 no-underline outline-none focus:shadow-md border border-zinc-800 hover:from-purple-500 hover:via-purple-400/50 hover:to-fuchsia-400/40 transition-all duration-300'
                              href='/opportunities'
                            >
                              <div className='mb-2 mt-4 text-lg font-medium text-white'>
                                Career Opportunities
                              </div>
                              <p className='text-sm leading-tight text-white/70'>
                                Explore tech opportunities for students at all
                                levels.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {opportunityItems.map((item) => (
                          <ListItem
                            key={item.href}
                            href={item.href}
                            title={item.title}
                            description={item.description}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                href='/eme'
                className='text-white/90 hover:text-white transition-colors px-3 py-2 text-base font-mono'
              >
                EME
              </Link>
              <Link
                href='/contact'
                className='text-white/90 hover:text-white transition-colors px-3 py-2 text-base font-mono'
              >
                CONTACT
              </Link>
              <Link
                href='/sponsors'
                className='text-white/90 hover:text-white transition-colors px-3 py-2 text-base font-mono'
              >
                SPONSORS
              </Link>
            </div>
            <div className='md:hidden'>
              <MobileMenu />
            </div>

            <div className='hidden md:block'>
              <Button className='bg-white hover:bg-white/90 text-black font-semibold transition-colors text-base font-mono py-5'>
                <a
                  href='https://linktr.ee/nu.emergingcoders'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Join EMCO
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
