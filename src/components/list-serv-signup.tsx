"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export default function ListservSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const handleConfirm = () => {
    const mailtoLink = `mailto:listserv@listserv.it.northwestern.edu?subject=&body=SUBSCRIBE emergingcoders ${firstName} ${lastName}`;
    window.location.href = mailtoLink;
    setShowDialog(false);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="col-span-1"
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="col-span-1"
          />
        </div>
        <Button
          type='submit'
          className='w-full bg-purple-600 hover:bg-purple-500 text-white font-mono'
        >
          Join Mailing List
        </Button>
      </form>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        This will open your email client with a pre-filled subscription message.
      </p>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Important Instructions</DialogTitle>
            <DialogDescription className="pt-4 space-y-2">
              <p>
                Your email client will open with a pre-filled message to
                subscribe to the Emerging Coders mailing list. Please:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Do not modify the pre-filled message</li>
                <li>Simply send the email as is</li>
                <li>
                  The subscription command has been formatted exactly as
                  required
                </li>
              </ul>
              <p className="pt-2">
                After sending, you should receive a confirmation email within a
                few minutes.
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={handleConfirm}
              className="bg-[#40B4B4] hover:bg-[#359595]"
            >
              Open Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
