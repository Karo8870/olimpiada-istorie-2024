import Link from 'next/link';
import { ReactNode } from 'react';

export default function NewsCard({
  title,
  date,
  body,
  attachmentName,
  attachmentURL
}: {
  title: string;
  date: string;
  body: ReactNode;
  attachmentName?: string;
  attachmentURL?: string;
}) {
  return (
    <div className='flex flex-col rounded-3xl border-4 bg-primary p-6'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <label className='py-1.5 text-sm font-semibold'>{date}</label>
      <div className='text-base font-medium'>{body}</div>
      {attachmentURL ? (
        <Link
          target='_blank'
          href={attachmentURL}
          className='flex cursor-pointer items-center gap-2 pt-2 hover:underline'
        >
          <i className='fa fa-regular fa-file-text text-xl' />
          <label className='cursor-pointer text-base font-semibold'>
            {attachmentName}
          </label>
        </Link>
      ) : null}
    </div>
  );
}
