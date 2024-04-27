'use client';

export default function Saguna() {
  return (
    <section
      id='saguna'
      className='flex flex-col items-center justify-center border-t-4 border-black bg-primary py-16'
    >
      <h1 className='pb-12 text-center text-5xl font-bold sm:text-3xl'>
        Despre Colegiul Național „Andrei Șaguna”
      </h1>
      <iframe
        className='h-[562.5px] w-[1000px] rounded-xl md:h-[168.75px] md:w-[300px]'
        width='1000'
        height='562.5'
        src='https://www.youtube-nocookie.com/embed/zyFBEzmkn34?si=LD7O8i0OppK6urvN'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <div className='w-3/5 pt-8 text-justify flex gap-2 flex-col sm:w-auto sm:px-8'>
        <p>
          &emsp;&emsp;Începuturile școlii sunt legate de personalitatea
          protopopului Ioan Popazu care, printr-o scrisoare din 7 septembrie
          1850, a cerut episcopului Andrei Șaguna aprobarea deschiderii
          gimnaziului. La 17 septembrie 1851 Andrei Şaguna a pus piatra de
          temelie a clădirii şcolii, într-o atmosferă de sărbătoare. Din anul
          1922 școala poartă numele ctitorului său, iar în anul 1996 Liceul
          „Andrei Şaguna” a devenit Colegiu Naţional.
        </p>
        <p>
          &emsp;&emsp;În Sala Festivă a Colegiului, în anul 1882 a avut loc
          premiera operetei „Crai Nou” compusă de Ciprian Porumbescu în perioada
          în care a fost profesor de muzică aici.
        </p>
        <p>
          &emsp;&emsp;Deviza școlii, „Litteris et virtuti”, se află pe peretele
          frontal al Sălii Festive, amintind de valorile de Bine, Adevăr şi
          Frumos.{' '}
        </p>
        <p>
          &emsp;&emsp;Colegiul are şi un bogat ethos şcolar clădit şi prin
          tradiţiile reînviate după 1989: „Comanda”, „Maialul”, „15 Mai”, „Ziua
          colegiului”, alături de formaţii artistice, Minisatul, fanfara,
          dansuri populare. Dintre foştii profesori şi elevi ai colegiului 50 au
          devenit, în timp, academicieni.
        </p>
      </div>
    </section>
  );
}
