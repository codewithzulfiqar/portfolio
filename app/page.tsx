import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
