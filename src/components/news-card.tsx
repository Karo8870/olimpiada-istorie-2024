import Link from 'next/link';

export default function NewsCard({
  title,
  date,
  body,
  attachmentName,
  attachmentURL
}: {
  title: string;
  date: string;
  body: string;
  attachmentName?: string;
  attachmentURL?: string;
}) {
  return (
    <div className='flex flex-col rounded-3xl border-4 bg-primary p-6'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <label className='py-1.5 text-sm font-semibold'>{date}</label>
      <p className='text-base font-medium'>{body}</p>
      {attachmentURL ? (
        <Link
          target='_blank'
          href={attachmentURL}
          className='flex items-center gap-2 pt-2 cursor-pointer hover:underline'
        >
          <i className='fa fa-regular text-xl fa-file-text' />
          <label className='text-base font-semibold cursor-pointer'>{attachmentName}</label>
        </Link>
      ) : null}
    </div>
  );
}
