import Landing from '@/app/informatii/_sections/landing';
import Cazare from '@/app/informatii/_sections/cazare';
import Transport from '@/app/informatii/_sections/transport';
import Telefon from '@/app/informatii/_sections/telefon';

export default function Informatii() {
  return (
    <main className='flex h-screen flex-col gap-8 pb-16 pt-32 sm:px-4'>
      <Landing />
      <Cazare />
      <Transport />
      <Telefon />
    </main>
  );
}
