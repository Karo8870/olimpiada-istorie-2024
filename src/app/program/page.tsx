import '@/lib/fontawesome/css/fa.css';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Program() {
  const date = new Date().toLocaleDateString('ro-RO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <main className='flex flex-col'>
      <div className='flex h-screen flex-col gap-8 pb-16 pt-32'>
        <div className='grow basis-0 px-16 sm:px-4'>
          <div className='relative flex h-full w-full flex-col items-center justify-center bg-cover px-16'>
            <img
              className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
              src='/brasov3.jpeg'
              alt='brasov'
            />
            <div className='flex w-[80%] max-w-[60rem] flex-col items-center md:mb-48 md:mt-48'>
              <h1 className='relative z-10 text-[3rem] font-bold text-white md:text-3xl'>
                Program
              </h1>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 items-center gap-6 px-16 lg:grid-cols-3 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:px-4'>
          <Link
            href='#sambata'
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>SÂMBĂTĂ</label>
                <label className='text-base font-semibold'>27.04.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </Link>
          <Link
            href='#duminica'
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>DUMINICĂ</label>
                <label className='text-base font-semibold'>28.04.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </Link>
          <Link
            href='#luni'
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>LUNI</label>
                <label className='text-base font-semibold'>29.04.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </Link>
          <Link
            href='#marti'
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>MARȚI</label>
                <label className='text-base font-semibold'>30.04.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </Link>
          <Link
            href='#miercuri'
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>MIERCURI</label>
                <label className='text-base font-semibold'>01.05.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div id='sambata' className='grid grid-cols-1 divide-y-4 border-y-4 border-black'>
        <div className='flex w-full flex-col gap-5 bg-primary sm:pl-5'>
          <div className='w-full bg-black py-8'>
            <h1 className='text-center text-[3rem] font-bold text-white'>
              Sâmbătă
            </h1>
          </div>
          <div className='flex border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%] font-bold'>Ora</div>
            <div className='w-[25%] font-bold'>Activitate</div>
            <div className='w-[55%] font-bold'>Locație</div>
          </div>
          <div className='flex border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>11.00-16.00</div>
            <div className='w-[25%]'>Sosirea participanților</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>
                Adresa: Valea Sticlăriei, tel.0766622474, e-mail:
                receptie@hotelsoimul.ro
              </p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
              <p>
                Adresa: Valea Dragă, tel.0268 407330, e-mail:
                reservation-hotelpoiana@anahotels.ro
              </p>
            </div>
          </div>
          <div className='flex border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>11.00-16.00</div>
            <div className='w-[25%]'>Sosirea membrilor Comisiei Centrale</div>
            <div className='w-[55%]'>
              <p>Locație de cazare:</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
              <p>
                Adresa: Valea Dragă, tel.0268 407330, e-mail:
                reservation-hotelpoiana@anahotels.ro
              </p>
            </div>
          </div>
          <div className='flex border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>17:00</div>
            <div className='w-[25%]'>
              Deschiderea festivă a Olimpiadei de Istorie – Etapa națională
            </div>
            <div className='w-[55%]'>
              <p>
                Aula Sergiu Chiriacescu a Universității Transilvania din Brașov
              </p>
              <p>Adresa: Str.Iuliu Maniu Nr.41 A</p>
            </div>
          </div>
          <div className='flex border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>19.00-20.00</div>
            <div className='w-[25%]'>Ședința tehnică a Comisiei Centrale</div>
            <div className='w-[55%]'>
              <p>Colegiul Național „Andrei Șaguna” Brașov</p>
              <p>
                Adresa: Șirul Mitropolit Andrei Șaguna Nr.1, tel.0268 419400,
                e-mail: secretariat@saguna.ro
              </p>
            </div>
          </div>
          <div className='flex border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>19.00-20.30</div>
            <div className='w-[25%]'>Cina</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
            </div>
          </div>
        </div>
      </div>
      <div id='duminica' className='grid grid-cols-1 divide-y-4 border-y-4 border-black'>
        <div className='flex w-full flex-col gap-5 bg-primary sm:pl-5'>
          <div className='w-full bg-black py-8'>
            <h1 className='text-center text-[3rem] font-bold text-white'>
              Duminică
            </h1>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%] font-bold'>Ora</div>
            <div className='w-[25%] font-bold'>Activitate</div>
            <div className='w-[55%] font-bold'>Locație</div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>07.00-08.00</div>
            <div className='w-[25%]'>Micul dejun</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>10.00-13.00</div>
            <div className='w-[25%]'>
              Proba scrisă a Olimpiadei de Istorie – Etapa națională
            </div>
            <div className='w-[55%]'>
              <p>Colegiul Național „Andrei Șaguna” Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>13.30-15.00</div>
            <div className='w-[25%]'>Masa de prânz</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>16.00-19.00</div>
            <div className='w-[25%]'>
              Itinerar turistic și cultural în Municipiul Brașov – participă
              elevi, profesori însoțitori și profesori însoțitori desemnați de
              Inspectoratul Școlar Județean Brașov
            </div>
            <div className='w-[55%]'>Municipiul Brașov</div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>15.30-19.30</div>
            <div className='w-[25%]'>
              Comisia Centrală – Evaluarea lucrărilor scrise
            </div>
            <div className='w-[55%]'>
              <p>Colegiul Național „Andrei Șaguna” Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>19.00-20.30</div>
            <div className='w-[25%]'>Cina</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
            </div>
          </div>
        </div>
      </div>
      <div id='luni' className='grid grid-cols-1 divide-y-4 border-y-4 border-black'>
        <div className='flex w-full flex-col gap-5 bg-primary sm:pl-5'>
          <div className='w-full bg-black py-8'>
            <h1 className='text-center text-[3rem] font-bold text-white'>
              Luni
            </h1>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%] font-bold'>Ora</div>
            <div className='w-[25%] font-bold'>Activitate</div>
            <div className='w-[55%] font-bold'>Locație</div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>07.00-08.00</div>
            <div className='w-[25%]'>Micul dejun</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>09.00-17.30</div>
            <div className='w-[25%]'>
              Excursie tematică Masa de prânz va fi luată pe parcursul
              desfășurării excursiei, în intervalul orar 13.30-15.00
            </div>
            <div className='w-[55%]'>Județul Brașov</div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>09.00-19.30</div>
            <div className='w-[25%]'>
              Comisia Centrală – Evaluarea lucrărilor scrise
            </div>
            <div className='w-[55%]'>
              <p>Colegiul Național „Andrei Șaguna” Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>19.00-20.30</div>
            <div className='w-[25%]'>Cina</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
            </div>
          </div>
        </div>
      </div>
      <div id='marti' className='grid grid-cols-1 divide-y-4 border-y-4 border-black'>
        <div className='flex w-full flex-col gap-5 bg-primary sm:pl-5'>
          <div className='w-full bg-black py-8'>
            <h1 className='text-center text-[3rem] font-bold text-white'>
              Marți
            </h1>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%] font-bold'>Ora</div>
            <div className='w-[25%] font-bold'>Activitate</div>
            <div className='w-[55%] font-bold'>Locație</div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>07.00-08.00</div>
            <div className='w-[25%]'>Micul dejun</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>09.00-12.30</div>
            <div className='w-[25%]'>
              Itinerar turistic și cultural în Municipiul Brașov – vizite la
              muzee; participă elevi, profesori însoțitori și profesori
              însoțitori desemnați de Inspectoratul Școlar Județean Brașov
            </div>
            <div className='w-[55%]'>Municipiul Brașov</div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>11.00</div>
            <div className='w-[25%]'>Afișarea rezultatelor inițiale</div>
            <div className='w-[55%]'>
              <p>Colegiul Național „Andrei Șaguna” Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>11.30-12.30</div>
            <div className='w-[25%]'>Depunerea eventualelor contestații</div>
            <div className='w-[55%]'>
              <p>Colegiul Național „Andrei Șaguna” Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>13.30-15.30</div>
            <div className='w-[25%]'>
              Reevaluarea eventualelor lucrări contestate
            </div>
            <div className='w-[55%]'>
              <p>Colegiul Național „Andrei Șaguna” Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>13.30-15.00</div>
            <div className='w-[25%]'>Masa de prânz</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>16.00-17.00</div>
            <div className='w-[25%]'>Afișarea rezultatelor finale</div>
            <div className='w-[55%]'>
              <p>Colegiul Național „Andrei Șaguna” Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>20.00</div>
            <div className='w-[25%]'>Cina</div>
            <div className='w-[55%]'>Poiana Brașov</div>
          </div>
        </div>
      </div>
      <div id='miercuri' className='grid grid-cols-1 divide-y-4 border-y-4 border-black'>
        <div className='flex w-full flex-col gap-5 bg-primary sm:pl-5'>
          <div className='w-full bg-black py-8'>
            <h1 className='text-center text-[3rem] font-bold text-white'>
              Miercuri
            </h1>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%] gap-4 font-bold'>Ora</div>
            <div className='w-[25%] font-bold'>Activitate</div>
            <div className='w-[55%] font-bold'>Locație</div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>07.00-08.00</div>
            <div className='w-[25%]'>Micul dejun</div>
            <div className='w-[55%]'>
              <p>Locațiile de cazare:</p>
              <p>Hotel „Șoimul” din Poiana Brașov</p>
              <p>Hotel „Ana-Hotels Poiana” din Poiana Brașov</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>10.00</div>
            <div className='w-[25%]'>Festivitatea de premiere</div>
            <div className='w-[55%]'>
              <p>Locație:</p>
              <p>
                Aula Sergiu Chiriacescu a Universității Transilvania din Brașov
              </p>
              <p>Adresa: Str.Iuliu Maniu Nr.41 A</p>
            </div>
          </div>
          <div className='flex gap-4 border-b-1 border-b-black/15 pb-5 pl-[5%]'>
            <div className='w-[10%]'>12.00-13.00</div>
            <div className='w-[25%]'>
              Prânz (pachete) și plecarea participanților
            </div>
            <div className='w-[55%]'></div>
          </div>
        </div>
      </div>
    </main>
  );
}
