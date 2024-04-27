import NewsCard from '@/components/news-card';

export default function Noutati() {
  return (
    <main className='flex flex-col gap-8 px-16 pb-16 pt-36 sm:px-4'>
      <div className='relative flex w-full flex-col items-center bg-cover'>
        <img
          className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/brasov5.jpeg?alt=media&token=d48562db-c6c1-4c91-bd5c-aee3d31222a9'
          alt='Brasov'
        />
        <div className='mb-48 mt-48 flex w-[80%] max-w-[60rem] flex-col items-center'>
          <h1 className='relative z-10 text-[3rem] font-bold text-white md:text-3xl'>
            Noutăți
          </h1>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
        <NewsCard
          title='ÎN ATENŢIA CANDIDAŢILOR'
          date='27.04.2024'
          body='Accesul candidaţilor în săli este permis pe baza buletinului de identitate, paşaportului,  carnetului de elev sau copie a certificatului de naștere în intervalul 09.00 - 09.20.'
          attachmentName='Repartizarea pe săli'
          attachmentURL='https://drive.google.com/file/d/1FEHiNaLvloJU61hwlwIesw6mJdlDerFP/view?usp=sharing'
        />
        <NewsCard
          title='În atenția participațiilor la Olimpiada de Istorie, Etapa Națională!'
          date='27.04.2024'
          body='Duminică, 28.04.2024, cursele speciale RAT care deservesc olimpiada
            vor pleca din parcarea mare din Poiana Brașov în intervalul
            8.00-8.15. Vor prelua și elevii cazați la Hotelul Monterai din
            stația RAT de la Poiana Mică. Traseul se încheie în stația RAT din
            Livada Poștei.'
        />
      </div>
    </main>
  );
}
