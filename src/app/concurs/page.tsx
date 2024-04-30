import Link from 'next/link';

function Concurs() {
  return (
    <main className='flex h-screen flex-col gap-8 px-16 pb-16 pt-36 sm:px-4'>
      <div className='relative flex min-h-[20rem] w-full grow basis-0 flex-col items-center justify-center bg-cover'>
        <img
          className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
          src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/saguna%202.jpeg?alt=media&token=80c12734-0f34-4e07-b85b-b78b9fee41b6'
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
    <div className='grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1 sm:pb-20'>
      <div className='flex grow basis-0 flex-col items-center justify-center gap-4 rounded-[2rem] border-4 bg-secondary px-4 py-6'>
        <Link
          target='_blank'
          href='https://drive.google.com/file/d/1khNSmL4Q_wnvzucc3iNTGnqxB8MFU81E/view'
          className='flex items-center text-xl font-semibold'
        >
          <i className='fa fa-regular fa-file-lines mr-2'></i>
          <span>Regulament</span>
          <i className='fa fa-arrow-right ml-2'></i>
        </Link>
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
      <div className='flex grow basis-0 flex-col items-center justify-center gap-4 rounded-[2rem] border-4 bg-secondary px-4 py-6'>
        <h1 className='text-2xl font-extrabold'>SUBIECTE</h1>
        <div className='flex flex-col items-center gap-2'>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/1V1RrKZsjeJ2QnbBRW7RFzsKdY26V9ezn/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a VIII-a
          </Link>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/1f07tuZQwCApGj47hfk6hJGxMcCa2ntYL/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a IX-a
          </Link>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/1WMJBZHdT9vlvQQVwGL3rig8K9xor6PlO/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a X-a
          </Link>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/12oUacghowSzfKN9FZ_5soGMnDszrJraH/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a XI-a
          </Link>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/1R0R5zyC0yy3WWsmXHU-giOdRMv4gQrQN/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a XII-a
          </Link>
        </div>
      </div>
      <div className='flex grow basis-0 flex-col items-center justify-center gap-4 rounded-[2rem] border-4 bg-secondary px-4 py-6'>
        <h1 className='text-center text-2xl font-extrabold'>
          BAREME DE EVALUARE ȘI NOTARE
        </h1>
        <div className='flex flex-col items-center gap-2'>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/12oD0SMaa5VlKT_crpk9JH0dgXYK3Yl7E/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a VIII-a
          </Link>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/19BZAMJ_YB29uUG7KUCljsS6FB3VYVlqv/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a IX-a
          </Link>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/18huji4VVX4OhJSpgMuAcOoUjMO5meAot/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a X-a
          </Link>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/1oYiSjIObhcG1YP6eY-2zjOXySfqnFt77/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a XI-a
          </Link>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/1IekyFOe_CewTJ4NC1NIuyI2M65kAWq-f/view?usp=sharing'
            className='text-xl font-semibold hover:underline'
          >
            Clasa a XII-a
          </Link>
        </div>
      </div>
      <div className='flex grow basis-0 flex-col items-center justify-center gap-4 rounded-[2rem] border-4 bg-secondary px-4 py-6'>
        <h1 className='text-2xl font-extrabold'>REZULTATE</h1>
        <div className='flex flex-col items-center gap-2'>
          <Link href='https://drive.google.com/file/d/1hP-Wy2qJPEai4NDANWHfDVBMBDUq5XJr/view?usp=sharing' className='text-xl font-semibold hover:underline'>Clasa a VIII-a</Link>
          <Link href='https://drive.google.com/file/d/1PmIv9aKG02H_1xeftlf8i-MCEKBvSHOD/view?usp=sharing' className='text-xl font-semibold hover:underline'>Clasa a IX-a</Link>
          <Link href='https://drive.google.com/file/d/1WVbb2LBeGmC3TcC6maRrTqHGWq5459a3/view?usp=sharing' className='text-xl font-semibold hover:underline'>Clasa a X-a</Link>
          <Link href='https://drive.google.com/file/d/1BoaUT6ru4W2bz_RyWWixcZRpAFY6qpAr/view?usp=sharing' className='text-xl font-semibold hover:underline'>Clasa a XI-a</Link>
          <Link href='https://drive.google.com/file/d/1b6H5pJRNganIzHPqjD7a6y_9aKhsMO2_/view?usp=sharing' className='text-xl font-semibold hover:underline'>Clasa a XII-a</Link>
        </div>
      </div>
    </div>
  );
}

export default Concurs;
