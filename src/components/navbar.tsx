'use client';

import useNav from '@/hooks/useNav';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AppNavbar() {
  const x = useNav();
  const navMode = usePathname() === '/' ? x : false;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[10000] flex w-full gap-[1vh] bg-white md:hidden ${navMode ? 'flex-col pt-[2vh]' : 'flex-row justify-center p-[1vh]'}`}
      >
        <div
          className={`flex grow basis-0 items-center ${navMode ? 'flex-col gap-1' : 'flex-row gap-6'}`}
        >
          <div>
            <Link href='/'>
              <img
                className={`h-12 w-12 min-w-12 max-w-12 flex-grow basis-0 justify-end ${navMode ? 'hidden' : 'flex'}`}
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/logo.jpeg?alt=media&token=7c7eb08e-c696-4a74-aefd-0bd5e0ce130c'
                alt='icon'
              />
            </Link>
            <div
              className={`flex-grow basis-0 justify-start gap-10 ${navMode ? 'flex' : 'hidden'}`}
            >
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/isj.jpeg?alt=media&token=fa125182-483a-4990-9a08-f6b1ea692505'
                alt='icon'
              />
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/me.jpeg?alt=media&token=28dfe7d3-13b3-43bf-8701-a628ec3ab64d'
                alt='icon'
              />
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/primaria.jpeg?alt=media&token=1b0af81a-bd45-4bec-82d0-d4b0e02d9988'
                alt='icon'
              />
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/consiliu.jpeg?alt=media&token=70ceb232-5d8d-46dd-8eba-b23412b999f9'
                alt='icon'
              />
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/saguna.jpeg?alt=media&token=26bb682d-768d-40ca-bc77-82454487ab08'
                alt='icon'
              />
            </div>
          </div>
          <Link
            href='/'
            className={`flex cursor-pointer flex-col items-center`}
          >
            <label
              className={`cursor-pointer text-center font-bold nav:text-[.75rem] ${navMode ? 'text-[0px] text-white' : 'text-[1rem] text-black'}`}
            >
              OLIMPIADA DE ISTORIE - ETAPA NAȚIONALĂ
            </label>
            <label
              className={`cursor-pointer text-center font-bold nav:text-[.75rem] ${navMode ? 'text-[0px] text-white' : 'text-[1rem] text-black'}`}
            >
              EDIȚIA XLVII, 2024
            </label>
          </Link>
        </div>
        <div className={`flex items-center justify-center gap-8`}>
          <a href='/noutati' className='text-base font-bold uppercase'>
            Noutăți
          </a>
          <a href='/concurs' className='text-base font-bold uppercase'>
            Concurs
          </a>
          <a href='/program' className='text-base font-bold uppercase'>
            Program
          </a>
          <a href='/informatii' className='text-base font-bold uppercase'>
            Informații utile
          </a>
          <a href='/jurnal' className='text-base font-bold uppercase'>
            Jurnalul Olimpiadei
          </a>
          <a href='/sponsori' className='text-base font-bold uppercase'>
            Parteneri și sponsori
          </a>
        </div>
        <div className={`grow basis-0 ${navMode ? 'hidden' : ''}`}></div>
      </nav>
      <div className='fixed left-0 top-0 z-[10000] hidden w-full flex-col bg-white p-2 md:flex'>
        <div className={`flex justify-center pb-2`}>
          <img
            className='h-16 w-16 object-contain'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/isj.jpeg?alt=media&token=fa125182-483a-4990-9a08-f6b1ea692505'
            alt='icon'
          />
          <img
            className='h-16 w-28 object-contain'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/me.jpeg?alt=media&token=28dfe7d3-13b3-43bf-8701-a628ec3ab64d'
            alt='icon'
          />
          <img
            className='h-16 w-16 object-contain'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/primaria.jpeg?alt=media&token=1b0af81a-bd45-4bec-82d0-d4b0e02d9988'
            alt='icon'
          />
          <img
            className='h-16 w-16 object-contain'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/consiliu.jpeg?alt=media&token=70ceb232-5d8d-46dd-8eba-b23412b999f9'
            alt='icon'
          />
          <img
            className='h-16 w-16 object-contain'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/saguna.jpeg?alt=media&token=26bb682d-768d-40ca-bc77-82454487ab08'
            alt='icon'
          />
        </div>
        <div className='flex items-center justify-between pr-4'>
          <Link href='/'>
            <img
              className='h-12 w-12'
              src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/logo.jpeg?alt=media&token=7c7eb08e-c696-4a74-aefd-0bd5e0ce130c'
              alt='icon'
            />
          </Link>
          <i
            onClick={() => {
              setOpen(!open);
            }}
            className='fa-solid fa-bars text-2xl'
          />
        </div>
        <div className={`flex-col gap-5 py-4 ${open ? 'flex' : 'hidden'}`}>
          <a href='/noutati' className='pl-4 text-2xl font-bold uppercase'>
            Noutăți
          </a>
          <a href='/concurs' className='pl-4 text-2xl font-bold uppercase'>
            Concurs
          </a>
          <a href='/program' className='pl-4 text-2xl font-bold uppercase'>
            Program
          </a>
          <a href='/informatii' className='pl-4 text-2xl font-bold uppercase'>
            Informații utile
          </a>
          <a href='/jurnal' className='pl-4 text-2xl font-bold uppercase'>
            Jurnalul olimpiadei
          </a>
          <a href='/sponsori' className='pl-4 text-2xl font-bold uppercase'>
            Parteneri si sponsori
          </a>
        </div>
      </div>
    </>
  );
}
