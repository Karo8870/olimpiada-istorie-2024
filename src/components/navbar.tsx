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
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/logo.png?alt=media&token=271a8c77-bdbd-4e15-a932-51bc7c1630f7'
                alt='icon'
              />
            </Link>
            <div
              className={`flex-grow basis-0 justify-start gap-10 ${navMode ? 'flex' : 'hidden'}`}
            >
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/isj.png?alt=media&token=5a5dcf04-0ca8-42f1-82de-b1d73f46a6df'
                alt='icon'
              />
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/me.png?alt=media&token=bea040ff-51bc-47fb-a49b-b03618004401'
                alt='icon'
              />
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/primaria.png?alt=media&token=ef390537-7133-40ec-89ff-a9dbac4587d8'
                alt='icon'
              />
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/consiliu.png?alt=media&token=1c184d05-5188-481f-b58b-566417b2cbf1'
                alt='icon'
              />
              <img
                className='h-[8vh]'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/saguna.jpg?alt=media&token=6089a5a5-89ff-4dee-b2f8-fe8a8d336eae'
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
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/isj.png?alt=media&token=5a5dcf04-0ca8-42f1-82de-b1d73f46a6df'
            alt='icon'
          />
          <img
            className='h-16 w-28 object-contain'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/me.png?alt=media&token=bea040ff-51bc-47fb-a49b-b03618004401'
            alt='icon'
          />
          <img
            className='h-16 w-16 object-contain'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/primaria.png?alt=media&token=ef390537-7133-40ec-89ff-a9dbac4587d8'
            alt='icon'
          />
          <img
            className='h-16 w-16 object-contain'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/consiliu.png?alt=media&token=1c184d05-5188-481f-b58b-566417b2cbf1'
            alt='icon'
          />
          <img
            className='h-16 w-16 object-contain'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/saguna.jpg?alt=media&token=6089a5a5-89ff-4dee-b2f8-fe8a8d336eae'
            alt='icon'
          />
        </div>
        <div className='flex items-center justify-between pr-4'>
          <Link href='/'>
            <img
              className='h-12 w-12'
              src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/logo.png?alt=media&token=271a8c77-bdbd-4e15-a932-51bc7c1630f7'
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
