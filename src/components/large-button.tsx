import '@/lib/fontawesome/css/fa.css';

export default function LargeButton({
  text,
  className
}: {
  text: string;
  className: string;
}) {
  return (
    <button
      className={`flex h-full min-h-16 w-full items-center justify-center rounded-[30px] border-3 border-black px-16 py-4 text-left text-lg font-semibold leading-tight ${className}`}
    >
      {text}
      <i className='fa fa-arrow-down ml-2'></i>
    </button>
  );
}
