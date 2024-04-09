export default function Brasov() {
  return (
    <section className='flex items-center border-b-4 px-16 py-8 max-md:px-4 md:flex-col-reverse md:px-4'>
      <div className='flex w-1/2 pr-20 md:w-full md:pr-0'>
        <SVG />
      </div>
      <div className='w-1/2 md:w-full'>
        <h1 className='text-5xl font-bold md:text-center'>Despre Brașov</h1>
        <p className='pt-16 md:px-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          massa sagittis, ultricies tellus vitae, sodales nunc. Morbi semper
          scelerisque condimentum. Phasellus luctus lacus nec dolor fermentum
          rhoncus. Sed at dolor justo.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Quisque id massa sagittis, ultricies tellus vitae,
          sodales nunc. Morbi semper scelerisque condimentum. Phasellus luctus
          lacus nec dolor fermentum rhoncus. Sed at dolor justo.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Quisque id massa
          sagittis, ultricies tellus vitae, sodales nunc. Morbi semper
          scelerisque condimentum. Phasellus luctus lacus nec dolor fermentum
          rhoncus. Sed at dolor justo.
        </p>
      </div>
    </section>
  );
}

const SVG = () => (
  <svg
    className='h-full w-full'
    xmlns='http://www.w3.org/2000/svg'
    width='704'
    height='544'
    viewBox='0 0 704 544'
    fill='none'
  >
    <rect
      x='93.5'
      y='88.5'
      width='539'
      height='403'
      rx='17.5'
      fill='url(#pattern0)'
      stroke='black'
      strokeWidth='5'
    />
    <defs>
      <pattern
        id='pattern0'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <use
          xlinkHref='#image0_167_30'
          transform='scale(0.000248016 0.000330688)'
        />
      </pattern>
      <clipPath id='clip0_167_30'>
        <rect
          width='43'
          height='68.1358'
          fill='white'
          fillOpacity='1'
          transform='translate(662.768 465) rotate(19.5206)'
        />
      </clipPath>
      <clipPath id='clip1_167_30'>
        <rect
          width='100'
          height='141'
          fill='white'
          fillOpacity='1'
          transform='translate(163.994 113.747) rotate(143.776)'
        />
      </clipPath>
      <image
        id='image0_167_30'
        width='4032'
        height='3024'
        xlinkHref='brasov2.png'
      />
    </defs>
  </svg>
);
