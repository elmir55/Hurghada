import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import app1 from '../../shared/assets/app1.svg';
import app2 from '../../shared/assets/app2.svg';
import app3 from '../../shared/assets/app3.svg';
import app4 from '../../shared/assets/app4.svg';
import app5 from '../../shared/assets/app5.svg';
import app6 from '../../shared/assets/app6.svg';
import app7 from '../../shared/assets/app7.svg';
import app8 from '../../shared/assets/app8.svg';
import app9 from '../../shared/assets/app9.svg';
import app10 from '../../shared/assets/app10.svg';
import app11 from '../../shared/assets/app11.svg';
import app12 from '../../shared/assets/app12.svg';
import app13 from '../../shared/assets/app13.svg';
import app14 from '../../shared/assets/app14.svg';

export function Block5() { 
  
  const apps = [
    { src: app1, link: 'https://app1-hurghada.com' },
    { src: app2, link: 'https://app2-hurghada.com' },
    { src: app3, link: 'https://app3-hurghada.com' },
    { src: app4, link: 'https://app4-hurghada.com' },
    { src: app5, link: 'https://app5-hurghada.com' },
    { src: app6, link: 'https://app6-hurghada.com' },
    { src: app7, link: 'https://app7-hurghada.com' },
    { src: app8, link: 'https://app8-hurghada.com' },
    { src: app9, link: 'https://app9-hurghada.com' },
    { src: app10, link: 'https://app10-hurghada.com' },
    { src: app11, link: 'https://app11-hurghada.com' },
    { src: app12, link: 'https://app12-hurghada.com' },
    { src: app13, link: 'https://app13-hurghada.com' },
    { src: app14, link: 'https://app14-hurghada.com' },
  ];

  return (
    <div className="w-full max-w-screen-2xl mx-auto overflow-hidden py-6">
      <h1 className="text-start text-5xl ml-3 font-bold mb-20">OUR PARTNERS</h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        slidesPerView="auto"
        spaceBetween={20}
        className="h-40"
      >
        {apps.map((app, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              <img src={app.src} alt={`App ${index + 1}`} className="h-32 object-contain" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        loop={true}
        slidesPerView="auto"
        spaceBetween={20}
        className="h-40 mt-5"
      >
        {apps.map((app, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              <img src={app.src} alt={`App ${index + 1}`} className="h-32 object-contain" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

