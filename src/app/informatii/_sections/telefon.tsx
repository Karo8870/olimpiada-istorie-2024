export default function () {
  return (
    <section id='telefon' className='flex w-full flex-col'>
      <div className='w-full bg-black py-8 sm:py-6'>
        <h1 className='text-center text-[3rem] font-bold text-white sm:text-2xl'>
          Telefon Urgențe
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-6 px-12 pb-16 pt-12 md:grid-cols-2 sm:grid-cols-1 sm:px-6'>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold sm:text-xl'>
              Număr unic de urgențe
            </label>
            <label className='text-[1.25rem] font-semibold sm:text-base'>
              112
            </label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold sm:text-xl'>
              Poliția Municipiului Brașov
            </label>
            <label className='text-[1.25rem] font-semibold sm:text-base'>
              0268 407500
            </label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold sm:text-xl'>
              Poliția Locală Brașov
            </label>
            <label className='text-[1.25rem] font-semibold sm:text-base'>
              0268 954
            </label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold sm:text-xl'>
              Jandarmeria
            </label>
            <label className='text-[1.25rem] font-semibold sm:text-base'>
              0268 545900
            </label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold sm:text-xl'>
              Spitalul Clinic Județean de Urgență
            </label>
            <label className='text-[1.25rem] font-semibold sm:text-base'>
              0268 320 022
            </label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold sm:text-xl'>
              Spitalul Clinic de Copii Brașov
            </label>
            <label className='text-[1.25rem] font-semibold sm:text-base'>
              0268 407500
            </label>
          </div>
          <i className='fa fa-phone' />
        </div>
      </div>
    </section>
  );
}
