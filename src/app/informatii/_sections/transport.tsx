import Link from 'next/link';
import { ReactNode } from 'react';
import { SectionHeading } from '@/components/SectionHeading';

export default function () {
  return (
    <section id='transport'>
      <SectionHeading>Transport și adrese utile</SectionHeading>
      <div className='flex w-full flex-col gap-8 px-12 py-8'>
        <Title>
          Poiana Brașov <i className='fa fa-arrow-right-long text-3xl' /> Aula
          Sergiu Chiriacescu
        </Title>
        <div className='flex w-full items-stretch justify-between gap-4'>
          <PathCard
            start='Poiana Brașov'
            end='Livada Poștei'
            details='Linia 20'
          />
          <i className='fa fa-arrow-right self-center text-3xl' />
          <PathCard
            start='Livada Poștei'
            end='Stația Patria'
            details='Liniile 1, 6, 17, 31, 34, 34B'
          />
          <i className='fa fa-arrow-right self-center text-3xl' />
          <PathCard
            start='Stația Patria'
            end='Aula Sergiu Chiriacescu'
            details='Mers pe jos'
            message='500m'
          />
        </div>
        <Title>
          Aula Sergiu Chiriacescu{' '}
          <i className='fa fa-arrow-right-long text-3xl' /> Poiana Brașov
        </Title>
        <div className='flex w-full items-stretch justify-between gap-4'>
          <PathCard
            start='Aula Sergiu Chiriacescu'
            end='Stația Sanitas'
            details='Mers pe jos'
            message='200m'
          />
          <i className='fa fa-arrow-right self-center text-3xl' />
          <PathCard
            start='Stația Sanitas'
            end='Livada Poștei'
            details='Liniile 1, 4, 6, 17, 34, 34B'
            message='2 stații'
          />
          <i className='fa fa-arrow-right self-center text-3xl' />
          <PathCard
            start='Livada Poștei'
            end='Poiana Brașov'
            details='Linia 20'
            message='2 stații'
          />
        </div>
      </div>
      <div className='flex gap-20 px-12 py-10 md:flex-col sm:gap-5 sm:px-6'>
        <div className='flex grow basis-0 flex-col gap-7 sm:gap-3'>
          <Title>Transport în comun - RATBV</Title>
          <div className='flex gap-6 sm:flex-col sm:gap-3'>
            <RATBVCard
              href='https://ratbv.ro/trasee-si-orare/'
              title='Trasee și orare'
            />
            <RATBVCard
              href='https://ratbv.ro/trasee-si-orare/'
              title='Linia 20'
              details='Poiana Brașov - Livada Postei'
            />
          </div>
          <Title>Adrese utile</Title>
          <AddressCard
            href='https://maps.app.goo.gl/wWjCGH9NcKD1n2tC7'
            address='Colegiul Național "Andrei Șaguna"'
            location='Șirul Mitropolit Andrei Șaguna 1, Brașov 500123'
          />
          <AddressCard
            href='https://maps.app.goo.gl/guztefT4PTQw3rNv7'
            address='Aula Sergiu Chiriacescu'
            location='Strada Iuliu Maniu 41A, Brașov 500091'
          />
          <AddressCard
            href='https://maps.app.goo.gl/CmnBJuWeUF1jBiw6A'
            address='Inspectoratul Școlar Județean'
            location='Șirul Gheorghe Dima 4, Brașov 500123'
          />
        </div>
        <div className='grow basis-0'>
          <iframe
            src='https://www.google.com/maps/d/u/0/embed?mid=1NBOUvmdksH37IpzvDp5SIdHZUhmBxsU&ehbc=2E312F&noprof=1'
            width='640'
            height='480'
            className='h-full w-full rounded-[2rem] border-3 md:aspect-square md:h-auto'
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <h1 className='text-[3rem] font-bold sm:text-3xl'>{children}</h1>;
}

function PathCard({
  start,
  end,
  details,
  message
}: {
  start: string;
  end: string;
  details: string;
  message?: string;
}) {
  return (
    <div className='flex grow basis-0 flex-col items-start justify-center rounded-[1.5rem] border-3 bg-primary px-5 py-4'>
      <h2 className='text-[1.5rem] font-semibold sm:text-xl'>
        {start} <i className='fa fa-arrow-right-long text-[1.2rem]' /> {end}
      </h2>
      <label className='text-[1.25rem] font-semibold sm:text-base'>
        {details}
      </label>
      {message ? (
        <span className='text-base font-semibold sm:text-sm'>{message}</span>
      ) : (
        ''
      )}
    </div>
  );
}

function AddressCard({
  href,
  location,
  address
}: {
  href: string;
  location: string;
  address: string;
}) {
  return (
    <Link
      target='_blank'
      href={href}
      className='flex flex-col rounded-[1.5rem] border-3 bg-primary'
    >
      <div className='flex items-center justify-between px-4 py-4'>
        <div className='flex flex-col'>
          <label className='text-[1.5rem] font-semibold sm:text-xl'>
            {location}
          </label>
          <label className='text-base font-semibold sm:text-sm'>
            {address}
          </label>
        </div>
        <i className='fa fa-arrow-right text-xl' />
      </div>
    </Link>
  );
}

function RATBVCard({
  title,
  details,
  href
}: {
  title: string;
  details?: string;
  href: string;
}) {
  return (
    <Link
      target='_blank'
      href={href}
      className='flex grow basis-0 items-center justify-between rounded-[1.5rem] border-3 bg-primary px-5 py-4'
    >
      <div className='flex flex-col'>
        <label className='text-[1.5rem] font-semibold sm:text-xl'>RATBV</label>
        <label className='text-[1.25rem] font-semibold sm:text-base'>
          {title}
        </label>
        {details ? (
          <label className='text-base font-semibold sm:text-sm'>
            {details}
          </label>
        ) : (
          ''
        )}
      </div>
      <i className='fa fa-arrow-right text-xl' />
    </Link>
  );
}
