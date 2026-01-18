import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/hero/HeroSection';
import ServicesSection from './components/services/ServicesSection';
import ExperienceTimeline from './components/experience/ExperienceTimeline';
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
