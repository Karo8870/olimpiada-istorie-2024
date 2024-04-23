import { SectionHeading } from '@/components/SectionHeading';
import { SponsorCard } from '@/components/SponsorCard';

export function Sponsors() {
  return (
    <section id='sponsori' className='flex w-full flex-col'>
      <SectionHeading>Sponsori</SectionHeading>
      <div className='flex flex-col gap-6 px-12 pb-16 pt-12 sm:gap-3 sm:px-4'>
        <div className='grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 sm:gap-3'>
          <SponsorCard
            title='HEALTHY CLEANING CONCEPT'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/casa-parfumurilor.png?alt=media&token=b1c0d38a-ea49-49a7-a932-e17879e7c3a2'
            href='https://www.casaparfumurilor.ro/'
          />
          <SponsorCard
            title='Grupul editorial TREI'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/editura3.png?alt=media&token=9c371add-2f4f-4a9a-8024-6c4990f3a6a5'
            href='https://www.edituratrei.ro/'
          />
          <SponsorCard
            title='KRONSOFT DEVELOPMENT'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/kronsoft.png?alt=media&token=b2ae777d-ad80-4c8e-8306-f4222ef399f3'
            href='https://www.kronsoft.ro/'
          />
          <SponsorCard
            title='INSTAL CARPATICA SRL'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/instal-carpatica.png?alt=media&token=f8aa5043-0760-413c-bf39-31bbd0f3da36'
            href='https://instalcarpatica.ro/'
          />
          <SponsorCard
            title='KERATO INSTAL SRL'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/kerato.webp?alt=media&token=8e575e32-e27c-4493-ad2a-9cfc687a780b'
            href='https://kerato.ro/'
          />
          <SponsorCard
            title='Copy Center TMF'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/tmf.png?alt=media&token=26ce7364-8079-4b53-878c-079d0f1c3942'
            href='https://www.copycentertmf.ro'
          />
          <SponsorCard
            title='HUMANITAS'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/humanitas.png?alt=media&token=77359fd0-1a85-4b90-9495-23aced88bf25'
            href='https://humanitas.ro/'
          />
          <SponsorCard
            title='TEMAD CO'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/temad.png?alt=media&token=13a4d00b-fd0e-4e4e-a599-1ae0c2ba4808'
            href='https://www.temad.ro/contact'
          />
          <SponsorCard
            title='DIRECT CLIENT SERVICES SRL/CĂRTUREȘTI'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/carturesti.png?alt=media&token=c1cd98ff-7c02-4882-bbe2-e3d0a7fc4d4c'
            href='https://carturesti.ro/'
          />
          <SponsorCard
            title='Zama Buna:TakeAway,Catering,Livrări'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/zama-buna.jpg?alt=media&token=b95f8b8e-dc28-470f-91a8-972cad0420bb'
            href='https://www.zamabuna.ro'
          />
          <SponsorCard
            title='Lavander cafe &wine bar'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/lavender.jpg?alt=media&token=1ac05b35-40b2-4e00-b35b-445dea2b6213'
            href=''
          />
          <SponsorCard
            title='Asociația de Părinți "Școala din Livadă"'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/iacob-muresianu.jpg?alt=media&token=ab15c620-3ef7-4e12-b8cc-9cd2f6bb6449'
            href='https://www.iacobmuresianu.ro'
          />
          <SponsorCard
            title='S.C FOERCH S.R.L'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/fortech.jpg?alt=media&token=08885a34-20fe-4f48-b964-00a345f368f3'
            href='https://www.foerch.ro'
          />
          <SponsorCard
            title='Forumul Democratic German Brașov'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/fdgrbv.png?alt=media&token=74965646-f51f-4fe5-9775-85a352d1974d'
            href='https://fdgrbv.ro/'
          />
          <SponsorCard
            title='Biserica Neagră/Honterus Gemeinde'
            src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/biserica-neagra.jpg?alt=media&token=c6bffc80-c35b-4feb-ba25-1d7b8169fae8'
            href='https://honterusgemeinde.ro/ro/'
          />
        </div>
        <div className='flex grow basis-1/2 flex-wrap gap-6 sm:gap-3'>
          <div className='flex grow basis-0 flex-col items-center justify-evenly gap-3 rounded-[1.5rem] border-3 bg-primary px-8 py-8'>
            <h1 className='text-center text-2xl font-semibold uppercase'>
              Mircea Gheorghe Abrudan
            </h1>
          </div>
          <div className='flex grow basis-0 flex-col items-center justify-evenly gap-3 rounded-[1.5rem] border-3 bg-primary px-8 py-8'>
            <h1 className='text-2xl font-semibold uppercase'>Țibre Florin</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
