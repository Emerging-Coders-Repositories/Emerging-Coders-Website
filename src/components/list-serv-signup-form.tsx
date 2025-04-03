import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export default function ListservSignup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const handleConfirm = () => {
    const mailtoLink = `mailto:listserv@listserv.it.northwestern.edu?subject=&body=SUBSCRIBE disc ${firstName} ${lastName}`;
    window.location.href = mailtoLink;
    setShowDialog(false);
    setFirstName('');
    setLastName('');
  };

  return (
    <div className='w-full max-w-md space-y-4'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <Input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className='col-span-1 bg-white/5 border-white/10 text-white focus-visible:ring-purple-500/30'
          />
          <Input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className='col-span-1 bg-white/5 border-white/10 text-white focus-visible:ring-purple-500/30'
          />
        </div>
        <Button
          type='submit'
          className='w-full bg-purple-600 hover:bg-purple-500 text-white font-mono'
        >
          Join Mailing List
        </Button>
      </form>
      <p className='text-xs text-gray-500'>
        This will open your email client with a pre-filled subscription message.
      </p>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className='bg-zinc-900 border border-white/10 text-white'>
          <DialogHeader>
            <DialogTitle className='text-white'>
              Important Instructions
            </DialogTitle>
            <DialogDescription className='pt-4 space-y-2 text-gray-400'>
              <p>
                Your email client will open with a pre-filled message to
                subscribe to the mailing list. Please:
              </p>
              <ul className='list-disc pl-4 space-y-1'>
                <li>Do not modify the pre-filled message</li>
                <li>Simply send the email as is</li>
                <li>
                  The subscription command has been formatted exactly as
                  required
                </li>
              </ul>
              <p className='pt-2'>
                After sending, you should receive a confirmation email within a
                few minutes.
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='gap-2'>
            <DialogClose asChild>
              <Button
                variant='outline'
                className='border-white/10 text-white hover:bg-white/10'
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              onClick={handleConfirm}
              className='bg-purple-600 hover:bg-purple-500 text-white'
            >
              Open Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
