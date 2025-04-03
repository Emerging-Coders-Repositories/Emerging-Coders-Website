'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nuemergingcoders@gmail.com?subject=${encodeURIComponent(
      subject || 'Contact from Website'
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='min-h-screen text-white mt-24'>
      <div className='max-w-6xl mx-auto px-6 pt-28 pb-16'>
        <div className='text-center mb-16'>
          <h1 className='text-7xl font-bold mb-4'>Contact Us</h1>
          <p className='text-lg text-zinc-500 font-mono max-w-2xl mx-auto'>
            Have questions about Emerging Coders? Want to get involved or
            collaborate? We&apos;d love to hear from you.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div>
            <h2 className='text-3xl font-bold mb-6'>Get in Touch</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-zinc-400 mb-2 font-mono'
                >
                  Your Name
                </label>
                <Input
                  id='name'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='w-full bg-black border-zinc-800 text-white focus-visible:ring-purple-500/30'
                  placeholder='John Doe'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-zinc-400 mb-2 font-mono'
                >
                  Your Email
                </label>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-full bg-black border-zinc-800 text-white focus-visible:ring-purple-500/30'
                  placeholder='john@example.com'
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block text-zinc-400 mb-2 font-mono'
                >
                  Subject
                </label>
                <Input
                  id='subject'
                  type='text'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className='w-full bg-black border-zinc-800 text-white focus-visible:ring-purple-500/30'
                  placeholder='Enquiry about Emerging Coders'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-zinc-400 mb-2 font-mono'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className='w-full bg-black border border-zinc-800 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/50'
                  placeholder='Your message here...'
                />
              </div>
              <Button
                type='submit'
                className='w-full bg-purple-600 hover:bg-purple-500 text-white font-mono py-6'
              >
                <Send className='mr-2 h-4 w-4' /> Send Message
              </Button>
            </form>
          </div>
          <div className='lg:pl-8'>
            <h2 className='text-3xl font-bold mb-6'>Contact Information</h2>
            <div className='space-y-8'>
              <div className='relative overflow-hidden rounded-xl border border-zinc-800 bg-black/40 p-6 transition-colors hover:bg-black/60'>
                <div className='flex items-start'>
                  <div className='mr-4 rounded-full bg-purple-600/20 p-3'>
                    <Mail className='h-6 w-6 text-purple-400' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white mb-2'>
                      Email Us
                    </h3>
                    <p className='text-zinc-400 mb-4 font-mono'>
                      For general inquiries, please email us at:
                    </p>
                    <a
                      href='mailto:nuemergingcoders@gmail.com'
                      className='text-purple-400 hover:text-purple-300 hover:underline font-mono'
                    >
                      nuemergingcoders@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-xl border border-zinc-800 bg-black/40 p-6 transition-colors hover:bg-black/60'>
                <div className='flex items-start'>
                  <div className='mr-4 rounded-full bg-purple-600/20 p-3'>
                    <MessageSquare className='h-6 w-6 text-purple-400' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white mb-2'>
                      Join Our Community
                    </h3>
                    <p className='text-zinc-400 mb-4 font-mono'>
                      Connect with other FGLI students in tech by joining our
                      GroupMe:
                    </p>
                    <a
                      href='https://groupme.com/join_group/89417887/c1x6DI3U'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-purple-400 hover:text-purple-300 hover:underline font-mono'
                    >
                      Join GroupMe
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 ml-2'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-purple-900/20 via-fuchsia-900/20 to-black p-6'>
                <h3 className='text-xl font-bold text-white mb-4'>Follow Us</h3>
                <p className='text-zinc-400 mb-6 font-mono'>
                  Stay updated with our latest events, resources, and
                  opportunities by following us on social media.
                </p>
                <div className='flex space-x-4'>
                  <a
                    href='https://www.instagram.com/nu.emergingcoders/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full bg-white/5 p-3 text-white hover:bg-white/10 transition-colors'
                    aria-label='Instagram'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                    </svg>
                  </a>
                  <a
                    href='https://www.linkedin.com/company/nuemerging-coders/posts/?feedView=all'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full bg-white/5 p-3 text-white hover:bg-white/10 transition-colors'
                    aria-label='LinkedIn'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
