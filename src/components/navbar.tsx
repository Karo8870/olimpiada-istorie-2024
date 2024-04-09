'use client';

import useNav from '@/components/useNav';
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
        className={`fixed left-0 top-0 z-50 flex w-full gap-[1vh] bg-white md:hidden ${navMode ? 'flex-col pt-[2vh]' : 'flex-row justify-center p-[1vh]'}`}
      >
        <div
          className={`flex grow basis-0 items-center ${navMode ? 'flex-col gap-1' : 'flex-row gap-6'}`}
        >
          <div>
            <Link href='/'>
              <img
                className={`h-12 w-12 min-w-12 max-w-12 flex-grow basis-0 justify-end ${navMode ? 'hidden' : 'flex'}`}
                src='/logo.png'
                alt='icon'
              />
            </Link>
            <div
              className={`flex-grow basis-0 justify-start gap-10 ${navMode ? 'flex' : 'hidden'}`}
            >
              <img className='h-[8vh]' src='/logos/isj.png' alt='icon' />
              <img className='h-[8vh]' src='/logos/me.png' alt='icon' />
              <img className='h-[8vh]' src='/logos/primaria.png' alt='icon' />
              <img className='h-[8vh]' src='/logos/consiliu.png' alt='icon' />
              <img className='h-[8vh]' src='/logos/saguna.jpg' alt='icon' />
            </div>
          </div>
          <Link href='/' className={`flex flex-col items-center cursor-pointer`}>
            <label
              className={`cursor-pointer text-center font-bold ${navMode ? 'text-[0px] text-white' : 'text-[1rem] text-black'}`}
            >
              OLIMPIADA DE ISTORIE - ETAPA NAȚIONALĂ
            </label>
            <label
              className={`cursor-pointer text-center font-bold ${navMode ? 'text-[0px] text-white' : 'text-[1rem] text-black'}`}
            >
              EDIȚIA XLVII, 2024
            </label>
          </Link>
        </div>
        <div className={`flex items-center justify-center gap-8`}>
          <a href='/concurs' className='text-base font-bold'>
            Concurs
          </a>
          <a href='/program' className='text-base font-bold'>
            Program
          </a>
          <a href='/informatii' className='text-base font-bold'>
            Informații utile
          </a>
          <a href='/jurnal' className='text-base font-bold'>
            Jurnalul olimpiadei
          </a>
          <a href='/' className='text-base font-bold'>
            Parteneri și sponsori
          </a>
        </div>
        <div className={`grow basis-0 ${navMode ? 'hidden' : ''}`}></div>
      </nav>
      <div className='fixed left-0 top-0 z-10 hidden w-full flex-col bg-white p-2 md:flex'>
        <div className={`flex justify-center pb-2`}>
          <img
            className='h-12 w-12 object-contain'
            src='/logos/isj.png'
            alt='icon'
          />
          <img
            className='h-12 w-12 object-contain'
            src='/logos/me.png'
            alt='icon'
          />
          <img
            className='h-12 w-12 object-contain'
            src='/logos/primaria.png'
            alt='icon'
          />
          <img
            className='h-12 w-12 object-contain'
            src='/logos/consiliu.png'
            alt='icon'
          />
          <img
            className='h-12 w-12 object-contain'
            src='/logos/saguna.jpg'
            alt='icon'
          />
        </div>
        <div className='flex items-center justify-between pr-4'>
          <img className='h-12 w-12' src='logo.png' alt='icon' />
          {/*<div className='flex flex-col'>*/}
          {/*  <label className={`'text-[1rem] text-center font-bold text-black`}>*/}
          {/*    OLIMPIADA DE ISTORIE - ETAPA NATIONALA*/}
          {/*  </label>*/}
          {/*  <label className={`text-center text-[1rem] font-bold text-black`}>*/}
          {/*    EDITIA XLVII, 2024*/}
          {/*  </label>*/}
          {/*</div>*/}
          <i
            onClick={() => {
              setOpen(!open);
            }}
            className='fa-solid fa-bars text-2xl'
          />
        </div>
        <div className={`flex-col gap-3 py-4 ${open ? 'flex' : 'hidden'}`}>
          <a href='/concurs' className='text-3xl font-bold'>
            Concurs
          </a>
          <a href='/program' className='text-3xl font-bold'>
            Program
          </a>
          <a href='/informatii' className='text-3xl font-bold'>
            Informații
          </a>
          <a href='/jurnal' className='text-3xl font-bold'>
            Jurnal
          </a>
          <a href='/contact' className='text-3xl font-bold'>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
