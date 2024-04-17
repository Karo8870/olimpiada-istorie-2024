import '@/lib/fontawesome/css/fa.css';

function Concurs() {
  return (
    <main className='flex h-screen flex-col gap-8 px-16 pb-16 pt-36 sm:px-4'>
      <div className='relative flex w-full grow basis-0 flex-col items-center justify-center bg-cover'>
        <img
          className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
          src='/saguna.png'
          alt='saguna'
        />
        <div className='flex w-[80%] max-w-[60rem] flex-col items-center md:mb-48 md:mt-48'>
          <h1 className='relative z-10 text-[3rem] font-bold text-white md:text-3xl'>
            Concurs
          </h1>
        </div>
      </div>
      <Sections />
    </main>
  );
}

function Sections() {
  return (
    <div className='grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1'>
      <div className='flex grow basis-0 flex-col items-center justify-center gap-4 rounded-[2rem] border-4 bg-secondary px-4 py-6'>
        <label className='flex items-center text-xl font-semibold'>
          <i className='fa fa-regular fa-file-lines mr-2'></i>
          <span>Regulament</span>
          <i className='fa fa-arrow-right ml-2'></i>
        </label>
        <label className='flex items-center text-xl font-semibold'>
          <i className='fa fa-regular fa-file-lines mr-2'></i>
          <span>Participanți</span>
          <i className='fa fa-arrow-right ml-2'></i>
        </label>
        <label className='flex items-center text-xl font-semibold'>
          <i className='fa fa-regular fa-file-lines mr-2'></i>
          <span>Comisia centrală</span>
          <i className='fa fa-arrow-right ml-2'></i>
        </label>
        <label className='flex items-center text-xl font-semibold'>
          <i className='fa fa-regular fa-file-lines mr-2'></i>
          <span>Comisia de organizare</span>
          <i className='fa fa-arrow-right ml-2'></i>
        </label>
      </div>
      <div className='flex grow basis-0 flex-col items-center gap-4 rounded-[2rem] border-4 bg-secondary px-4 py-6'>
        <h1 className='text-2xl font-extrabold'>SUBIECTE</h1>
        <div className='flex flex-col items-center gap-2'>
          <label className='text-xl font-semibold'>Clasa a VIII-a</label>
          <label className='text-xl font-semibold'>Clasa a IX-a</label>
          <label className='text-xl font-semibold'>Clasa a X-a</label>
          <label className='text-xl font-semibold'>Clasa a XI-a</label>
          <label className='text-xl font-semibold'>Clasa a XII-a</label>
        </div>
      </div>
      <div className='flex grow basis-0 flex-col items-center gap-4 rounded-[2rem] border-4 bg-secondary px-4 py-6'>
        <h1 className='text-center text-2xl font-extrabold'>
          BAREME DE EVALUARE ȘI NOTARE
        </h1>
        <div className='flex flex-col items-center gap-2'>
          <label className='text-xl font-semibold'>Clasa a VIII-a</label>
          <label className='text-xl font-semibold'>Clasa a IX-a</label>
          <label className='text-xl font-semibold'>Clasa a X-a</label>
          <label className='text-xl font-semibold'>Clasa a XI-a</label>
          <label className='text-xl font-semibold'>Clasa a XII-a</label>
        </div>
      </div>
      <div className='flex grow basis-0 flex-col items-center gap-4 rounded-[2rem] border-4 bg-secondary px-4 py-6'>
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
  );
}

export default Concurs;
