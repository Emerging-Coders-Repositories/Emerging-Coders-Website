'use client';

import ListservSignup from '@/components/list-serv-signup';
import { footerSections, socialMediaLinks } from '@/constants/footer-links';
import type { FooterSection, SocialMediaLink } from '@/types/footer';
import Link from 'next/link';

import { Button } from './ui/button';

const typedFooterSections = footerSections as FooterSection[];
const typedSocialMediaLinks = socialMediaLinks as SocialMediaLink[];

export default function Footer() {
  return (
    <footer
      className='w-full  text-white py-16 border-t border-white/10'
      id='footer'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 xl:grid-cols-6'>
          <div className='col-span-full mb-8 xl:col-span-2 xl:mb-0'>
            <Link
              className='inline-block font-bold text-3xl text-white'
              href='/'
            >
              Emerging Coders
            </Link>
            <p className='mt-5 text-sm leading-relaxed text-gray-400 font-mono max-w-md'>
              Northwestern University&apos;s community for First-Generation and
              Low-Income students in technology. Empowering students through
              mentorship, education, and inclusive innovation.
            </p>
          </div>
          {typedFooterSections.map(({ title, links }, idx) => (
            <div key={idx}>
              <h5 className='font-bold text-lg mb-4 font-mono'>{title}</h5>
              <ul className='space-y-3 text-gray-400'>
                {links.map(({ text, href, target = '_self' }, idx) => (
                  <li key={idx}>
                    <Link
                      href={href}
                      target={target}
                      className='text-sm hover:text-purple-400 transition-colors duration-200'
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='col-span-2'>
            <h5 className='font-bold text-lg mb-4 font-mono'>Join Us</h5>
            <div className='space-y-4'>
              <p className='text-sm text-gray-400'>
                Interested in becoming a member? Join our community and
                newsletter.
              </p>
              <ListservSignup />
            </div>
          </div>
        </div>
        <div className='mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6'>
          <span className='text-sm text-gray-500 font-mono'>
            &copy; {new Date().getFullYear()} Emerging Coders - Northwestern
            University
          </span>
          <span className='text-sm text-gray-500 font-mono'>
            built and designed by{' '}
            <Link
              href='https://ethanpinedaa.dev/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              ethan pineda
            </Link>
          </span>

          <div className='flex items-center gap-4'>
            {typedSocialMediaLinks.map(({ icon: Icon, link, label }) => (
              <Button
                key={label}
                variant='ghost'
                size='icon'
                className='rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors'
                aria-label={label}
              >
                <Link href={link} target='_blank' rel='noopener noreferrer'>
                  <Icon className='h-5 w-5' />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
