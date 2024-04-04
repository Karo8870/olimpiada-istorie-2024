'use client';

import useNav from '@/components/useNav';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AppNavbar() {
  const navMode = useNav();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <motion.nav
        layout
        className={`fixed left-0 top-0 z-10 flex w-full gap-[1vh] bg-white sm:hidden ${navMode ? 'flex-col pt-[2vh]' : 'flex-row justify-center p-[1vh]'}`}
      >
        <motion.div
          layout
          className={`flex grow basis-0 items-center ${navMode ? 'flex-col gap-1' : 'flex-row gap-6'}`}
        >
          <motion.div layout className={`flex justify-center`}>
            <motion.img
              layout='preserve-aspect'
              initial={{
                scale: navMode ? 1 : 0,
                opacity: navMode ? 1 : 0
              }}
              animate={{
                scale: navMode ? 0 : 1,
                opacity: navMode ? 0 : 1
              }}
              transition={{
                scale: {
                  delay: 0.1,
                  duration: 0
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.2
                },
                bounce: 0,
                bounceDamping: 0,
                bounceStiffness: 0
              }}
              className={`h-12 flex-grow basis-0 justify-end ${navMode ? 'hidden' : 'flex'}`}
              src='logo.png'
              alt='icon'
            />
            <motion.div
              layout
              initial={{
                scale: navMode ? 0 : 1,
                opacity: navMode ? 0 : 1
              }}
              animate={{
                scale: navMode ? 1 : 0,
                opacity: navMode ? 1 : 0
              }}
              transition={{
                scale: {
                  delay: 0.2,
                  duration: 0
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.2
                },
                bounce: 0,
                bounceDamping: 0,
                bounceStiffness: 0
              }}
              className={`flex-grow basis-0 justify-start ${navMode ? 'flex' : 'hidden'}`}
            >
              <motion.img className='h-[8vh]' src='logo.png' alt='icon' />
              <motion.img className='h-[8vh]' src='logo.png' alt='icon' />
              <motion.img className='h-[8vh]' src='logo.png' alt='icon' />
              <motion.img className='h-[8vh]' src='logo.png' alt='icon' />
              <motion.img className='h-[8vh]' src='logo.png' alt='icon' />
              <motion.img className='h-[8vh]' src='logo.png' alt='icon' />
            </motion.div>
          </motion.div>
          <motion.a
            href='/'
            layout
            initial={{
              scale: navMode ? 1 : 0,
              opacity: navMode ? 1 : 0
            }}
            animate={{
              scale: navMode ? 0 : 1,
              opacity: navMode ? 0 : 1
            }}
            transition={{
              scale: {
                delay: 0.1,
                duration: 0
              },
              opacity: {
                duration: 0.3,
                delay: 0.2
              },
              bounce: 0,
              bounceDamping: 0,
              bounceStiffness: 0
            }}
            className={`flex flex-col items-center`}
          >
            <motion.label
              layout
              className={`font-bold ${navMode ? 'text-[0px] text-white' : 'text-[1rem] text-black'}`}
            >
              OLIMPIADA DE ISTORIE - ETAPA NATIONALA
            </motion.label>
            <motion.label
              layout
              className={`font-bold ${navMode ? 'text-[0px] text-white' : 'text-[1rem] text-black'}`}
            >
              EDITIA XLVII, 2024
            </motion.label>
          </motion.a>
        </motion.div>
        <motion.div layout className={`flex items-center justify-center gap-8`}>
          <motion.a
            href='/concurs'
            layout='position'
            className='text-base font-bold'
          >
            Concurs
          </motion.a>
          <motion.a
            href='/program'
            layout='position'
            className='text-base font-bold'
          >
            Program
          </motion.a>
          <motion.a
            href='/informatii'
            layout='position'
            className='text-base font-bold'
          >
            Informații
          </motion.a>
          <motion.a
            href='/jurnal'
            layout='position'
            className='text-base font-bold'
          >
            Jurnal
          </motion.a>
          <motion.a
            href='/contact'
            layout='position'
            className='text-base font-bold'
          >
            Contact
          </motion.a>
        </motion.div>
        <motion.div
          layout
          className={`grow basis-0 ${navMode ? 'hidden' : ''}`}
        ></motion.div>
      </motion.nav>
      <div className='fixed left-0 top-0 z-10 hidden w-full flex-col bg-white p-2 sm:flex'>
        <div className={`flex pb-2`}>
          <img className='h-12 w-12' src='logo.png' alt='icon' />
          <img className='h-12 w-12' src='logo.png' alt='icon' />
          <img className='h-12 w-12' src='logo.png' alt='icon' />
          <img className='h-12 w-12' src='logo.png' alt='icon' />
        </div>
        <div className='flex items-center justify-between pr-4'>
          <img className='h-12 w-12' src='logo.png' alt='icon' />
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
