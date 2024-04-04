'use client';

export default function Saguna() {
  return (
    <section className='flex flex-col items-center justify-center bg-primary py-16'>
      <h1 className='pb-12 text-center text-5xl font-bold sm:text-3xl'>
        Despre Colegiul Național „Andrei Șaguna”
      </h1>
      <iframe
        className='h-[562.5px] w-[1000px] md:h-[168.75px] md:w-[300px]'
        width='1000'
        height='562.5'
        src='https://www.youtube.com/embed/zyFBEzmkn34?si=LD7O8i0OppK6urvN'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <p className='w-3/5 pt-8 text-center sm:w-auto sm:px-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
        massa sagittis, ultricies tellus vitae, sodales nunc. Morbi semper
        scelerisque condimentum. Phasellus luctus lacus nec dolor fermentum
        rhoncus. Sed at dolor justo.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque id massa sagittis, ultricies tellus vitae,
        sodales nunc. Morbi semper scelerisque condimentum. Phasellus luctus
        lacus nec dolor fermentum rhoncus. Sed at dolor justo.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Quisque id massa sagittis,
        ultricies tellus vitae, sodales nunc. Morbi semper scelerisque
        condimentum. Phasellus luctus lacus nec dolor fermentum rhoncus. Sed at
        dolor justo.
      </p>
    </section>
  );
}
