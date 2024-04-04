import '@/lib/fontawesome/css/fa.css';
import { cn } from '@/lib/utils';

function Program() {
  const date = new Date().toLocaleDateString('ro-RO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <main className='flex flex-col gap-8 pt-32'>
      <div className='px-16 sm:px-4'>
        <div className='relative flex w-full flex-col items-center bg-cover px-16'>
          <img
            className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
            src='/brasov3.jpeg'
            alt='brasov'
          />
          <div className='mb-48 mt-48 flex w-[80%] max-w-[60rem] flex-col items-center'>
            <h1 className='relative z-10 text-[3rem] font-bold text-white md:text-3xl'>
              Program
            </h1>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5 items-center gap-6 md:gap-4 px-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-4'>
        <div className={cn(
          'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
          date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
        )}>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <label className='text-xl font-semibold'>SAMBATA</label>
              <label className='text-base font-semibold'>27.04.2024</label>
            </div>
            <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
              <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
            </div>
          </div>
          <label className='text-base font-semibold'>Deschiderea festivă</label>
        </div>
        <div
          className={cn(
            'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
            date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
          )}
        >
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <label className='text-xl font-semibold'>DUMINICA</label>
              <label className='text-base font-semibold'>28.04.2024</label>
            </div>
            <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
              <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
            </div>
          </div>
          <label className='text-base font-semibold'>Concursul</label>
        </div>
        <div className={cn(
          'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
          date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
        )}>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <label className='text-xl font-semibold'>LUNI</label>
              <label className='text-base font-semibold'>29.04.2024</label>
            </div>
            <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
              <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
            </div>
          </div>
          <label className='text-base font-semibold'>Excursia</label>
        </div>
        <div className={cn(
          'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
          date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
        )}>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <label className='text-xl font-semibold'>MARTI</label>
              <label className='text-base font-semibold'>30.04.2024</label>
            </div>
            <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
              <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
            </div>
          </div>
          <label className='text-base font-semibold'>
            Vizitarea orasului Brasov
          </label>
        </div>
        <div className={cn(
          'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
          date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
        )}>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <label className='text-xl font-semibold'>MIERCURI</label>
              <label className='text-base font-semibold'>01.05.2024</label>
            </div>
            <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
              <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
            </div>
          </div>
          <label className='text-base font-semibold'>
            Incheierea olimpiadei
          </label>
        </div>
      </div>
      <div className='grid grid-cols-1 divide-y-4 border-y-4 border-black'>
        <div className='flex w-full flex-col gap-10 bg-[#FFF1C0] py-12 pl-10 sm:pl-5'>
          <h1 className='text-[3rem] font-bold md:text-3xl'>Sâmbătă</h1>
          <ul className='list-disc pl-10 sm:pl-4'>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
          </ul>
        </div>
        <div className='flex w-full flex-col gap-10 bg-[#FFDDBD] py-12 pl-10 sm:pl-5'>
          <h1 className='text-[3rem] font-bold md:text-3xl'>Duminică</h1>
          <ul className='list-disc pl-10 sm:pl-4'>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
          </ul>
        </div>
        <div className='flex w-full flex-col gap-10 bg-[#FFF1C0] py-12 pl-10 sm:pl-5'>
          <h1 className='text-[3rem] font-bold md:text-3xl'>Luni</h1>
          <ul className='list-disc pl-10 sm:pl-4'>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
          </ul>
        </div>
        <div className='flex w-full flex-col gap-10 bg-[#FFDDBD] py-12 pl-10 sm:pl-5'>
          <h1 className='text-[3rem] font-bold md:text-3xl'>Marți</h1>
          <ul className='list-disc pl-10 sm:pl-4'>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
          </ul>
        </div>
        <div className='flex w-full flex-col gap-10 bg-[#FFF1C0] py-12 pl-10 sm:pl-5'>
          <h1 className='text-[3rem] font-bold md:text-3xl'>Miercuri</h1>
          <ul className='list-disc pl-10 sm:pl-4'>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
            <li className='text-xl font-medium md:text-base'>
              16:00 - Deschiderea festivă - Aula
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Program;
