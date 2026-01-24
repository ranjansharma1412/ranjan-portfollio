import EditorialGrid from './components/editorial-card/EditorialGrid';
import ExperienceTimeline from './components/experience/ExperienceTimeline';
import HeroSection from './components/hero/HeroSection';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import SkillsSection from './components/skills-section/SkillsSection';
import WorksSection from './components/works/WorksSection';

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <SkillsSection />
      <EditorialGrid />
      <ExperienceTimeline />
      <WorksSection />
      <Footer />
    </>
  );
}

export default App;
