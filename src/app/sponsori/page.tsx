import { Landing } from '@/app/sponsori/_sections/landing';
import { Sponsors } from '@/app/sponsori/_sections/sponsors';
import { Partners } from '@/app/sponsori/_sections/partners';

export default function Sponsori() {
  return (
    <main className='flex flex-col'>
      <Landing />
      <Sponsors />
      <Partners />
    </main>
  );
}
