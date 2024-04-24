import { SectionHeading } from '@/components/SectionHeading';
import { SponsorCard } from '@/components/SponsorCard';

export function Partners() {
  return (
    <section id='parteneri' className='flex w-full flex-col'>
      <SectionHeading>Parteneri</SectionHeading>
      <div className='grid grid-cols-3 gap-6 px-12 pb-16 pt-12 md:grid-cols-2 sm:grid-cols-1 sm:gap-3 sm:px-4'>
        <SponsorCard
          title='Consiliul Județean Brașov'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/consiliu.png?alt=media&token=1c184d05-5188-481f-b58b-566417b2cbf1'
          href='https://cjbrasov.ro/'
        />
        <SponsorCard
          title='Primăria Municipiului Brașov'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/primaria.png?alt=media&token=ef390537-7133-40ec-89ff-a9dbac4587d8'
          href='https://www.brasovcity.ro/'
        />
        <SponsorCard
          title='Colegiul Național "Andrei Șaguna"'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/saguna.jpg?alt=media&token=6089a5a5-89ff-4dee-b2f8-fe8a8d336eae'
          href='https://www.saguna.ro/'
        />
        <SponsorCard
          title='Universitatea Transilvania'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/unitbv.png?alt=media&token=5e50294f-4933-41b2-aa3a-70f04b54466d'
          href='https://www.unitbv.ro/'
        />
        <SponsorCard
          title='Școala Gimnazială Nr. 30 Brașov'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/scoala-30.png?alt=media&token=95c31886-53c0-4142-b522-1c68dfe1b248'
          href='https://www.scoala30brasov.ro/'
        />
        <SponsorCard
          title='Școala Gimnazială Tărlungeni'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/tarlungeni.png?alt=media&token=19750219-f2c3-4971-94b6-b2b099b7508a'
          href='https://sctarlungeni.ro/'
        />
        <SponsorCard
          title='Colegiul Național Aprily Lajos'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/aprily.png?alt=media&token=cebc7b4b-deb7-46e5-a15b-90954e489314'
          href='https://www.aprilyfogimnazium.ro/'
        />
        <SponsorCard
          title='Colegiul Tehnic "Simion Mehedinți" Codlea'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/ctsm.png?alt=media&token=7e6eb7eb-b1a2-4410-bde8-940765818638'
          href='https://ctsm.ro/'
        />
        <SponsorCard
          title='Școala Gimnazială Prejmer'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/sgp.png?alt=media&token=0a5c2e60-20ef-433a-a089-90b7862ee7ab'
          href='https://www.scoalaprejmer.ro/'
        />
        <SponsorCard
          title='Palatul Copiilor Brașov'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/pcb.png?alt=media&token=d6166876-c3e0-426f-92f9-b96c4e2da2cd'
          href='https://palatulcopiilorbrasov.ro/site2/'
        />
        {/*<SponsorCard
          title='Asociația Preuniversitară G Moroianu Săcele'
          src=''
          href=''
        />*/}
      </div>
    </section>
  );
}
