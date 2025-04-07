import React from "react";
import heroImage from "../../Assets/hero.jpg";
import Button from "@mui/material/Button";
import Logo from "../../Assets/Logo.png";

const HeroSection = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center mt-10 sm:mt-30">
        <div className="hero  w-full">
          <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-around w-full">
            <div>
              <img
                src={heroImage}
                className="max-w-xl  shadow-2xl"
                alt="hero"
              />
            </div>
            
            <div class="p-8">
              <div class="flex items-center mb-8">
                <img
                  src={Logo}
                  alt="Logo"
                  class="w-20 mr-4 p-2 bg-gray-100 rounded"
                />
                <h1 class="text-3xl font-semibold">
                  We take care of ALL your business compliance needs
                </h1>
              </div>
              <p class="mb-6 max-w-lg">
                An online business compliance platform that helps entrepreneurs
                and other individuals with various registrations, tax filings,
                and other legal matters.
              </p>
              <Button
                variant="contained"
                className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full transition-colors duration-300"
              >
                Get Started
              </Button>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F8Ec] p-5">
        <h1 className="text-3xl font-bold mt-10 mx-10">
          Our Client Services Team is always happy to talk to you about what is
          best for your needs.
        </h1>
        <p className="text-lg mx-11 m-2">
          We are here to help you with all your business compliance needs. Our
          team of experts is always available to assist you with any questions
          or concerns you may have.
        </p>
        <Button
          variant="outlined"
          className="btn btn-primary"
          sx={{
            border: "2px double black",
            color: "black",
            px: 3,
            py: 2,
            mx: 5,
            mt: 3,
            fontWeight: 600,
          }}
        >
          Explore Our Services
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
