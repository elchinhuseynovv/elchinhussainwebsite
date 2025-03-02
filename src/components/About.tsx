import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">ABOUT</h2>
        <div className="w-20 h-1 bg-electric-blue mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-semibold text-white mb-4">Elchin Hussain</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I am an ambient and piano composer based in Munich, Germany, originally from Moscow, Russia. My musical journey began in 2020 when I started creating ambient and piano compositions that aim to provide relaxation and a retreat from the stresses of daily life.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            My music encourages listeners to distance themselves from negativity and find moments of peace in our busy world. I blend atmospheric elements with melodic piano to create immersive soundscapes that tell stories without words.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            In addition to my original compositions, I've created remixes of popular tracks, including "Dragostea Din Tei" by O-Zone and "Sunset Lover" by Petit Biscuit. My YouTube channel also features unique performances like the handpan version of "Sari Gelin."
          </p>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-white mb-4">Recent Releases</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-electric-blue mr-2">•</span>
                <span>"Yesterday's Dream" - Single (2024)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-blue mr-2">•</span>
                <span>"Endless Sky, Little Dreams" - EP (2024)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-blue mr-2">•</span>
                <span>"Once Upon a Time" - Single (2024)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-blue mr-2">•</span>
                <span>"Nocturne" - Single (2024)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 border border-electric-blue/30 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Elchin Hussain" 
              className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;