import '@/lib/fontawesome/css/fa.css';
import { cn } from '@/lib/utils';

export default function LargeButton({
  text,
  className,
  arrowClassName
}: {
  text: string;
  className?: string;
  arrowClassName?: string;
}) {
  return (
    <button
      className={cn(
        'flex h-full min-h-16 w-full items-center justify-between rounded-[30px] border-3 border-black max-xl:px-4 px-8 py-4 text-left text-lg font-semibold leading-tight max-xl:text-base',
        className
      )}
    >
      {text}
      <div
        className={cn(
          'ml-2 flex h-12 w-12 min-w-12 max-w-12 items-center justify-center rounded-full bg-black max-xl:h-8 max-xl:w-8 max-xl:min-w-8 max-xl:max-w-8',
          arrowClassName
        )}
      >
        <i className='fa fa-arrow-down max-xl:text-base text-xl'></i>
      </div>
    </button>
  );
}
