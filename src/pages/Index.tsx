import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import EbooksBanner from '@/sections/EbooksBanner';
import Plans from '@/sections/Plans';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <EbooksBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
