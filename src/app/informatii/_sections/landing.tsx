export default function () {
  return (
    <section className='flex flex-col gap-8 px-16'>
      <div className='relative flex w-full flex-col items-center bg-cover'>
        <img
          className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
          src='/poianabrasov.png'
          alt='Poiana Brasov'
        />
        <div className='mb-48 mt-48 flex w-[80%] max-w-[60rem] flex-col items-center'>
          <h1 className='relative z-10 text-[3rem] font-bold text-white md:text-3xl'>
            Informații utile
          </h1>
        </div>
      </div>
      <div className='flex w-full justify-between gap-3'>
        <div className='flex grow basis-0 items-center justify-between rounded-[2rem] border-3 bg-secondary px-8 py-16'>
          <div className='flex flex-col items-center gap-3'>
            <i className='fa fa-bed-front text-3xl' />
            <label className='text-xl font-semibold'>Cazare</label>
          </div>
          <div
            className={`flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black sm:h-[2rem]`}
          >
            <i
              className={`fa fa-arrow-down flex aspect-square items-center justify-center p-1 text-xl text-white sm:text-base`}
            />
          </div>
        </div>
        <div className='flex grow basis-0 items-center justify-between rounded-[2rem] border-3 bg-secondary px-8 py-16'>
          <div className='flex flex-col items-center gap-3'>
            <i className='fa fa-bus  text-3xl' />
            <div className='flex flex-col'>
              <label className='text-center text-xl font-semibold'>
                Transport
              </label>
              <label className='text-center text-xl font-semibold'>
                și adrese utile
              </label>
            </div>
          </div>
          <div
            className={`flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black sm:h-[2rem]`}
          >
            <i
              className={`fa fa-arrow-down flex aspect-square items-center justify-center p-1 text-xl text-white sm:text-base`}
            />
          </div>
        </div>
        <div className='flex grow basis-0 items-center justify-between rounded-[2rem] border-3 bg-secondary px-8 py-16'>
          <div className='flex flex-col items-center gap-3'>
            <i className='fa fa-phone text-3xl' />
            <label className='text-xl font-semibold'>Telefon Urgențe</label>
          </div>
          <div
            className={`flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black sm:h-[2rem]`}
          >
            <i
              className={`fa fa-arrow-down flex aspect-square items-center justify-center p-1 text-xl text-white sm:text-base`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
