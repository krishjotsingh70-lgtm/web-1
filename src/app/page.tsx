import LoadingScreen from '../components/LoadingScreen';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import WorkSlideshow from '../components/WorkSlideshow';
import Portfolio from '../components/Portfolio';
import Timeline from '../components/Timeline';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Loading Screen Preloader */}
      <LoadingScreen />

      {/* Interactive Glowing Custom Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Infinite Software & Skill Ticker */}
      <Marquee />

      {/* About Section */}
      <About />

      {/* Skills & Tools Section */}
      <Skills />

      {/* Services Section */}
      <Services />

      {/* MY Work Automatic Slideshow Section */}
      <WorkSlideshow />

      {/* Portfolio Gallery Section */}
      <Portfolio />

      {/* Career Journey Timeline Section */}
      <Timeline />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Frequently Asked Questions Section */}
      <FAQ />

      {/* Contact Form Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
