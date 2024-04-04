export default function Informatii() {
  return (
    <main className='flex flex-col gap-8 px-16 pb-16 pt-32 sm:px-4'>
      <div className='relative flex w-full flex-col items-center bg-cover'>
        <img
          className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
          src='/saguna.png'
          alt='saguna'
        />
        <div className='mb-48 mt-48 flex w-[80%] max-w-[60rem] flex-col items-center'>
          <h1 className='relative z-10 text-[3rem] font-bold text-white md:text-3xl'>
            Concurs
          </h1>
          {/*<p className='relative z-10 text-[1.25rem] font-medium text-white'>*/}
          {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id*/}
          {/*  massa sagittis, ultricies tellus vitae, sodales nunc. Morbi semper*/}
          {/*  scelerisque condimentum. Phasellus luctus lacus nec dolor fermentum*/}
          {/*  rhoncus. Sed at dolor justo.*/}
          {/*</p>*/}
        </div>
      </div>
    </main>
  );
}
