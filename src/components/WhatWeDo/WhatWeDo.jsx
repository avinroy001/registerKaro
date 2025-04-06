import React from 'react';
import { FaUser, FaBuilding, FaChartLine } from 'react-icons/fa';
import businessSuccessImage from '../../Assets/businessSuccess.jpg'; 
const WhatWeDo = () => {
  return (
    <section
      className="relative py-15 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          >
            <h2 className="text-2xl font-extrabold text-gray-500 mb-6">What We Do</h2>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Receive support at every stage of business development.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Launch, grow and scale with ease. Each of our clients has a dedicated team that is committed to answering all queries within 24 hours, so you can rely on our helpful and professional support throughout your business journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Explore Solutions
              </button>
              <button
                className="bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-700 hover:text-indigo-700 font-semibold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Get Started →
              </button>
            </div>
          </div>

          <div
            className="w-500 md:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative">
              <img
                src={businessSuccessImage} 
                alt="Business Growth"
                className="w-5xl h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div
          className="mt-10 text-center overflow-x-auto whitespace-nowrap"
        >
          <div className="inline-flex space-x-20">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <FaUser size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sole Trader</h3>
              <p className="text-sm text-gray-600">Start your journey.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <FaBuilding size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Limited Company</h3>
              <p className="text-sm text-gray-600">Scale your operations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <FaChartLine size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growing Business</h3>
              <p className="text-sm text-gray-600">Achieve sustainable growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;