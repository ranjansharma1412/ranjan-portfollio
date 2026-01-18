import ExperienceTimeline from './components/experience/ExperienceTimeline';
import HeroSection from './components/hero/HeroSection';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ServicesSection from './components/services/ServicesSection';
import WorksSection from './components/works/WorksSection';

function App() {


  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExperienceTimeline />
      <WorksSection />
      <Footer />
    </>
  );
}

export default App;
