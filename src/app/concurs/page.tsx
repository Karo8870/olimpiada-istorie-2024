import '@/lib/fontawesome/css/fa.css';

function Concurs() {
  return (
    <main className='flex flex-col gap-8 px-16 pb-16 pt-32 sm:px-4'>
      <div className='relative flex w-full flex-col items-center bg-cover'>
        <img
          className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
          src='saguna.png'
          alt='saguna'
        />
        <div className='mb-32 mt-20 flex w-[80%] max-w-[60rem] flex-col items-center'>
          <h1 className='relative z-10 text-[3rem] font-bold text-white'>
            Concurs
          </h1>
          <p className='relative z-10 text-[1.25rem] font-medium text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            massa sagittis, ultricies tellus vitae, sodales nunc. Morbi semper
            scelerisque condimentum. Phasellus luctus lacus nec dolor fermentum
            rhoncus. Sed at dolor justo.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-6 sm:grid-cols-1 md:grid-cols-2'>
        <div className='flex grow basis-0 flex-col items-center gap-4 rounded-[2rem] border-4 bg-[#FFE4CB] px-4 py-6'>
          <label className='flex items-center text-xl font-semibold'>
            <i className='fa fa-file mr-2'></i>
            <span>Regulament</span>
            <i className='fa fa-arrow-right ml-2'></i>
          </label>
          <label className='flex items-center text-xl font-semibold'>
            <i className='fa fa-file mr-2'></i>
            <span>Participanți</span>
            <i className='fa fa-arrow-right ml-2'></i>
          </label>
          <label className='flex items-center text-xl font-semibold'>
            <i className='fa fa-file mr-2'></i>
            <span>Comisia de evaluare</span>
            <i className='fa fa-arrow-right ml-2'></i>
          </label>
          <label className='flex items-center text-xl font-semibold'>
            <i className='fa fa-file mr-2'></i>
            <span>Comisia de organizare</span>
            <i className='fa fa-arrow-right ml-2'></i>
          </label>
        </div>
        <div className='flex grow basis-0 flex-col items-center gap-4 rounded-[2rem] border-4 bg-[#FFE4CB] px-4 py-6'>
          <h1 className='text-2xl font-extrabold'>SUBIECTE</h1>
          <div className='flex flex-col items-center gap-2'>
            <label className='text-xl font-semibold'>Clasa a VIII-a</label>
            <label className='text-xl font-semibold'>Clasa a IX-a</label>
            <label className='text-xl font-semibold'>Clasa a X-a</label>
            <label className='text-xl font-semibold'>Clasa a XI-a</label>
            <label className='text-xl font-semibold'>Clasa a XII-a</label>
          </div>
        </div>
        <div className='flex grow basis-0 flex-col items-center gap-4 rounded-[2rem] border-4 bg-[#FFE4CB] px-4 py-6'>
          <h1 className='text-2xl font-extrabold'>BAREME</h1>
          <div className='flex flex-col items-center gap-2'>
            <label className='text-xl font-semibold'>Clasa a VIII-a</label>
            <label className='text-xl font-semibold'>Clasa a IX-a</label>
            <label className='text-xl font-semibold'>Clasa a X-a</label>
            <label className='text-xl font-semibold'>Clasa a XI-a</label>
            <label className='text-xl font-semibold'>Clasa a XII-a</label>
          </div>
        </div>
        <div className='flex grow basis-0 flex-col items-center gap-4 rounded-[2rem] border-4 bg-[#FFE4CB] px-4 py-6'>
          <h1 className='text-2xl font-extrabold'>REZULTATE</h1>
          <div className='flex flex-col items-center gap-2'>
            <label className='text-xl font-semibold'>Clasa a VIII-a</label>
            <label className='text-xl font-semibold'>Clasa a IX-a</label>
            <label className='text-xl font-semibold'>Clasa a X-a</label>
            <label className='text-xl font-semibold'>Clasa a XI-a</label>
            <label className='text-xl font-semibold'>Clasa a XII-a</label>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Concurs;
