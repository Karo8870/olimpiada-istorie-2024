'use client';

import { useDisclosure } from '@nextui-org/react';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal';
import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';

export default function () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string[]>();

  return (
    <>
      <section id='cazare' className='flex w-full flex-col'>
        <SectionHeading>Cazare</SectionHeading>
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
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/soimul.jpeg?alt=media&token=701e8981-732c-4aff-bc2f-326e2f7171d9'
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
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/ana.jpeg?alt=media&token=3c69c56e-0cad-48d3-9783-81d153712fe5'
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
                        setContent(['BUCUREȘTI', 'VÂLCEA', 'HUNEDOARA']);
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
                src='https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/monterai.jpeg?alt=media&token=cc177b3e-3c60-4d5f-b2e7-1e1391ae3f64'
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
