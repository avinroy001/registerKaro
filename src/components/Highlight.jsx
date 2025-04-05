import React from "react";

const Highlight = () => {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-12">
  <p className="text-4xl sm:text-5xl md:text-6xl text-center font-serif font-normal tracking-wide mb-8">
    A few highlights
  </p>

  <div className="flex flex-col md:flex-row justify-around items-center flex-wrap gap-6">
    <div className="flex flex-col items-center text-center m-4">
      <p className="text-4xl sm:text-5xl font-bold">500+</p>
      <p className="text-base sm:text-lg">Businesses Incorporated Every Month</p>
    </div>

    <div className="flex flex-col items-center text-center m-4">
      <p className="text-4xl sm:text-5xl font-bold">20,000+</p>
      <p className="text-base sm:text-lg">Clients all over India</p>
    </div>

    <div className="flex flex-col items-center text-center m-4">
      <p className="text-4xl sm:text-5xl font-bold">250+</p>
      <p className="text-base sm:text-lg">Professionals Network</p>
    </div>
  </div>
</div>

  );
};

export default Highlight;
