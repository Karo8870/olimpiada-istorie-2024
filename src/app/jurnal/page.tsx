function Jurnal() {
  return (
    <main className='flex flex-col gap-8 px-16 pb-16 pt-36 sm:px-4'>
      <div className='relative flex w-full flex-col items-center bg-cover'>
        <img
          className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/brasov4.jpeg?alt=media&token=fba9a58f-10dd-46a7-88e7-26e8557e4b76'
          alt='Brasov'
        />
        <div className='mb-48 mt-48 flex w-[80%] max-w-[60rem] flex-col items-center'>
          <h1 className='relative z-10 text-[3rem] font-bold text-white md:text-3xl'>
            Jurnal
          </h1>
        </div>
      </div>
    </main>
  );
}

export default Jurnal;
