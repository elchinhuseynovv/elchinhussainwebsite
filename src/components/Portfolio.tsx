import React, { useState } from 'react';
import { Play } from 'lucide-react';

type MediaType = 'photography' | 'videos' | 'all';

interface PortfolioItem {
  id: number;
  title: string;
  type: 'photo' | 'video';
  thumbnail: string;
  description: string;
  videoUrl?: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<MediaType>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Piano Session - Munich",
      type: "photo",
      thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A quiet moment at the piano, exploring new melodies and ambient textures."
    },
    {
      id: 2,
      title: "Studio Recording",
      type: "photo",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Recording session for the 'Endless Sky, Little Dreams' EP."
    },
    {
      id: 3,
      title: "Music Video - 'Yesterday's Dream'",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Official music video for 'Yesterday's Dream', featuring atmospheric visuals and piano performance.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-recording-music-in-a-studio-with-technicians-and-musicians-14177-large.mp4"
    },
    {
      id: 4,
      title: "Handpan Performance",
      type: "photo",
      thumbnail: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Exploring the unique sounds of the handpan for the 'Sari Gelin' cover."
    },
    {
      id: 5,
      title: "Live Performance Highlights",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Highlights from a live piano performance in Munich, featuring pieces from recent releases.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-playing-the-guitar-in-a-band-2480-large.mp4"
    },
    {
      id: 6,
      title: "Ambient Composition",
      type: "photo",
      thumbnail: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Creating ambient textures and soundscapes in the studio."
    },
    {
      id: 7,
      title: "Behind the Scenes - 'Luminescence'",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Behind-the-scenes footage from the recording of 'Luminescence' for YouTube.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-playing-drums-on-stage-1651-large.mp4"
    },
    {
      id: 8,
      title: "Piano Reflections",
      type: "photo",
      thumbnail: "https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Contemplative moment at the piano, exploring themes for upcoming compositions."
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => 
        activeFilter === 'photography' ? item.type === 'photo' : item.type === 'video'
      );

  const openLightbox = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">PORTFOLIO</h2>
        <div className="w-20 h-1 bg-electric-blue mx-auto mb-8"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of performances, studio sessions, and visual accompaniments to Elchin Hussain's ambient and piano compositions.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-900 rounded-sm p-1">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              activeFilter === 'all' ? 'bg-electric-blue text-black' : 'text-gray-300 hover:text-white'
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => setActiveFilter('photography')}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              activeFilter === 'photography' ? 'bg-electric-blue text-black' : 'text-gray-300 hover:text-white'
            }`}
          >
            PHOTOGRAPHY
          </button>
          <button
            onClick={() => setActiveFilter('videos')}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              activeFilter === 'videos' ? 'bg-electric-blue text-black' : 'text-gray-300 hover:text-white'
            }`}
          >
            VIDEOS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => openLightbox(item)}
            className="relative aspect-square overflow-hidden cursor-pointer group"
          >
            <img 
              src={item.thumbnail} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{item.type === 'photo' ? 'Photography' : 'Video'}</p>
              
              {item.type === 'video' && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-electric-blue flex items-center justify-center">
                    <Play size={20} className="text-black ml-1" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-5xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'photo' ? (
              <img 
                src={selectedItem.thumbnail} 
                alt={selectedItem.title} 
                className="w-full h-auto"
              />
            ) : (
              <div className="relative pt-[56.25%]">
                <video 
                  src={selectedItem.videoUrl} 
                  controls 
                  autoPlay 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white">{selectedItem.title}</h3>
              <p className="text-gray-400 mt-2">{selectedItem.description}</p>
            </div>
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;