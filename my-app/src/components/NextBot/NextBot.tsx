import React from 'react';

const NextBot = () => {
  return (
    <section className='px-[10px] pt-20'>
      <h2 className='text-[22px] text-dark font-Regular text-center leading-[26.4px]'>
        В сервисе NextBot каждый может
        <span className='text-blue font-Bold'>
          {' '}
          легко и быстро,
          <br /> без специальных знаний
        </span>{' '}
        создать ИИ-бота для бизнеса
      </h2>
      <div className='flex flex-col items-center pt-[10px]'>
        <div className='border-b-[1px] rounded-[20px] border-blue pb-2 px-6'>
          <p className='text-base text-dark font-Regular text-center leading-[20.8px] w-[259px]'>
            Мы бесплатно научим, как правильно выставить настройки
            <br /> и какую инструкцию написать для бота, чтобы он отвечал
            корректно
          </p>
        </div>
        <div className='w-[1px] h-[67px] bg-blue relative'>
          <div className='trans bottom-[-15px] absolute w-4 h-4 flex justify-center items-center bg-cloud rounded-full'>
            <div className=' w-2 h-2 bg-blue rounded-full' />
          </div>
        </div>
      </div>
      <div className='pt-[14px]'>
        <p className=' text-[14px] text-dark font-Regular text-center leading-[18.2px] '>
          Посмотрите видео и за 5 минут сами убедитесь, что собрать ИИ-бота под{' '}
          <br /> силу каждому
        </p>
        <div className='bg-blue flex justify-center items-center rounded-[10px] h-[168px] mt-2'>
          <div className='w-[67px] h-[67px] flex justify-center items-center bg-cloud rounded-full pl-2'>
            <div
              className='relative w-0 h-0 rotate-90'
              style={{
                borderLeft: '15px solid transparent',
                borderRight: '15px solid transparent',
                borderBottom: '30px solid #CDFF65',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextBot;
