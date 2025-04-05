import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';
import { FaLinkedin, FaGoogle, FaTwitter } from 'react-icons/fa';

const slides = [
  {
    name: 'Alice Johnson',
    platform: 'LinkedIn',
    icon: <FaLinkedin className="text-blue-600 mr-2" />,
    description: "I had an amazing experience with RegisterKaro for my Trademark Renewal. The process was seamless, and their team guided me at every step. I didn't have to worry about paperwork or deadlines—they handled everything efficiently. Highly recommend their services!",
  },
  {
    name: 'Rahul Sharma',
    platform: 'Google',
    icon: <FaGoogle className="text-red-500 mr-2" />,
    description: "Team Register Karo helped our company incorporated into MCA. Team was very professional and cooperative.Response to all our doubts were cleared well. I would like to thank Mr.Bhuvan & Register Karo Team. I would like to thank Mr.Bhuvan & Register Karo Team.",
  },
  {
    name: 'Neha Verma',
    platform: 'Twitter',
    icon: <FaTwitter className="text-blue-400 mr-2" />,
    description: "One of my friend suggested me to go with RegisterKaro in for my Company Registration. I have no idea about Company registration process, documents required and other details involved. RegisterKaro Team guided me very well during my Pvt Ltd Company registration.",
  },
];

export default function ClientFeedback() {
  return (
    <div className="w-full py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6">Client Feedback</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between h-full text-gray-800">
              
              <p className="text-sm text-gray-500 mb-4 flex items-center">
                {slide.icon}
                <span>Posted on {slide.platform}</span>
              </p>

              <p className="text-base text-center flex-1">{slide.description}</p>

              <div className="flex flex-col items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-1">
                  {slide.name.charAt(0)}
                </div>
                <p className="text-sm">{slide.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
