export default function NewsCard({
  title,
  date,
  body
}: {
  title: string;
  date: string;
  body: string;
}) {
  return (
    <div className='flex flex-col rounded-3xl border-4 bg-primary p-6'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <label className='py-1.5 text-sm font-semibold'>{date}</label>
      <p className='text-base font-medium'>{body}</p>
    </div>
  );
}
