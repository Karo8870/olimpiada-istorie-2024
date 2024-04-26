'use client';

import '@/lib/fontawesome/css/fa.css';
import LargeButton from '@/components/large-button';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Landing() {
  return (
    <section className='flex min-h-screen w-full flex-col justify-center gap-8 px-8 pb-4 pt-40'>
      <div className='flex grow basis-0 gap-2 sm:flex-col'>
        <div className='flex grow basis-0 flex-col justify-center'>
          <div className='flex max-h-[500px] grow flex-col justify-around gap-4'>
            <div className='mb-8 flex flex-col items-center pr-10 sm:mb-0 sm:pr-0'>
              <img
                className='w-56 sm:w-28'
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/logo.png?alt=media&token=271a8c77-bdbd-4e15-a932-51bc7c1630f7'
                alt='Logo'
                title='By Adela Florea'
              />
              <div className='flex flex-col'>
                <h1 className='pt-4 text-center text-[2.6rem] font-semibold sm:text-2xl'>
                  OLIMPIADA DE ISTORIE
                </h1>
                <h1 className='text-center text-[2.6rem] font-semibold sm:text-2xl'>
                  ETAPA NAȚIONALĂ
                </h1>
                <h2 className='text-center text-[1.7rem] font-semibold sm:text-base'>
                  EDIȚIA XLVII, 2024
                </h2>
              </div>
              <Button
                as={Link}
                href='/concurs'
                color='default'
                size='lg'
                className='mt-6 text-white sm:hidden'
              >
                Vezi mai multe despre concurs
                <i className='fa fa-arrow-right ml-2'></i>
              </Button>
            </div>
            {/*<p className='text-[1.25rem] font-medium sm:text-base'>*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque*/}
            {/*  id massa sagittis, ultricies tellus vitae, sodales nunc. Morbi*/}
            {/*  semper scelerisque condimentum. Phasellus luctus lacus nec dolor*/}
            {/*  fermentum rhoncus. Sed at dolor justo.*/}
            {/*</p>*/}
          </div>
        </div>
        <div className='relative grow basis-0'>
          <SVG />
        </div>
      </div>
      <div className='flex w-full items-stretch gap-4 sm:flex-col'>
        <LargeButton
          text='Mesaje de bun venit'
          className='bg-primary uppercase'
          iconBg='bg-black'
          iconColor='text-white'
        />
        <LargeButton
          text='Brașov'
          className='bg-secondary uppercase'
          iconBg='bg-black'
          iconColor='text-white'
        />
        <LargeButton
          link='#saguna'
          text='Colegiul Național „Andrei Șaguna”'
          className='bg-secondary uppercase text-black sm:hidden'
          iconBg='bg-black'
          iconColor='text-white'
        />
        <LargeButton
          link='#saguna'
          text='Colegiul „Andrei Șaguna”'
          className='hidden bg-secondary uppercase text-black sm:flex'
          iconBg='bg-black'
          iconColor='text-white'
        />
      </div>
    </section>
  );
}

const SVG = () => (
  <svg
    className='absolute z-0 flex h-full w-full'
    xmlns='http://www.w3.org/2000/svg'
    width='674'
    viewBox='0 0 674 579'
    fill='none'
  >
    <rect
      x='230.5'
      y='2.5'
      width='422'
      height='279'
      rx='17.5'
      fill='url(#pattern0)'
      stroke='black'
      strokeWidth='5'
    ></rect>
    <rect
      x='2.5'
      y='234.5'
      width='480'
      height='342'
      rx='17.5'
      fill='url(#pattern1)'
      stroke='black'
      strokeWidth='5'
    ></rect>
    <defs>
      <pattern
        id='pattern0'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <use
          xlinkHref='#image0_56_2'
          transform='matrix(0.000501588 0 0 0.000754148 -0.00158777 0)'
        ></use>
      </pattern>
      <pattern
        id='pattern1'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <use
          xlinkHref='#image1_56_2'
          transform='matrix(0.0011127 0 0 0.00155521 -0.000713473 0)'
        ></use>
      </pattern>
      <clipPath id='clip0_56_2'>
        <rect
          width='146'
          height='152'
          fill='white'
          transform='translate(608.083 333) rotate(63.5445)'
        ></rect>
      </clipPath>
      <clipPath id='clip1_56_2'>
        <rect
          width='98'
          height='132'
          fill='white'
          transform='translate(110.844 213.27) rotate(-119.619)'
        ></rect>
      </clipPath>
      <image
        id='image1_56_2'
        width='900'
        height='650'
        xlinkHref='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/brasov1.jpeg?alt=media&token=87c953c4-f159-4749-9a64-c8227304e20b'
      ></image>
      <image
        id='image0_56_2'
        width='2000'
        height='1326'
        xlinkHref='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/brasov2.jpeg?alt=media&token=18d814a2-5f32-4302-b3b3-2d2731ff9828'
      ></image>
    </defs>
  </svg>
);
