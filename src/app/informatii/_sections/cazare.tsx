export default function () {
  return (
    <section className='flex w-full flex-col'>
      <div className='w-full bg-black py-8'>
        <h1 className='text-center text-[3rem] font-bold text-white'>Cazare</h1>
      </div>
      <div className='flex flex-col border-b-4 py-10 pl-20 md:px-8'>
        <h1 className='hidden text-[3rem] font-bold md:block'>Hotel Șoimul</h1>
        <div className='flex md:flex-col'>
          <div className='flex grow basis-0 flex-col gap-12 py-10'>
            <h1 className='text-[3rem] font-bold md:hidden'>Hotel Șoimul</h1>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
              <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[2rem] font-semibold'>Repartizare</h1>
                <div className='flex items-center gap-3'>
                  <i className='fa fa-file-lines fa-regular text-xl font-medium' />
                  <label className='text-base font-medium md:text-center'>
                    Județe repartizate
                  </label>
                  <i className='fa fa-arrow-right fa-regular text-xl font-medium' />
                </div>
              </div>
              <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[2rem] font-semibold'>Adresă</h1>
                <div className='flex flex-col'>
                  <label className='text-base font-medium md:text-center'>
                    Str. Valea Sticlăriei
                  </label>
                  <label className='text-base font-medium md:text-center'>
                    Cod poştal 500001
                  </label>
                  <label className='text-base font-medium md:text-center'>
                    Poiana Braşov, România
                  </label>
                </div>
              </div>
              <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[2rem] font-semibold'>Contact</h1>
                <div className='flex flex-col'>
                  <label className='text-base font-medium md:text-center'>
                    receptie@hotelsoimul.ro
                  </label>
                  <label className='text-base font-medium md:text-center'>
                    +40 766 622 474
                  </label>
                </div>
              </div>
              <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[2rem] font-semibold'>Website</h1>
                <div className='flex flex-col'>
                  <a
                    href='https://hotelsoimul.ro/'
                    className='text-base font-medium md:text-center'
                  >
                    https://hotelsoimul.ro/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='relative grow basis-0'>
            <SVG1 />
          </div>
        </div>
      </div>
      <div className='flex flex-col border-b-4 py-10 md:px-8'>
        <h1 className='hidden text-[3rem] font-bold md:block'>
          Ana Hotels Hotel Sport
        </h1>
        <div className='flex md:flex-col-reverse'>
          <div className='grow flex justify-center basis-0'>
            <img alt='ana hotels' src='/ana.png' className='object-cover border-4 border-black rounded-2xl h-full w-3/4 md:static' />
          </div>
          <div className='flex grow basis-0 flex-col gap-12 py-10'>
            <h1 className='text-[3rem] font-bold md:hidden'>
              Ana Hotels Hotel Poiana
            </h1>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
              <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[2rem] font-semibold'>Repartizare</h1>
                <div className='flex items-center gap-3'>
                  <i className='fa fa-file-lines fa-regular text-xl font-medium' />
                  <label className='text-base font-medium md:text-center'>
                    Județe repartizate
                  </label>
                  <i className='fa fa-arrow-right fa-regular text-xl font-medium' />
                </div>
              </div>
              <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[2rem] font-semibold'>Adresă</h1>
                <div className='flex flex-col'>
                  <label className='text-base font-medium md:text-center'>
                    Strada Valea Dragă
                  </label>
                  <label className='text-base font-medium md:text-center'>
                    Cod poştal 500001
                  </label>
                  <label className='text-base font-medium md:text-center'>
                    Poiana Braşov, România
                  </label>
                </div>
              </div>
              <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[2rem] font-semibold'>Contact</h1>
                <div className='flex flex-col'>
                  <label className='text-base font-medium md:text-center'>
                    reservation-hotelpoiana@anahotels.ro
                  </label>
                  <label className='text-base font-medium md:text-center'>
                    +40 268 407 330
                  </label>
                </div>
              </div>
              <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[2rem] font-semibold'>Website</h1>
                <div className='flex flex-col'>
                  <a
                    href='https://www.anahotels.ro/ro/poiana'
                    className='text-base font-medium md:text-center'
                  >
                    https://www.anahotels.ro/ro/poiana
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SVG1 = () => (
  <svg
    className='absolute h-full w-full md:static'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='694'
    height='524'
    viewBox='0 0 694 524'
    fill='none'
  >
    <rect
      x='83.5'
      y='68.5'
      width='539'
      height='403'
      rx='17.5'
      fill='url(#pattern0_218_30)'
      stroke='black'
      strokeWidth='5'
    />
    <defs>
      <pattern
        id='pattern0_218_30'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <use
          xlinkHref='#image0_218_30'
          transform='matrix(0.0010981 0 0 0.00146413 -0.0622255 0)'
        />
      </pattern>
      <clipPath id='clip0_218_30'>
        <rect
          width='43'
          height='68.1358'
          fill='white'
          transform='translate(652.766 445) rotate(19.5206)'
        />
      </clipPath>
      <image
        id='image0_218_30'
        width='1024'
        height='683'
        xlinkHref='soimul.png'
      />
    </defs>
  </svg>
);

const SVG2 = () => (
  <svg
    className='absolute h-full w-full md:static'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='694'
    height='524'
    viewBox='0 0 694 524'
    fill='none'
  >
    <rect
      x='83.5'
      y='68.5'
      width='539'
      height='403'
      rx='17.5'
      fill='url(#pattern0_218_31)'
      stroke='black'
      strokeWidth='5'
    />
    <defs>
      <pattern
        id='pattern0_218_31'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <use
          xlinkHref='#image0_218_31'
          transform='matrix(0.0010981 0 0 0.00146413 -0.0622255 0)'
        />
      </pattern>
      <clipPath id='clip0_218_31'>
        <rect
          width='43'
          height='68.1358'
          fill='white'
          transform='translate(652.766 445) rotate(19.5206)'
        />
      </clipPath>
      <image id='image0_218_31' width='1024' height='683' xlinkHref='ana.png' />
    </defs>
  </svg>
);
