import Landing from '@/app/_sections/landing';
import Welcome from '@/app/_sections/welcome';
import Brasov from '@/app/_sections/brasov';
import Saguna from '@/app/_sections/saguna';

export default function Home() {
  return (
    <>
      <main className='bg-background'>
        <Landing />
        <Welcome />
        <Brasov />
        <Saguna />
      </main>
    </>
  );
}
