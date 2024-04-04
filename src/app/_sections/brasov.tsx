export default function Brasov() {
  return (
    <section className='flex items-center border-b-4 px-16 py-40 py-8 max-md:px-4 md:flex-col-reverse md:px-4'>
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
    <g clipPath='url(#clip0_167_30)'>
      <path
        d='M682.382 472.694C681.439 472.803 680.553 473.255 679.883 473.969C679.212 474.683 678.801 475.612 678.721 476.592C678.642 477.572 678.899 478.539 679.448 479.32C679.998 480.102 680.802 480.647 681.72 480.859C684.629 481.519 687.282 484.055 688.645 487.478C689.781 490.331 689.793 493.296 688.68 495.208C687.951 496.45 684.991 496.672 682.145 496.869C677.029 497.247 670.023 497.767 666.276 504.806C662.603 511.709 667.285 518.215 670.691 522.977C671.987 524.779 674.396 528.127 674.226 529.196C674.125 529.339 674.006 529.467 673.871 529.575C670.764 532.255 660.748 529.195 649.358 519.434C648.554 518.752 647.511 518.436 646.459 518.556C645.407 518.676 644.43 519.222 643.743 520.075C643.056 520.927 642.714 522.017 642.793 523.106C642.871 524.194 643.363 525.193 644.161 525.883C648.037 529.208 667.939 545.304 678.869 535.87C681.977 533.184 682.959 529.526 681.64 525.569C680.753 522.912 678.916 520.362 677.145 517.897C674.152 513.763 672.142 510.675 673.225 508.646C674.64 505.991 677.243 505.526 682.454 505.137C686.943 504.809 692.524 504.392 695.476 499.328C697.962 495.116 698.154 489.421 696.053 484.131C693.713 478.254 689.089 474.013 683.687 472.774C683.261 472.673 682.821 472.646 682.382 472.694Z'
        fill='black'
      />
    </g>
    <g clipPath='url(#clip1_167_30)'>
      <path
        d='M118.634 52.854C118.985 52.9138 119.314 53.0676 119.585 53.2993C119.856 53.5309 120.06 53.8317 120.174 54.1699C120.289 54.5081 120.31 54.8711 120.236 55.2205C120.162 55.57 119.995 55.8929 119.752 56.1552C114.302 62.0587 103.178 62.8049 87.7793 63.8401C84.9489 64.0282 82.0117 64.2238 78.9467 64.4634C71.0277 65.0807 64.8593 67.5727 60.5868 71.8679C56.6049 75.8689 55.6265 80.1321 55.4212 81.3443C54.4199 87.2658 57.2007 90.5051 60.1479 93.9354C62.5657 96.7491 65.0661 99.6597 64.8112 103.827C64.5079 108.806 61.0399 112.179 57.9797 115.162C55.7613 117.328 53.6796 119.359 53.4112 121.459C52.8424 126.071 55.118 128.052 60.6091 132.837L61.8675 133.937C62.2621 134.285 62.5025 134.775 62.5359 135.301C62.5696 135.826 62.3934 136.343 62.0465 136.739C61.6996 137.134 61.21 137.376 60.6857 137.41C60.1615 137.444 59.6454 137.268 59.2511 136.92L58.0012 135.831C52.3728 130.922 48.6514 127.686 49.476 120.973C49.9032 117.485 52.6056 114.857 55.2172 112.316C57.9999 109.598 60.6426 107.035 60.8534 103.59C61.0091 101.021 59.3004 99.034 57.1407 96.5179C54.0474 92.9165 50.1972 88.4336 51.5128 80.677C51.8387 78.7486 53.1067 73.7489 57.7796 69.0599C62.7408 64.0773 69.7582 61.1971 78.6386 60.5034C81.7338 60.2605 84.6712 60.0627 87.5126 59.8722C101.454 58.9377 112.465 58.1978 116.845 53.4533C117.07 53.2118 117.351 53.0305 117.663 52.9258C117.976 52.8211 118.309 52.7964 118.634 52.854Z'
        fill='black'
        stroke='black'
        strokeWidth='4'
      />
    </g>
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
