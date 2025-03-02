import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Pause, Instagram, Twitter, Youtube, Music, Mail, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MusicSection from './components/MusicSection';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'music', 'portfolio', 'about', 'contact'];
      
      const currentPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="music" className="py-20">
          <MusicSection />
        </section>
        
        <section id="portfolio" className="py-20">
          <Portfolio />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;