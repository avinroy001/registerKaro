import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";

import blog1 from "../../Assets/blog1.jpeg";
import blog2 from "../../Assets/blog2.jpeg";
import blog3 from "../../Assets/blog3.jpeg";
import blog4 from "../../Assets/blog4.jpeg";
import blog5 from "../../Assets/blog5.jpeg";
import blog6 from "../../Assets/blog6.jpeg";
import blog7 from "../../Assets/blog7.jpeg";
import blog8 from "../../Assets/blog8.jpeg";
import blog9 from "../../Assets/blog9.jpeg";
import blog10 from "../../Assets/blog10.jpeg";

const BlogSwiper = () => {
  const blogArray = [
    {
      blogImg: blog1,
      blogTitle: "Punishable Offences Under FSSAI: Know the Rules",
      blogDateAndTime: "April 03, 2025 at 11:00 AM",
      blogWrittenBy: "Written By Jai Raj",
    },
    {
      blogImg: blog2,
      blogTitle: "BIS certification for Medical devices: A step-by-step guide",
      blogDateAndTime: "April 03, 2025 at 10:31 AM",
      blogWrittenBy: "Written By Shaggun V Singh",
    },
    {
      blogImg: blog3,
      blogTitle:
        "One Person Company Can Be Registered As? Exploring OPC Structures and Requirements!",
      blogDateAndTime: "March 29, 2025 at 09:36 AM",
      blogWrittenBy: "Written By Om Adesh Ghai",
    },
    {
      blogImg: blog4,
      blogTitle:
        "Understanding Compliance for Private Limited Companies in India",
      blogDateAndTime: "March 29, 2025 at 08:26 AM",
      blogWrittenBy: "Written By Muskaan Hiran",
    },
    {
      blogImg: blog5,
      blogTitle: "Government Schemes for Startups in India",
      blogDateAndTime: "March 29, 2025 at 07:41 AM",
      blogWrittenBy: "Written By Komal Sharma",
    },
    {
      blogImg: blog6,
      blogTitle: "Mandatory OPC Compliance Requirements: Full Guide",
      blogDateAndTime: "March 29, 2025 at 07:05 AM",
      blogWrittenBy: "Written By Om Adesh Ghai",
    },
    {
      blogImg: blog7,
      blogTitle:
        "One Person Company Registration and Compliance: PAN, TAN, and GST Filing Simplified",
      blogDateAndTime: "March 28, 2025 at 01:10 PM",
      blogWrittenBy: "Written By Om Adesh Ghai",
    },
    {
      blogImg: blog8,
      blogTitle: "What is a Sole Proprietorship? Everything You Need to Know",
      blogDateAndTime: "March 28, 2025 at 10:15 AM",
      blogWrittenBy: "Written By Jai Raj",
    },
    {
      blogImg: blog9,
      blogTitle:
        "A Complete Guide to Registering a Startup in India: Step-by-Step",
      blogDateAndTime: "March 28, 2025 at 12:35 PM",
      blogWrittenBy: "Written By Komal Sharma",
    },
    {
      blogImg: blog10,
      blogTitle:
        "One Person Company Can Be Registered As? Exploring OPC Structures and Requirements!",
      blogDateAndTime: "March 28, 2025 at 10:47 AM",
      blogWrittenBy: "Written By Om Adesh Ghai",
    },
  ];

  return (
    <div className=" text-black font-sans flex flex-col md:flex-row items-center justify-evenly px-4 md:px-10 py-10 gap-10">
      <div className="relative w-full md:w-[400px] h-[400px]">
        <Swiper
          effect="cube"
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination, Autoplay]}
          className="w-full h-full"
        >
          {blogArray.map((blog, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-md flex flex-col">
                <img
                  src={blog.blogImg}
                  alt={blog.blogTitle}
                  className="w-full h-50 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between mb-8">
                  <h2 className="text-lg font-semibold">{blog.blogTitle}</h2>
                  <p className="text-sm text-gray-500">
                    {blog.blogDateAndTime}
                  </p>
                  <p className="text-sm font-medium mt-2">
                    {blog.blogWrittenBy}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-gray-700 leading-snug mb-4">
          Latest Blog
        </h1>
        <p className="text-center md:text-lg font-bold  bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          Stay updated with our latest insights, tips, and industry news.
          <br className="hidden md:block" />
          Explore fresh content to stay ahead of the curve.
        </p>
      </div>
    </div>
  );
};

export default BlogSwiper;