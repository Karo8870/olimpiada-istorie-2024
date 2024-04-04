import '@/lib/fontawesome/css/fa.css';

export default function LargeButton({
  text,
  className = '',
  arrowClassName,
  iconBg,
  iconColor
}: {
  text: string;
  className?: string;
  arrowClassName?: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <button
      className={`sm:grow-1 flex flex-grow basis-0 items-center justify-between rounded-[2rem] border-3 border-black px-4 py-2 sm:basis-0 sm:px-2 sm:py-1 ${className}`}
    >
      <label className='text-lg font-semibold sm:text-base'>{text}</label>
      <div
        className={`flex aspect-square h-[3rem] items-center justify-center rounded-full sm:h-[2rem] ${iconBg}`}
      >
        <i
          className={`fa fa-arrow-down flex aspect-square items-center justify-center p-1 text-xl sm:text-base ${iconColor}`}
        />
      </div>
    </button>
  );
}
