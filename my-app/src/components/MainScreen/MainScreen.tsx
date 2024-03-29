import React from 'react';
import CurvedLineOne from '@/Images/CurvedLineOne.svg';
import CurvedLineTwo from '@/Images/CurvedLineTwo.svg';
import CurvedLineThree from '@/Images/CurvedLineThree.svg';
import CurvedLineFour from '@/Images/CurvedLineFour.svg';

import ArrowBtn from '@/Images/ArrowBtn.svg';

const MainScreen = () => {
  return (
    <>
      <section className='w-screen flex flex-col items-center overflow-hidden md:mt-[35px] lg:mt-[71px]'>
        <div className='z-10 flex flex-col items-center gap-3 mt-[15px]'>
          <h1 className='md:max-w-[1000px] max-w-[287px] text-[22px] leading-[26.4px] text-center font-Bold text-dark pl-2 md:text-[32px] md:leading-[36.4px] lg:text-[42px] lg:leading-[50.4px]'>
            <em className='text-blue not-italic underline underline-offset-4 decoration-[1.5px] lg:underline-offset-[8px]'>
              Создай ИИ-ассистента
            </em>{' '}
            для бизнеса
            <em className='font-Regular'> за 5 минут</em> без знаний
            программирования
          </h1>
          <p className='max-w-[300px] text-base text-center text-[16px] leading-[20.8px] font-Regular text-dark md:text-[20px] mm:max-w-[722px] mm:min-w-[300px] lg:text-[20px] lg:leading-[26px]'>
            Бот и ассистент на базе ChatGPT возьмет на себя до 100% рутинных
            задач. Заменит или разгрузит вашего администратора, консультанта,
            менеджера по продажам и др.
          </p>
        </div>

        <div className='md:flex-col-reverse relative flex flex-col items-center gap-6 pt-4 md:gap-10 lg:mt-[11px]'>
          <div className='z-10 w-[139px] h-[216px] bg-black opacity-5 md:w-[249px] md:h-[390px]'></div>
          <button className='z-10 w-[234px] h-[50px] flex flex-row items-center gap-2 rounded-[40px] bg-lime md:w-[280px]'>
            <p className='text-[14px] text-dark font-Medium ml-7 md:text-[18px]'>
              Создать ии-ассистента
            </p>
            <div className='flex items-center justify-center size-7 rounded-full bg-dark'>
              <img src={ArrowBtn.src} alt='ArrowBtn' />
            </div>
          </button>

          <div className='absolute z-0 flex justify-center items-center size-[335px] bg-outer rounded-full md:size-[485px] md:-top-10 lg:-top-[115px] md:bg-outer-md'>
            <div className='flex justify-center items-center size-[98%] bg-white rounded-full lg:size-[99%]'>
              <div className='size-[87%] bg-inner rounded-full md:bg-inner-reverse'></div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center mt-[24px] md:grid md:grid-cols-2 md:gap-x-4 xl:hidden'>
          {[
            'Общается как живой человек. Понимает, что пишет и говорит клиент',
            'Отвечает на типовые вопросы 24/7 на любом языке',
            'Собирает данные для оформления доставки, записи, бронирования и пр.',
            'Не требует зарплаты, не устает, не болеет, не ошибается, помогает продавать',
          ].map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center mt-[17px] relative md:mt-[20px]'
            >
              <div className='w-[260px] h-[52px] flex items-center justify-center text-center rounded-[10px] border-[1px]  border-cloud md:w-[334px] md:h-[67px]'>
                <p
                  className={`text-[12px] font-Regular ${
                    index === 1
                      ? 'max-w-[170px] md:max-w-[250px]'
                      : 'max-w-[240px] md:max-w-[320px]'
                  } md:text-[16px]`}
                >
                  {item}
                </p>
              </div>
              <div className='flex justify-center items-center size-4 rounded-full bg-cloud absolute -top-2'>
                <div className='size-2 rounded-full bg-blue'></div>
              </div>
            </div>
          ))}
        </div>

        <div className='hidden relative xl:flex flex-col items-center mt-[14px] md:grid md:grid-cols-2 md:gap-x-4'>
          {[
            'Общается как живой человек. Понимает, что пишет и говорит клиент',
            'Отвечает на типовые вопросы 24/7 на любом языке',
            'Собирает данные для оформления доставки, записи, бронирования и пр.',
            'Не требует зарплаты, не устает, не болеет, не ошибается, помогает продавать',
          ].map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center mt-[17px] md:mt-[20px]'
            >
              <div
                className={`absolute h-[67px]
                ${index === 0 ? 'w-[334px] -top-[433px] -left-[640px]' : ''}
                ${index === 1 ? 'w-[265px] -top-[310px] -left-[532px]' : ''}
                ${index === 2 ? 'w-[326px] -top-[433px] left-[307px]' : ''}
                ${index === 3 ? 'w-[354px] -top-[310px] left-[265px]' : ''}
                flex items-center pl-5 text-left rounded-[10px] border-[1px]  border-cloud`}
              >
                <p
                  className={`h-[42px] text-[16px] leading-[20.8px] font-Regular md:text-[16px]
                  ${index === 0 ? 'w-[307px]' : ' '}
                  ${index === 1 ? 'w-[247px]' : ' '}
                  ${index === 2 ? 'w-[306px]' : ' '}
                  ${index === 3 ? 'w-[324px]' : ' '}
                  `}
                >
                  {item}
                </p>
              </div>
              <div
                className={`
              ${index === 0 ? '-top-[412px] -left-[251px]' : ''}
              ${index === 1 ? '-top-[289px] -left-[228px]' : ''}
              ${index === 2 ? '-top-[410px] left-[230px]' : ''}
              ${index === 3 ? '-top-[289px] left-[207px]' : ''}
              flex justify-center items-center size-[21px] rounded-full bg-cloud absolute`}
              >
                <div className='size-[11px] rounded-full bg-blue'></div>
              </div>
              <div>
                <img
                  className='absolute z-20 -top-[100px] w-[66px] h-[14px]'
                  src={`
                ${index === 0 ? CurvedLineOne.src : ''}
                `}
                  alt='CurvedLineOne'
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainScreen;
