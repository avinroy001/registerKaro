import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import { FaLinkedin, FaGoogle, FaTwitter } from "react-icons/fa";

const slides = [
  {
    name: "Alice Johnson",
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-blue-600 mr-3 text-5xl" />,
    description:
      "I had an amazing experience with RegisterKaro for my Trademark Renewal. The process was seamless, and their team guided me at every step. I didn't have to worry about paperwork or deadlines—they handled everything efficiently. Highly recommend their services!",
  },
  {
    name: "Rahul Sharma",
    platform: "Google",
    icon: <FaGoogle className="text-red-500 mr-3 text-5xl" />,
    description:
      "Team Register Karo helped our company incorporated into MCA. Team was very professional and cooperative.Response to all our doubts were cleared well. I would like to thank Mr.Bhuvan & Register Karo Team. I would like to thank Mr.Bhuvan & Register Karo Team.",
  },
  {
    name: "Neha Verma",
    platform: "Twitter",
    icon: <FaTwitter className="text-blue-400 mr-3 text-5xl" />,
    description:
      "One of my friend suggested me to go with RegisterKaro in for my Company Registration. I have no idea about Company registration process, documents required and other details involved. RegisterKaro Team guided me very well during my Pvt Ltd Company registration.",
  },
  {
    name: "Ritesh Kumar",
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-blue-600 mr-3 text-5xl" />,
    description:
      "There was a bit of to and fro but the RegisterKaro team kept me updated on the whole process. Special shout out to Joel for being so helpful!. Overall, I'm very pleased with the service and would definitely recommend it to anyone who's looking for an easy way to register a business.Onwards and upwards!",
  },
  {
    name: "Vijayendra Mudigal",
    platform: "Google",
    icon: <FaGoogle className="text-red-500 mr-3 text-5xl" />,
    description:
      "I got my LLP registered through RegisterKaro. Really an amazing team to work along. Thank a lot to Bhuvan, Sidharth and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLP agreement multiple times without hesitation.",
  },
  {
    name: "Muruganandan Palanisamy",
    platform: "Twitter",
    icon: <FaTwitter className="text-blue-400 mr-3 text-5xl" />,
    description:
      "Professional, Very Professional Service...Am glad to work with RegisterKaro and they made the company registration process hassle free. Appreciate their service. Go easy and approachable by anytime, will work with them near future again. Go easy and approachable by anytime, will work with them near future again.",
  },
  {
    name: "Pradeep Talan",
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-blue-600 mr-3 text-5xl" />,
    description:
      "Satisfied with their service, got my company registration done within 10 days. If you have all documents required for company registration and active on WhatsApp then you don't have to wait for a long. They created a dedicated WhatsApp group where all their team members were active to help me to complete my documents and registration process.",
  },
  {
    name: "Rohan Mehta",
    platform: "Google",
    icon: <FaGoogle className="text-red-500 mr-3 text-5xl" />,
    description:
      "I had an amazing experience with RegisterKaro for my Trademark Renewal. The process was seamless, and their team guided me at every step. I didn't have to worry about paperwork or deadlines—they handled everything efficiently. Highly recommend their services!",
  },
  {
    name: "Elrafact Technology Solutions",
    platform: "Twitter",
    icon: <FaTwitter className="text-blue-400 mr-3 text-5xl" />,
    description:
      "Team Register Karo helped our company incorporated into MCA. Team was very professional and cooperative.Response to all our doubts were cleared well. I would like to thank Mr.Bhuvan & Register Karo Team. I would like to thank Mr.Bhuvan & Register Karo Team.",
  },
  {
    name: "Venu Gopal",
    platform: "Google",
    icon: <FaGoogle className="text-red-500 mr-3 text-5xl" />,
    description:
      "One of my friend suggested me to go with RegisterKaro in for my Company Registration. I have no idea about Company registration process, documents required and other details involved. RegisterKaro Team guided me very well during my Pvt Ltd Company registration.",
  },
];

export default function ClientFeedback() {
  return (
    <div className="w-full py-8 bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50/20 via-purple-50/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-5">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 relative inline-block before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-1 before:bg-indigo-600">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-700 mb-4">
          RegisterKaro is used by tens of thousands of founders to start, manage, and grow their business
          </p>
          <p className="text-xl font-semibold text-indigo-600">
            20,000+ Happy Customers
          </p>
          <p className="mt-2 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          We are one of India's highest rated service provider, we are know for completing Business incorporations and other compliance services in record time, don't have to believe us, read it by yourselves
          </p>
          <p className="mt-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          RegisterKaro is a startup India registered company
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="h-full flex">
              <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full min-h-[500px]">
                <div>
                  <div className="flex items-center mb-8">
                    {slide.icon}
                    <span className="text-xl ml-2 text-gray-500">
                      Posted on {slide.platform}
                    </span>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed line-clamp-9">
                    {slide.description}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center text-4xl font-semibold mb-4">
                    {slide.name.charAt(0)}
                  </div>
                  <p className="text-md font-semibold text-gray-800">{slide.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
