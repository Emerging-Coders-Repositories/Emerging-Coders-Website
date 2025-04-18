import type { ExecMember } from '@/types/exec-board-type';
import Link from 'next/link';
import Image from 'next/image';

export default function ExecutiveBoardMemberCard({
  member,
}: {
  member: ExecMember;
}) {
  return (
    <div className='flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1 text-base'>
      <div className='w-24 h-24 mb-3 overflow-hidden rounded-full'>
        <img
          src={member.image}
          alt={`${member.name}'s photo`}
          className='w-full h-full object-cover'
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;
            imgElement.src = 'https://via.placeholder.com/150';
          }}
        />
      </div>
      <h3 className='text-lg font-bold text-white'>{member.name}</h3>
      <p className='text-sm text-gray-300 mb-1'>{member.role}</p>
      <p className='text-xs text-gray-400'>{member.major}</p>

      {member.additionalInfo && (
        <p className='text-xs text-gray-500 mt-1'>{member.additionalInfo}</p>
      )}

      <div className='flex flex-col mt-1'>
        <p className='text-xs text-gray-500'>{member.year}</p>
        <p className='text-xs text-gray-500'>{member.pronouns}</p>
      </div>
      <div className='flex mt-2 space-x-3'>
        {member.linkedin && (
          <Link
            href={member.linkedin}
            target='_blank'
            className='text-gray-500 hover:text-white transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
            </svg>
          </Link>
        )}

        {member.email && (
          <Link
            href={member.email}
            className='text-gray-500 hover:text-white transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z' />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
