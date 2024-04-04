export default function () {
  return (
    <section className='relative flex w-full flex-col items-center bg-cover'>
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
    </section>
  );
}
