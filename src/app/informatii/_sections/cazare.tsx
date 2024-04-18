'use client';

import { useDisclosure } from '@nextui-org/react';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal';
import { useState } from 'react';

export default function () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string[]>();

  return (
    <>
      <section id='cazare' className='flex w-full flex-col'>
        <div className='w-full bg-black py-8 sm:py-6'>
          <h1 className='text-center text-[3rem] font-bold text-white sm:text-2xl'>
            Cazare
          </h1>
        </div>
        <div className='flex flex-col border-b-4 py-10 pl-20 md:px-8'>
          <h1 className='hidden self-center text-[2rem] font-bold md:block'>
            Hotel ȘOIMUL
          </h1>
          <div className='flex md:flex-col'>
            <div className='flex grow basis-0 flex-col gap-12 py-10'>
              <h1 className='text-[3rem] font-bold md:hidden'>Hotel ȘOIMUL</h1>
              <div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
                <div className='flex flex-col items-start md:items-center'>
                  <h1 className='text-[1.5rem] font-semibold'>Repartizare</h1>
                  <div className='flex items-center gap-3'>
                    <i className='fa fa-file-lines fa-regular text-xl font-medium' />
                    <label
                      onClick={() => {
                        setTitle('Județe repartizate Hotel ȘOIMUL');
                        setContent([
                          'ALBA',
                          'ARAD',
                          'ARGEȘ',
                          'BACĂU',
                          'BIHOR',
                          'BISTRIȚA NĂSĂUD',
                          'BOTOȘANI',
                          'BRAȘOV',
                          'BRĂILA',
                          'BUZĂU',
                          'CARAȘ SEVERIN',
                          'CĂLĂRAȘI',
                          'CLUJ',
                          'CONSTANȚA',
                          'DÂMBOVIȚA',
                          'DOLJ',
                          'GALAȚI',
                          'HARGHITA',
                          'IALOMIȚA',
                          'IAȘI',
                          'ILFOV',
                          'MARAMUREȘ',
                          'MEHEDINȚI',
                          'MUREȘ',
                          'NEAMȚ',
                          'OLT',
                          'PRAHOVA',
                          'SATU MARE',
                          'SĂLAJ',
                          'SIBIU',
                          'TELEORMAN',
                          'TIMIȘ',
                          'VASLUI',
                          'VRANCEA'
                        ]);
                        onOpen();
                      }}
                      className='cursor-pointer text-base font-medium md:text-center'
                    >
                      Județe repartizate
                    </label>
                    <i className='fa fa-arrow-right fa-regular text-xl font-medium' />
                  </div>
                </div>
                <div className='flex flex-col items-start md:items-center'>
                  <h1 className='text-[1.5rem] font-semibold'>Adresă</h1>
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
                  <h1 className='text-[1.5rem] font-semibold'>Contact</h1>
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
                  <h1 className='text-[1.5rem] font-semibold'>Website</h1>
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
            <div className='flex grow basis-0 justify-center'>
              <img
                alt='hotel soimul'
                src='/soimul.png'
                className='aspect-video h-full w-3/4 rounded-2xl border-4 border-black object-cover md:static'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col border-b-4 py-10 md:px-8'>
          <h1 className='hidden self-center text-center text-[2rem] font-bold md:block'>
            Hotel ANA HOTELS POIANA
          </h1>
          <div className='flex md:flex-col-reverse'>
            <div className='flex grow basis-0 justify-center'>
              <img
                alt='ana hotels'
                src='/ana.png'
                className='aspect-video h-full w-3/4 rounded-2xl border-4 border-black object-cover md:static'
              />
            </div>
            <div className='flex grow basis-0 flex-col gap-12 py-10'>
              <h1 className='text-[3rem] font-bold md:hidden'>
                Hotel ANA HOTELS POIANA
              </h1>
              <div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
                <div className='flex flex-col items-start md:items-center'>
                  <h1 className='text-[1.5rem] font-semibold'>Repartizare</h1>
                  <div className='flex items-center gap-3'>
                    <i className='fa fa-file-lines fa-regular text-xl font-medium' />
                    <label
                      onClick={() => {
                        setTitle('Județe repartizate Hotel ANA HOTELS POIANA');
                        setContent([
                          'COMISIA CENTRALĂ',
                          'BUCUREȘTI',
                          'VÂLCEA',
                          'HUNEDOARA'
                        ]);
                        onOpen();
                      }}
                      className='cursor-pointer text-base font-medium md:text-center'
                    >
                      Județe repartizate
                    </label>
                    <i className='fa fa-arrow-right fa-regular text-xl font-medium' />
                  </div>
                </div>
                <div className='flex flex-col items-start md:items-center'>
                  <h1 className='text-[1.5rem] font-semibold'>Adresă</h1>
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
                  <h1 className='text-[1.5rem] font-semibold'>Contact</h1>
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
                  <h1 className='text-[1.5rem] font-semibold'>Website</h1>
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
        <div className='flex flex-col border-b-4 py-10 pl-20 md:px-8'>
          <h1 className='hidden self-center text-[2rem] font-bold md:block'>
            MONTERAI RESORT
          </h1>
          <div className='flex md:flex-col'>
            <div className='flex grow basis-0 flex-col gap-12 py-10'>
              <h1 className='text-[3rem] font-bold md:hidden'>
                MONTERAI RESORT
              </h1>
              <div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
                <div className='flex flex-col items-start md:items-center'>
                  <h1 className='text-[1.5rem] font-semibold'>Repartizare</h1>
                  <div className='flex items-center gap-3'>
                    <i className='fa fa-file-lines fa-regular text-xl font-medium' />
                    <label
                      onClick={() => {
                        setTitle('Județe repartizate MONTERAI RESORT');
                        setContent(['GORJ', 'COVASNA', 'TULCEA', 'SUCEAVA']);
                        onOpen();
                      }}
                      className='cursor-pointer text-base font-medium md:text-center'
                    >
                      Județe repartizate
                    </label>
                    <i className='fa fa-arrow-right fa-regular text-xl font-medium' />
                  </div>
                </div>
                <div className='flex flex-col items-start md:items-center'>
                  <h1 className='text-[1.5rem] font-semibold'>Adresă</h1>
                  <div className='flex flex-col'>
                    <label className='text-base font-medium md:text-center'>
                      Str. Poiana Soarelui nr. 2
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
                  <h1 className='text-[1.5rem] font-semibold'>Contact</h1>
                  <div className='flex flex-col'>
                    <label className='text-base font-medium md:text-center'>
                      office@monterai.ro
                    </label>
                    <label className='text-base font-medium md:text-center'>
                      +40 746 181 009
                    </label>
                  </div>
                </div>
                <div className='flex flex-col items-start md:items-center'>
                  <h1 className='text-[1.5rem] font-semibold'>Website</h1>
                  <div className='flex flex-col'>
                    <a
                      href='https://monterai.ro/'
                      className='text-base font-medium md:text-center'
                    >
                      https://monterai.ro/
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex grow basis-0 justify-center'>
              <img
                alt='monterai resort'
                src='/monterai.png'
                className='aspect-video h-full w-3/4 rounded-2xl border-4 border-black object-cover md:static'
              />
            </div>
          </div>
        </div>
      </section>
      <Modal
        placement='center'
        scrollBehavior='inside'
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody className='pb-10'>
                {content?.map((item, index) => (
                  <label key={index} className='text-base font-medium'>
                    {item}
                  </label>
                ))}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
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
