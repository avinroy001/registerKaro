
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Highlight from './components/Highlight'
import ChooseSection from './components/ChooseSection';
import OurServices from './components/OurServices';
import HeroSection from './components/HeroSection/HeroSection';
import ClientFeedback from './components/ClientFeedback/ClientFeedback';
import ContactMain from './components/ContactInfo/ContactMain';
import PartnerSwiper from './components/PartnerSwiper/PartnerSwiper';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import BlogSwiper from './components/BlogSwiper/BlogSwiper';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="mt-14 sm:mt-16">
        <HeroSection/>
        <Highlight />
      </div>
      <div>
        <ChooseSection />
      </div>
      <div>
        <OurServices/>
      </div>
      <div>
        <WhatWeDo/>
      </div>
      <div>
        <PartnerSwiper/>
      </div>
      <div>
        <ClientFeedback/>
      </div>
      <div>
        <BlogSwiper/>
      </div>
      <div>
        <ContactMain/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
