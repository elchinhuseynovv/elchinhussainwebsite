import React, { useState } from 'react';
import { Mail, Phone, Instagram, Twitter, Youtube, Music } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">CONTACT</h2>
        <div className="w-20 h-1 bg-electric-blue mx-auto mb-8"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Get in touch for collaborations, bookings, or inquiries about music and performances.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-electric-blue text-black font-medium rounded-sm hover:bg-electric-blue/90 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="text-electric-blue mr-4" size={20} />
                <a href="mailto:contact@elchinhussain.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@elchinhussain.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-electric-blue mr-4" size={20} />
                <a href="tel:+12345678900" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
            
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <Instagram size={20} />
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <Twitter size={20} />
              </a>
              
              <a 
                href="https://www.youtube.com/@ElchinHussain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <Youtube size={20} />
              </a>
              
              <a 
                href="https://open.spotify.com/artist/6a1XwXtJ3MzICsG0SmHtMv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <Music size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;