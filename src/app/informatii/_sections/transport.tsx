export default function () {
  return (
    <section id='transport'>
      <div className='w-full bg-black py-8 sm:py-6'>
        <h1 className='text-center text-[3rem] font-bold text-white sm:text-2xl'>
          Transport și adrese utile
        </h1>
      </div>
      <div className='flex gap-20 px-12 py-10 md:flex-col sm:gap-5 sm:px-6'>
        <div className='flex grow basis-0 flex-col gap-7 sm:gap-3'>
          <h1 className='text-[3rem] font-bold sm:text-3xl'>
            Transport in comun - RATBV
          </h1>
          <div className='flex gap-6 sm:flex-col sm:gap-3'>
            <div className='flex grow basis-0 items-center justify-between rounded-[1.5rem] border-3 bg-primary px-5 py-4'>
              <div className='flex flex-col'>
                <label className='text-[1.5rem] font-semibold sm:text-xl'>
                  RATBV
                </label>
                <label className='text-[1.25rem] font-semibold sm:text-base'>
                  Trasee și orare
                </label>
              </div>
              <i className='fa fa-arrow-right text-xl' />
            </div>
            <div className='flex grow basis-0 items-center justify-between rounded-[1.5rem] border-3 bg-secondary px-5 py-4'>
              <div className='flex flex-col'>
                <label className='text-[1.5rem] font-semibold sm:text-xl'>
                  RATBV
                </label>
                <label className='text-[1.25rem] font-semibold sm:text-base'>
                  Linia 20
                </label>
                <label className='text-base font-semibold sm:text-sm'>
                  Poiana Brasov - Livada Postei
                </label>
              </div>
              <i className='fa fa-arrow-right text-xl' />
            </div>
          </div>
          <h1 className='text-[3rem] font-bold sm:text-3xl'>Adrese utile</h1>
          <div className='flex flex-col rounded-[1.5rem] border-3 bg-primary'>
            <div className='flex items-center justify-between px-4 py-4'>
              <div className='flex flex-col'>
                <label className='text-[1.5rem] font-semibold sm:text-xl'>
                  Colegiul Național "Andrei Șaguna"
                </label>
                <label className='text-base font-semibold sm:text-sm'>
                  Șirul Mitropolit Andrei Șaguna 1, Brașov 500123
                </label>
              </div>
              <i className='fa fa-arrow-right text-xl' />
            </div>
          </div>
          <div className='flex flex-col rounded-[1.5rem] border-3 bg-secondary'>
            <div className='flex items-center justify-between px-4 py-4'>
              <div className='flex flex-col'>
                <label className='text-[1.5rem] font-semibold sm:text-xl'>
                  Aula Sergiu Chiriacescu
                </label>
                <label className='text-base font-semibold sm:text-sm'>
                  Strada Iuliu Maniu 41A, Brașov 500091
                </label>
              </div>
              <i className='fa fa-arrow-right text-xl' />
            </div>
          </div>
          <div className='flex flex-col rounded-[1.5rem] border-3 bg-primary'>
            <div className='flex items-center justify-between px-4 py-4'>
              <div className='flex flex-col'>
                <label className='text-[1.5rem] font-semibold sm:text-xl'>
                  Inspectoratul Școlar Județean
                </label>
                <label className='text-base font-semibold sm:text-sm'>
                  Șirul Gheorghe Dima 4, Brașov 500123
                </label>
              </div>
              <i className='fa fa-arrow-right text-xl' />
            </div>
          </div>
        </div>
        <div className='grow basis-0'>
          <iframe
            src='https://www.google.com/maps/d/u/0/embed?mid=1NBOUvmdksH37IpzvDp5SIdHZUhmBxsU&ehbc=2E312F&noprof=1'
            width='640'
            height='480'
            className='h-full w-full rounded-[2rem] border-3 md:aspect-square md:h-auto'
          ></iframe>
        </div>
      </div>
    </section>
  );
}
