import Link from 'next/link';

export function SponsorCard({
  title,
  src,
  href
}: {
  title: string;
  src?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className='flex flex-col items-center justify-evenly gap-3 rounded-[1.5rem] border-3 bg-light px-8 py-4'
    >
      {src ? <img className='h-56 object-contain' alt={title} src={src} /> : ''}
      <h1 className='text-center text-base font-semibold uppercase'>{title}</h1>
    </Link>
  );
}
