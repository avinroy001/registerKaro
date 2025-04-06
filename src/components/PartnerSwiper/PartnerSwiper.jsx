import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import goggle from "../../Assets/google.jpeg";
import hp from "../../Assets/hp.jpeg";
import huawei from "../../Assets/huawei.jpeg";
import lee from "../../Assets/lee.jpeg";
import mcdonalds from "../../Assets/mcDonald.jpeg";
import slack from "../../Assets/slack.jpeg";
import target from "../../Assets/target.jpeg";
import adobe from "../../Assets/adobe.jpeg";
import amazon from "../../Assets/amazon.jpeg";
import amd from "../../Assets/amd.jpeg";
import dell from "../../Assets/dell.jpeg";

import 'swiper/css';

const PartnerSwiper = () => {
  const logos = [
    { name: 'Google', image: goggle },
    { name: 'HP', image: hp },
    { name: 'Huawei', image: huawei },
    { name: 'Lee', image: lee },
    { name: "McDonald's", image: mcdonalds },
    { name: 'Slack', image: slack },
    { name: 'Target', image: target },
    { name: 'Adobe', image: adobe },
    { name: 'Amazon', image: amazon },
    { name: 'AMD', image: amd },
    { name: 'Dell', image: dell },
  ];

  return (
    <div className="bg-[#f3f6fd] py-20">
        <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          We <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">partner </span>
          with the best,
          <br />
          so that your business can flow <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">seamlessly.</span>
        </h2>
        <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto">
          Your Business needs numerous expertise and that’s why we are providing you the best services with the best names in the field.
        </p>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[...logos, ...logos].map((company, index) => (
          <SwiperSlide key={index} style={{ width: '120px', textAlign: 'center' }}>
            <div
              style={{
                background: '#fff',
                padding: '16px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80px',
              }}
            >
              <img
                src={company.image}
                alt={company.name}
                style={{ maxWidth: '100%', maxHeight: '50px', objectFit: 'contain' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSwiper;