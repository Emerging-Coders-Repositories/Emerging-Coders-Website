'use client';

import React from 'react';

import { executiveMembers2526 } from '@/constants/executive-boards-list';
import { juniorExecutiveMembers2526 } from '@/constants/junior-executive-boards-list';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import ExecutiveBoardCards from './exec-board-group';

export default function MeetTheExec() {
  return (
    <div className='w-full text-white py-24 px-4 mb-48' id='team'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl font-bold mb-4'>
            Meet the Emerging Coders Team
          </h2>
          <p className='text-base text-gray-400 max-w-2xl mx-auto font-mono'>
            Our team of Northwestern students dedicated to supporting FGLI
            students in tech
          </p>
        </div>
        {executiveMembers2526.length > 0 && (
          <div className='mb-14'>
            <h3 className='text-2xl font-bold text-center mb-8'>
              Executive Board
            </h3>
            <ExecutiveBoardCards boardType='executive' />
          </div>
        )}
        {juniorExecutiveMembers2526.length > 0 && (
          <div className='mb-14'>
            <h3 className='text-2xl font-bold text-center mb-8'>
              Junior Executive Board
            </h3>
            <ExecutiveBoardCards boardType='junior' />
          </div>
        )}
        <div className='mt-10 text-center'>
          <Link
            href='/executive-boards'
            className='inline-flex items-center text-xs text-white/70 font-bold py-2 px-4 rounded-md hover:bg-neutral-800 transition-colors gap-1'
          >
            View Past Executives Boards
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
