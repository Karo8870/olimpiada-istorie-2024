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
          title='Raportul contestațiilor'
          date='30.04.2024'
          body=''
          attachmentName='Raport contestații'
          attachmentURL='https://drive.google.com/file/d/1mSpw4Fqj0WoUTm5wUz1vwNB_63-B9agQ/view?usp=sharing'
        />
        <NewsCard
          title='ÎN ATENȚIA CANDIDAȚILOR!'
          date='30.04.2024'
          body='EVENTUALELE CONTESTAȚII SE VOR DEPUNE ASTĂZI, 30.04.2024 ÎNTRE ORELE 11.30 – 13.30.'
        />
        <NewsCard
          title='ÎN ATENȚIA CANDIDAȚILOR!'
          date='30.04.2024'
          body='NUMĂRUL DE MENȚIUNI SE STABILEȘTE ÎN FUNCȚIE DE NUMĂRUL DE PARTICIPANȚI/CLASĂ, REPREZENTÂND MAXIMUM 15% DIN TOTALUL PARTICIPANȚILOR CONFORM OME 3035/2012, ART. 47, ALIN(1) ȘI (2).'
        />
        <NewsCard
          title='EXCURSIE 29.04.2024'
          date='28.04.2024'
          body={
            <>
              <h1 className='pb-4 text-xl'>
                Program excursie luni, 29.04.2024:
              </h1>
              <p>
                <b>Ora 9:00</b> - Plecare din Livada Poștei.
              </p>
              <p className='pt-3'>
                <b>10.30 - 12:30</b> - vizită Rupea
              </p>
              <ul className='list-disc pl-8'>
                <li>Biserica Evanghelică</li>
                <li>Muzeul de Etnografie</li>
                <li>Cetatea Rupea</li>
              </ul>
              <p className='pt-3'>
                <b>12.30 - 13.30</b> - deplasare pe traseul Rupea - Codlea
              </p>
              <ul className='list-disc pl-8'>
                <li>Biserica Evanghelică</li>
                <li>Muzeul de Etnografie</li>
                <li>Cetatea Rupea</li>
              </ul>
              <p className='pt-3'>
                <b>12.30 - 13.30</b> - deplasare pe traseul Rupea - Codlea
              </p>
              <p className='pt-3'>
                <b>13.30 - 17:00</b> - Codlea
              </p>
              <ul className='list-disc pl-8'>
                <li>masa de prânz</li>
                <li>vizită - Cetatea Codlei</li>
              </ul>
              <p className='pt-3'>
                <b>Ora 16:00</b> - deplasare pe traseul Codlea - Râșnov - Poiana
                Brașov (în Parcarea Mare).
              </p>
            </>
          }
          attachmentName='Repartizare județe pe autocare'
          attachmentURL='https://drive.google.com/file/d/1re-LVPWsnLBuEUsw23ZhgeVIIo-itbI7/view?usp=sharing'
        />
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
