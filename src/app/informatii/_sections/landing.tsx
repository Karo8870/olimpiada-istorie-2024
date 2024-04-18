import Link from 'next/link';

export default function () {
  return (
    <section className='flex h-screen flex-col gap-8 px-16 pb-16 pt-36 md:h-auto md:px-4'>
      <div className='relative flex w-full grow basis-0 flex-col items-center justify-center bg-cover'>
        <img
          className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/poianabrasov.png?alt=media&token=6c896d4f-5c5e-4e2c-a6dc-2b348632232e'
          alt='Poiana Brasov'
        />
        <div className='flex w-[80%] max-w-[60rem] flex-col items-center md:mb-48 md:mt-48'>
          <h1 className='relative z-10 text-[3rem] font-bold text-white md:text-3xl'>
            Informații utile
          </h1>
        </div>
      </div>
      <div className='flex w-full justify-between gap-3 md:flex-col'>
        <Link href='#cazare' className='flex grow basis-0 items-center justify-between rounded-[2rem] border-3 bg-secondary px-8 py-16 md:px-4 md:py-8'>
          <div className='flex flex-col items-center gap-3 md:items-start'>
            <i className='fa fa-bed-front text-3xl' />
            <label className='text-xl font-semibold'>Cazare</label>
          </div>
          <div
            className={`flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black sm:h-[2rem]`}
          >
            <i
              className={`fa fa-arrow-down flex aspect-square items-center justify-center p-1 text-xl text-white sm:text-base`}
            />
          </div>
        </Link>
        <Link href='#transport' className='flex grow basis-0 items-center justify-between rounded-[2rem] border-3 bg-secondary px-8 py-16 md:px-4 md:py-8'>
          <div className='flex flex-col items-center gap-3 md:items-start'>
            <i className='fa fa-bus  text-3xl' />
            <div className='flex flex-col'>
              <label className='hidden text-center text-xl font-semibold md:block'>
                Transport și adrese utile
              </label>
              <label className='block text-center text-xl font-semibold md:hidden'>
                Transport
              </label>
              <label className='block text-center text-xl font-semibold md:hidden'>
                și adrese utile
              </label>
            </div>
          </div>
          <div
            className={`flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black sm:h-[2rem]`}
          >
            <i
              className={`fa fa-arrow-down flex aspect-square items-center justify-center p-1 text-xl text-white sm:text-base`}
            />
          </div>
        </Link>
        <Link href='#telefon' className='flex grow basis-0 items-center justify-between rounded-[2rem] border-3 bg-secondary px-8 py-16 md:px-4 md:py-8'>
          <div className='flex flex-col items-center gap-3 md:items-start'>
            <i className='fa fa-phone text-3xl' />
            <label className='text-xl font-semibold'>Telefon Urgențe</label>
          </div>
          <div
            className={`flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black sm:h-[2rem]`}
          >
            <i
              className={`fa fa-arrow-down flex aspect-square items-center justify-center p-1 text-xl text-white sm:text-base`}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
