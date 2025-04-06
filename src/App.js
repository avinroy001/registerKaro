
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Highlight from './components/Highlight'
import ChooseSection from './components/ChooseSection';
import OurServices from './components/OurServices';
import HeroSection from './components/HeroSection/HeroSection';
import ClientFeedback from './components/ClientFeedback/ClientFeedback';
import ContactMain from './components/ContactInfo/ContactMain';
import PartnerSwiper from './components/PartnerSwiper/PartnerSwiper';

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
        <PartnerSwiper/>
      </div>
      <div>
        <ClientFeedback/>
      </div>
      <div>
        <ContactMain/>
      </div>
    </div>
  );
}

export default App;
