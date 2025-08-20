'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, FileText, Mail, Send } from 'lucide-react';

export default function BlogContributePage() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:nuemergingcoders@gmail.com?subject=Blog Post Contribution&body=Hi Emerging Coders team,%0D%0A%0D%0AI'd like to contribute a blog post.%0D%0A%0D%0ABlog post idea:%0D%0A[Your idea here]%0D%0A%0D%0ADraft link:%0D%0A[Google Doc link here]%0D%0A%0D%0AThank you!";
  };

  return (
    <div className='min-h-screen text-white mt-24'>
      <div className='max-w-4xl mx-auto px-6 pt-28 pb-16'>
        <header className='mb-16'>
          <h1 className='text-7xl font-bold mb-4'>Contribute</h1>
          <p className='text-lg text-zinc-500 font-mono'>
            Share your knowledge and experiences with the Emerging Coders
            community
          </p>
        </header>

        <div className='grid gap-8'>
          <Card className='border-zinc-800 bg-neutral-950'>
            <CardHeader>
              <CardTitle className='text-2xl text-white'>
                How to Contribute
              </CardTitle>
              <CardDescription className='text-zinc-400 font-mono'>
                We welcome contributions from students and professionals in tech
              </CardDescription>
            </CardHeader>
            <CardContent className='text-zinc-300'>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='mt-1'>
                    <FileText className='h-6 w-6 text-purple-400' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>Prepare Your Content</h3>
                    <p className='text-zinc-400 font-mono'>
                      Write your blog post draft in a Google Doc. Include any
                      images, code snippets, or other resources you&apos;d like
                      to use.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='mt-1'>
                    <Mail className='h-6 w-6 text-purple-400' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>Send Us Your Idea</h3>
                    <p className='text-zinc-400 font-mono'>
                      Email us with your blog post idea and a link to your
                      draft. We&apos;ll review it and get back to you with
                      feedback.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='mt-1'>
                    <Send className='h-6 w-6 text-purple-400' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>Review Process</h3>
                    <p className='text-zinc-400 font-mono'>
                      We&apos;ll work with you to refine your post and prepare
                      it for publication on our blog.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='border-zinc-800 bg-neutral-950'>
            <CardHeader>
              <CardTitle className='text-2xl text-white'>
                Ready to Contribute?
              </CardTitle>
              <CardDescription className='text-zinc-400'>
                Send us your blog post idea and draft
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleEmailClick}
                className='w-60 mx-auto bg-purple-600 hover:bg-purple-700 text-white group'
              >
                Contact Us
                <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
