export default function () {
  return (
    <section className='flex w-full flex-col'>
      <div className='w-full bg-black py-8'>
        <h1 className='text-center text-[3rem] font-bold text-white'>Cazare</h1>
      </div>
      <div className='flex border-b-4 py-10 pl-20'>
        <div className='flex grow basis-0 flex-col gap-12 py-10'>
          <h1 className='text-[3rem] font-bold'>Hotel Șoimul</h1>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col items-start'>
              <h1 className='text-[2rem] font-semibold'>Repartizare</h1>
              <div className='flex items-center gap-3'>
                <i className='fa fa-file-lines fa-regular text-xl font-medium' />
                <label className='text-base font-medium'>
                  Județe repartizate
                </label>
                <i className='fa fa-arrow-right fa-regular text-xl font-medium' />
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[2rem] font-semibold'>Adresă</h1>
              <div className='flex flex-col'>
                <label className='text-base font-medium'>
                  Str. Valea Sticlăriei
                </label>
                <label className='text-base font-medium'>
                  Cod poştal 500001
                </label>
                <label className='text-base font-medium'>
                  Poiana Braşov, România
                </label>
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[2rem] font-semibold'>Contact</h1>
              <div className='flex flex-col'>
                <label className='text-base font-medium'>
                  receptie@hotelsoimul.ro
                </label>
                <label className='text-base font-medium'>+40 766 622 474</label>
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[2rem] font-semibold'>Website</h1>
              <div className='flex flex-col'>
                <a
                  href='https://hotelsoimul.ro/'
                  className='text-base font-medium'
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
      <div className='flex py-10 pr-20'>
        <div className='relative grow basis-0'>
          <SVG2 />
        </div>
        <div className='flex grow basis-0 flex-col gap-12 py-10'>
          <h1 className='text-[3rem] font-bold'>Ana Hotels Hotel Sport</h1>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col items-start'>
              <h1 className='text-[2rem] font-semibold'>Repartizare</h1>
              <div className='flex items-center gap-3'>
                <i className='fa fa-file-lines fa-regular text-xl font-medium' />
                <label className='text-base font-medium'>
                  Județe repartizate
                </label>
                <i className='fa fa-arrow-right fa-regular text-xl font-medium' />
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[2rem] font-semibold'>Adresă</h1>
              <div className='flex flex-col'>
                <label className='text-base font-medium'>
                  Str. Valea Sticlăriei
                </label>
                <label className='text-base font-medium'>
                  Cod poştal 500001
                </label>
                <label className='text-base font-medium'>
                  Poiana Braşov, România
                </label>
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[2rem] font-semibold'>Contact</h1>
              <div className='flex flex-col'>
                <label className='text-base font-medium'>
                  receptie@hotelsoimul.ro
                </label>
                <label className='text-base font-medium'>+40 766 622 474</label>
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[2rem] font-semibold'>Website</h1>
              <div className='flex flex-col'>
                <a
                  href='https://hotelsoimul.ro/'
                  className='text-base font-medium'
                >
                  https://hotelsoimul.ro/
                </a>
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
    className='absolute h-full w-full'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='694'
    height='524'
    viewBox='0 0 694 524'
    fill='none'
  >
    <g clipPath='url(#clip0_218_30)'>
      <path
        d='M672.38 452.694C671.437 452.803 670.551 453.255 669.881 453.969C669.211 454.683 668.799 455.612 668.719 456.592C668.64 457.572 668.897 458.539 669.447 459.32C669.996 460.102 670.8 460.647 671.718 460.859C674.627 461.519 677.28 464.055 678.643 467.478C679.779 470.331 679.791 473.296 678.678 475.208C677.949 476.45 674.989 476.672 672.143 476.869C667.027 477.247 660.021 477.767 656.274 484.806C652.601 491.709 657.283 498.215 660.689 502.977C661.985 504.779 664.394 508.127 664.224 509.196C664.123 509.339 664.004 509.467 663.869 509.575C660.762 512.255 650.746 509.195 639.356 499.434C638.552 498.752 637.509 498.436 636.457 498.556C635.405 498.676 634.428 499.222 633.741 500.075C633.054 500.927 632.712 502.017 632.791 503.106C632.869 504.194 633.361 505.193 634.159 505.883C638.035 509.208 657.937 525.304 668.867 515.87C671.975 513.184 672.957 509.526 671.638 505.569C670.751 502.912 668.914 500.362 667.143 497.897C664.151 493.763 662.14 490.675 663.223 488.646C664.638 485.991 667.241 485.526 672.452 485.137C676.941 484.809 682.522 484.392 685.474 479.328C687.96 475.116 688.152 469.421 686.051 464.131C683.711 458.254 679.087 454.013 673.685 452.774C673.259 452.673 672.819 452.646 672.38 452.694Z'
        fill='black'
      />
    </g>
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
    <path
      d='M93.8603 24.0151C94.2117 24.0906 94.5403 24.2847 94.8115 24.5768C95.0827 24.869 95.2864 25.2484 95.401 25.675C95.5156 26.1016 95.5369 26.5594 95.4626 27.0002C95.3883 27.441 95.2213 27.8483 94.979 28.1792C89.5285 35.6257 78.4047 36.5669 63.0059 37.8726C60.1754 38.1098 57.2383 38.3566 54.1732 38.6587C46.2543 39.4375 40.0859 42.5808 35.8134 47.9984C31.8315 53.0451 30.8531 58.4226 30.6478 59.9516C29.6465 67.4207 32.4273 71.5066 35.3745 75.8335C37.7923 79.3826 40.2927 83.0539 40.0378 88.3108C39.7344 94.5908 36.2664 98.8445 33.2063 102.608C30.9878 105.34 28.9061 107.902 28.6378 110.55C28.0689 116.368 30.3446 118.866 35.8356 124.903L37.0941 126.29C37.4887 126.728 37.729 127.347 37.7624 128.01C37.7961 128.672 37.6199 129.325 37.2731 129.824C36.9262 130.323 36.4365 130.627 35.9123 130.67C35.3881 130.713 34.872 130.491 34.4777 130.053L33.2277 128.678C27.5993 122.486 23.878 118.406 24.7026 109.938C25.1298 105.537 27.8321 102.223 30.4437 99.0175C33.2265 95.5897 35.8691 92.3562 36.08 88.0111C36.2357 84.7704 34.5269 82.2646 32.3673 79.0909C29.274 74.5482 25.4237 68.8938 26.7394 59.1099C27.0652 56.6775 28.3333 50.3711 33.0061 44.4566C37.9674 38.1718 44.9848 34.5388 53.8651 33.6638C56.9604 33.3575 59.8978 33.1079 62.7391 32.8676C76.6805 31.6889 87.6912 30.7556 92.0714 24.7711C92.2961 24.4665 92.5776 24.2378 92.89 24.1058C93.2025 23.9737 93.536 23.9426 93.8603 24.0151Z'
      fill='black'
      stroke='black'
      strokeWidth='4'
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
    className='absolute h-full w-full'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='694'
    height='524'
    viewBox='0 0 694 524'
    fill='none'
  >
    <g clipPath='url(#clip0_218_31)'>
      <path
        d='M672.38 452.694C671.437 452.803 670.551 453.255 669.881 453.969C669.211 454.683 668.799 455.612 668.719 456.592C668.64 457.572 668.897 458.539 669.447 459.32C669.996 460.102 670.8 460.647 671.718 460.859C674.627 461.519 677.28 464.055 678.643 467.478C679.779 470.331 679.791 473.296 678.678 475.208C677.949 476.45 674.989 476.672 672.143 476.869C667.027 477.247 660.021 477.767 656.274 484.806C652.601 491.709 657.283 498.215 660.689 502.977C661.985 504.779 664.394 508.127 664.224 509.196C664.123 509.339 664.004 509.467 663.869 509.575C660.762 512.255 650.746 509.195 639.356 499.434C638.552 498.752 637.509 498.436 636.457 498.556C635.405 498.676 634.428 499.222 633.741 500.075C633.054 500.927 632.712 502.017 632.791 503.106C632.869 504.194 633.361 505.193 634.159 505.883C638.035 509.208 657.937 525.304 668.867 515.87C671.975 513.184 672.957 509.526 671.638 505.569C670.751 502.912 668.914 500.362 667.143 497.897C664.151 493.763 662.14 490.675 663.223 488.646C664.638 485.991 667.241 485.526 672.452 485.137C676.941 484.809 682.522 484.392 685.474 479.328C687.96 475.116 688.152 469.421 686.051 464.131C683.711 458.254 679.087 454.013 673.685 452.774C673.259 452.673 672.819 452.646 672.38 452.694Z'
        fill='black'
      />
    </g>
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
    <path
      d='M93.8603 24.0151C94.2117 24.0906 94.5403 24.2847 94.8115 24.5768C95.0827 24.869 95.2864 25.2484 95.401 25.675C95.5156 26.1016 95.5369 26.5594 95.4626 27.0002C95.3883 27.441 95.2213 27.8483 94.979 28.1792C89.5285 35.6257 78.4047 36.5669 63.0059 37.8726C60.1754 38.1098 57.2383 38.3566 54.1732 38.6587C46.2543 39.4375 40.0859 42.5808 35.8134 47.9984C31.8315 53.0451 30.8531 58.4226 30.6478 59.9516C29.6465 67.4207 32.4273 71.5066 35.3745 75.8335C37.7923 79.3826 40.2927 83.0539 40.0378 88.3108C39.7344 94.5908 36.2664 98.8445 33.2063 102.608C30.9878 105.34 28.9061 107.902 28.6378 110.55C28.0689 116.368 30.3446 118.866 35.8356 124.903L37.0941 126.29C37.4887 126.728 37.729 127.347 37.7624 128.01C37.7961 128.672 37.6199 129.325 37.2731 129.824C36.9262 130.323 36.4365 130.627 35.9123 130.67C35.3881 130.713 34.872 130.491 34.4777 130.053L33.2277 128.678C27.5993 122.486 23.878 118.406 24.7026 109.938C25.1298 105.537 27.8321 102.223 30.4437 99.0175C33.2265 95.5897 35.8691 92.3562 36.08 88.0111C36.2357 84.7704 34.5269 82.2646 32.3673 79.0909C29.274 74.5482 25.4237 68.8938 26.7394 59.1099C27.0652 56.6775 28.3333 50.3711 33.0061 44.4566C37.9674 38.1718 44.9848 34.5388 53.8651 33.6638C56.9604 33.3575 59.8978 33.1079 62.7391 32.8676C76.6805 31.6889 87.6912 30.7556 92.0714 24.7711C92.2961 24.4665 92.5776 24.2378 92.89 24.1058C93.2025 23.9737 93.536 23.9426 93.8603 24.0151Z'
      fill='black'
      stroke='black'
      strokeWidth='4'
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
