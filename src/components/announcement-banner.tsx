export default function AnnouncementBanner() {
  return (
    <div className='fixed top-0 left-0 right-0 bg-gradient-to-br from-red-900 via-red-700 via-70% to-yellow-400 z-50 flex w-full items-center justify-center text-center font-bold text-white shadow-sm md:h-8'>
      <p className='px-8 py-2 text-sm md:py-0'>
        💃 Don&apos;t miss out Refresh Dance Crew Annual Spring Show! Showcases
        are Fri 9 PM, Sat 7 PM, or Sat 10 PM.{' '}
        <a
          href='https://nbo.universitytickets.com/?cid=211&fbclid=PAZXh0bgNhZW0CMTEAAafCKAAgfKYTAkYpskZp_OTH-4092G2QTkX9sBFaJS5XscdAqlmfQssK0kmqlg_aem_7QxYcbC16YlYcNUKyl8tIg'
          target='_blank'
          rel='noreferrer'
          className='text-yellow-100 underline underline-offset-2 hover:text-yellow-300 hover:no-underline'
        >
          Get tickets.
        </a>{' '}
        🕺
      </p>
    </div>
  );
}
