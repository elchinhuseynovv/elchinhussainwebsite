import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  album: string;
  cover: string;
  audioSrc: string;
}

const MusicSection: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const tracks: Track[] = [
    {
      id: 1,
      title: "Yesterday's Dream",
      album: "Single (2024)",
      cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
    },
    {
      id: 2,
      title: "Endless Sky, Little Dreams",
      album: "EP (2024)",
      cover: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-614.mp3"
    },
    {
      id: 3,
      title: "Once Upon a Time",
      album: "Single (2024)",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3"
    },
    {
      id: 4,
      title: "Nocturne",
      album: "Single (2024)",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3"
    },
    {
      id: 5,
      title: "It Could Be My Dreams",
      album: "EP (2024)",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3"
    },
    {
      id: 6,
      title: "Luminescence",
      album: "YouTube Release",
      cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-51.mp3"
    }
  ];

  const handlePlay = (track: Track) => {
    if (audioElement) {
      audioElement.pause();
    }

    const audio = new Audio(track.audioSrc);
    setAudioElement(audio);
    
    if (currentTrack?.id === track.id && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      audio.play();
      
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTrack(null);
      });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">MUSIC</h2>
        <div className="w-20 h-1 bg-electric-blue mx-auto mb-8"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore Elchin Hussain's ambient and piano compositions, featuring a unique blend of relaxing and atmospheric sounds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track) => (
          <div 
            key={track.id} 
            className="bg-gray-900 rounded-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] group"
          >
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={track.cover} 
                alt={track.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => handlePlay(track)}
                  className="w-16 h-16 rounded-full bg-electric-blue flex items-center justify-center text-black"
                >
                  {currentTrack?.id === track.id && isPlaying ? (
                    <Pause size={28} />
                  ) : (
                    <Play size={28} className="ml-1" />
                  )}
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{track.title}</h3>
              <p className="text-gray-400">{track.album}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center flex flex-wrap justify-center gap-4">
        <a 
          href="https://open.spotify.com/artist/6a1XwXtJ3MzICsG0SmHtMv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-[#1DB954] text-black font-medium rounded-sm hover:bg-[#1DB954]/90 transition-colors"
        >
          SPOTIFY
        </a>
        <a 
          href="https://music.apple.com/us/artist/elchin-hussain/1601736678" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-medium rounded-sm hover:bg-gray-200 transition-colors"
        >
          APPLE MUSIC
        </a>
        <a 
          href="https://soundcloud.com/elchin-hussain" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-[#ff7700] text-black font-medium rounded-sm hover:bg-[#ff7700]/90 transition-colors"
        >
          SOUNDCLOUD
        </a>
        <a 
          href="https://www.youtube.com/@ElchinHussain" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-[#FF0000] text-white font-medium rounded-sm hover:bg-[#FF0000]/90 transition-colors"
        >
          YOUTUBE
        </a>
      </div>
    </div>
  );
};

export default MusicSection;