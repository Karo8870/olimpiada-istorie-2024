export default function () {
  return (
    <section className='flex w-full flex-col'>
      <div className='w-full bg-black py-8'>
        <h1 className='text-center text-[3rem] font-bold text-white'>
          Telefon urgențe
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-6 px-12 pb-16 pt-12 md:grid-cols-2 sm:grid-cols-1'>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold'>
              Număr unic de urgențe
            </label>
            <label className='text-[1.25rem] font-semibold'>112</label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold'>
              Poliția Municipiului Brașov
            </label>
            <label className='text-[1.25rem] font-semibold'>0268 407500</label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold'>
              Poliția Locală Brașov
            </label>
            <label className='text-[1.25rem] font-semibold'>0268 954</label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold'>Jandarmeria</label>
            <label className='text-[1.25rem] font-semibold'>0268 545900</label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold'>
              Spitalul Clinic Județean de Urgență
            </label>
            <label className='text-[1.25rem] font-semibold'>0268 320 022</label>
          </div>
          <i className='fa fa-phone' />
        </div>
        <div className='flex items-center justify-between rounded-[1.5rem] border-3 bg-danger p-4'>
          <div className='flex flex-col'>
            <label className='text-[1.5rem] font-semibold'>
              Spitalul Clinic de Copii Brașov
            </label>
            <label className='text-[1.25rem] font-semibold'>0268 407500</label>
          </div>
          <i className='fa fa-phone' />
        </div>
      </div>
    </section>
  );
}
