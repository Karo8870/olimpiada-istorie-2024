import { SectionHeading } from '@/components/SectionHeading';
import { SponsorCard } from '@/components/SponsorCard';

export function Partners() {
  return (
    <section id='parteneri' className='flex w-full flex-col'>
      <SectionHeading>Parteneri</SectionHeading>
      <div className='flex flex-col gap-6 px-12 pb-16 pt-12 sm:gap-3 sm:px-4'>
        <div className='grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 sm:gap-3'>
          <SponsorCard
            title='Consiliul Județean Brașov'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/consiliu.jpeg?alt=media&token=70ceb232-5d8d-46dd-8eba-b23412b999f9'
            href='https://cjbrasov.ro/'
          />
          <SponsorCard
            title='Primăria Municipiului Brașov'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/primaria.jpeg?alt=media&token=1b0af81a-bd45-4bec-82d0-d4b0e02d9988'
            href='https://www.brasovcity.ro/'
          />
          <SponsorCard
            title='Colegiul Național "Andrei Șaguna"'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/saguna.jpeg?alt=media&token=26bb682d-768d-40ca-bc77-82454487ab08'
            href='https://www.saguna.ro/'
          />
          <SponsorCard
            title='Universitatea Transilvania'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/unitbv.jpeg?alt=media&token=59405db0-6216-4b1d-8c13-4c408447a731'
            href='https://www.unitbv.ro/'
          />
          <SponsorCard
            title='Școala Gimnazială Nr. 30 Brașov'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/scoala-30.jpeg?alt=media&token=57b38245-8c21-4a56-900d-7097a59522c9'
            href='https://www.scoala30brasov.ro/'
          />
          <SponsorCard
            title='Școala Gimnazială Tărlungeni'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/tarlungeni.jpeg?alt=media&token=9f6805aa-29bb-4585-b4fa-dc1e42b5706b'
            href='https://sctarlungeni.ro/'
          />
          <SponsorCard
            title='Colegiul Național Aprily Lajos'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/aprily.png?alt=media&token=cebc7b4b-deb7-46e5-a15b-90954e489314'
            href='https://www.aprilyfogimnazium.ro/'
          />
          <SponsorCard
            title='Colegiul Tehnic "Simion Mehedinți" Codlea'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/ctsm.jpeg?alt=media&token=0eaacf2b-b521-48cc-a1a4-e3aeb65cf388'
            href='https://ctsm.ro/'
          />
          <SponsorCard
            title='Școala Gimnazială Prejmer'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/sgp.jpeg?alt=media&token=d6370dfe-3534-4ca0-9d35-66a314cb23a0'
            href='https://www.scoalaprejmer.ro/'
          />
          <SponsorCard
            title='Palatul Copiilor Brașov'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/pcb.jpeg?alt=media&token=7eb25b8d-adee-4586-ba8a-6fab7b2623d2'
            href='https://palatulcopiilorbrasov.ro/site2/'
          />
          <SponsorCard
            title='Muzeul Țării Făgărașului'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/mtf.jpeg?alt=media&token=e07778a6-871e-4c3e-b3e0-965da9ae8d0b'
            href='https://cetateafagarasului.com/'
          />
          <SponsorCard
            title='Colegiul Național „Doamna Stanca” Făgăraș'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/doamna-stanca.jpeg?alt=media&token=2975f019-6cf2-4d87-b435-0ac1f73a6b72'
            href='https://doamnastanca.ro/'
          />
        </div>
        <div className='grid grid-cols-3 gap-6 sm:gap-3'>
          {/*<div className='flex grow basis-0 flex-wrap gap-6 sm:gap-3'>*/}
            <div className='flex grow basis-0 flex-col items-center justify-evenly gap-3 rounded-[1.5rem] border-3 bg-primary px-8 py-8'>
              <h1 className='text-center text-2xl font-semibold uppercase'>
                Asociația Preuniversitară George Moroianu Săcele
              </h1>
            </div>
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
