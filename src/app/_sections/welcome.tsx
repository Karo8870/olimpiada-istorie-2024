import Image from 'next/image';

export default function Welcome() {
  return (
    <section className='border-b-4'>
      <div className='flex w-full justify-center bg-black py-8 text-4xl font-bold text-white max-md:py-4 max-md:text-2xl'>
        Mesaje de bun venit
      </div>
      <div className='grid grid-cols-2 border-b-4 max-lg:grid-cols-1 max-lg:divide-y-4 lg:divide-x-4'>
        <div className='bg-primary px-20 pb-16 pt-8 max-md:px-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Inspector general</h2>
            <Image
              src='/welcome/image.png'
              width={75}
              height={100}
              className='rounded-2xl border-4'
              alt='Inspector de specialitate'
            />
          </div>
          <div className='pt-4'>
            <i className='fa fa-quote-left text-4xl text-black/80'></i>
            <p>
              Nunc neque, et tincidunt nibh vehicula accumsan. Suspendisse ipsum
              enim, pretium et neque vitae, ultrices sodales erat. Nam a
              ultricies urna. Nullam condimentum accumsan sapien, eu rutrum
              neque placerat id. In lacus est, porta nec aliquet at, dignissim
              quis leo. Donec vitae mauris nec felis venenatis euismod. Quisque
              at tempus urna. Vivamus est tellus, aliquet sed nibh eget, rutrum
              mattis urna. Integer efficitur sem at eleifend faucibus. Etiam
              lacinia ex id finibus condimentum. Morbi porttitor eros vitae erat
              condimentum feugiat. Proin dolor sem, varius eu rhoncus eget,
              cursus vitae risus. Vivamus enim tellus, pellentesque ac dignissim
              eu, rhoncus facilisis ex. Integer dictum, nibh vitae luctus
              finibus, ex ligula consectetur felis, nec ultricies risus elit
              vitae justo. Mauris posuere sit amet massa sollicitudin
              scelerisque. Vestibulum pharetra, augue sit amet ultricies dictum,
              turpis nisl finibus urna, eu varius eros lacus sed est. Duis
              pulvinar metus massa, consequat tempor massa scelerisque et.a,
              augue sit amet ultricies dictum, turpis nisl finibus urna, eu
              varius eros lacus sed est. Duis pulvinar metus massa, consequat
            </p>
          </div>
        </div>
        <div className='bg-secondary px-20 pb-16 pt-8 max-md:px-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Inspector general</h2>
            <Image
              src='/welcome/image.png'
              width={75}
              height={100}
              className='rounded-2xl border-4'
              alt='Inspector de specialitate'
            />
          </div>
          <div className='pt-4'>
            <i className='fa fa-quote-left text-4xl text-black/80'></i>
            <p>
              Nunc neque, et tincidunt nibh vehicula accumsan. Suspendisse ipsum
              enim, pretium et neque vitae, ultrices sodales erat. Nam a
              ultricies urna. Nullam condimentum accumsan sapien, eu rutrum
              neque placerat id. In lacus est, porta nec aliquet at, dignissim
              quis leo. Donec vitae mauris nec felis venenatis euismod. Quisque
              at tempus urna. Vivamus est tellus, aliquet sed nibh eget, rutrum
              mattis urna. Integer efficitur sem at eleifend faucibus. Etiam
              lacinia ex id finibus condimentum. Morbi porttitor eros vitae erat
              condimentum feugiat. Proin dolor sem, varius eu rhoncus eget,
              cursus vitae risus. Vivamus enim tellus, pellentesque ac dignissim
              eu, rhoncus facilisis ex. Integer dictum, nibh vitae luctus
              finibus, ex ligula consectetur felis, nec ultricies risus elit
              vitae justo. Mauris posuere sit amet massa sollicitudin
              scelerisque. Vestibulum pharetra, augue sit amet ultricies dictum,
              turpis nisl finibus urna, eu varius eros lacus sed est. Duis
              pulvinar metus massa, consequat tempor massa scelerisque et.a,
              augue sit amet ultricies dictum, turpis nisl finibus urna, eu
              varius eros lacus sed est. Duis pulvinar metus massa, consequat
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:divide-y-4 lg:divide-x-4'>
        <div className='bg-secondary px-20 pb-16 pt-8 max-md:px-8 max-lg:bg-primary'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Inspector general</h2>
            <Image
              src='/welcome/image.png'
              width={75}
              height={100}
              className='rounded-2xl border-4'
              alt='Inspector de specialitate'
            />
          </div>
          <div className='pt-4'>
            <i className='fa fa-quote-left text-4xl text-black/80'></i>
            <p>
              Nunc neque, et tincidunt nibh vehicula accumsan. Suspendisse ipsum
              enim, pretium et neque vitae, ultrices sodales erat. Nam a
              ultricies urna. Nullam condimentum accumsan sapien, eu rutrum
              neque placerat id. In lacus est, porta nec aliquet at, dignissim
              quis leo. Donec vitae mauris nec felis venenatis euismod. Quisque
              at tempus urna. Vivamus est tellus, aliquet sed nibh eget, rutrum
              mattis urna. Integer efficitur sem at eleifend faucibus. Etiam
              lacinia ex id finibus condimentum. Morbi porttitor eros vitae erat
              condimentum feugiat. Proin dolor sem, varius eu rhoncus eget,
              cursus vitae risus. Vivamus enim tellus, pellentesque ac dignissim
              eu, rhoncus facilisis ex. Integer dictum, nibh vitae luctus
              finibus, ex ligula consectetur felis, nec ultricies risus elit
              vitae justo. Mauris posuere sit amet massa sollicitudin
              scelerisque. Vestibulum pharetra, augue sit amet ultricies dictum,
              turpis nisl finibus urna, eu varius eros lacus sed est. Duis
              pulvinar metus massa, consequat tempor massa scelerisque et.a,
              augue sit amet ultricies dictum, turpis nisl finibus urna, eu
              varius eros lacus sed est. Duis pulvinar metus massa, consequat
            </p>
          </div>
        </div>
        <div className='bg-primary px-20 pb-16 pt-8 max-md:px-8 max-lg:bg-secondary'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Inspector general</h2>
            <Image
              src='/welcome/image.png'
              width={75}
              height={100}
              className='rounded-2xl border-4'
              alt='Inspector de specialitate'
            />
          </div>
          <div className='pt-4'>
            <i className='fa fa-quote-left text-4xl text-black/80'></i>
            <p>
              Nunc neque, et tincidunt nibh vehicula accumsan. Suspendisse ipsum
              enim, pretium et neque vitae, ultrices sodales erat. Nam a
              ultricies urna. Nullam condimentum accumsan sapien, eu rutrum
              neque placerat id. In lacus est, porta nec aliquet at, dignissim
              quis leo. Donec vitae mauris nec felis venenatis euismod. Quisque
              at tempus urna. Vivamus est tellus, aliquet sed nibh eget, rutrum
              mattis urna. Integer efficitur sem at eleifend faucibus. Etiam
              lacinia ex id finibus condimentum. Morbi porttitor eros vitae erat
              condimentum feugiat. Proin dolor sem, varius eu rhoncus eget,
              cursus vitae risus. Vivamus enim tellus, pellentesque ac dignissim
              eu, rhoncus facilisis ex. Integer dictum, nibh vitae luctus
              finibus, ex ligula consectetur felis, nec ultricies risus elit
              vitae justo. Mauris posuere sit amet massa sollicitudin
              scelerisque. Vestibulum pharetra, augue sit amet ultricies dictum,
              turpis nisl finibus urna, eu varius eros lacus sed est. Duis
              pulvinar metus massa, consequat tempor massa scelerisque et.a,
              augue sit amet ultricies dictum, turpis nisl finibus urna, eu
              varius eros lacus sed est. Duis pulvinar metus massa, consequat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
