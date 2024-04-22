import { ReactNode } from 'react';

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className='w-full bg-black py-8 sm:py-6'>
      <h1 className='text-center text-[3rem] font-bold text-white sm:text-2xl'>
        {children}
      </h1>
    </div>
  );
}
