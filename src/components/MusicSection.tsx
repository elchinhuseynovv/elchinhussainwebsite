import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  album: string;
  cover: string;
  audioSrc: string;
  youtubeUrl?: string;
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
      cover: "https://source.boomplaymusic.com/group10/M00/10/13/be7f65cd069b471bbf84d3780bcd7329H3000W3000_464_464.webp",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
      youtubeUrl: "https://www.youtube.com/watch?v=UoErgP6lJXM"
    },
    {
      id: 2,
      title: "Endless Sky, Little Dreams",
      album: "Single (2024)",
      cover: "https://source.boomplaymusic.com/group10/M00/09/17/152a266dc346457180f9de6eb9232002H3000W3000_464_464.webp",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-614.mp3",
      youtubeUrl: "https://www.youtube.com/watch?v=om6NySovtUo"
    },
    {
      id: 3,
      title: "Once Upon a Time",
      album: "EP (2024)",
      cover: "https://source.boomplaymusic.com/group10/M00/08/01/8d6d6b8e14da47b087f0499f6b401df5H3000W3000_464_464.webp",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
      youtubeUrl: "https://www.youtube.com/watch?v=-utg-qBldR8"
    },
    {
      id: 4,
      title: "Nocturne",
      album: "Single (2024)",
      cover: "https://source.boomplaymusic.com/group10/M00/06/26/c37251eddf0048ac993a1bfae041df24_464_464.webp",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
      youtubeUrl: "https://www.youtube.com/watch?v=JFAlk86Gue4"
    },
    {
      id: 5,
      title: "It Could Be My Dreams",
      album: "Single (2024)",
      cover: "https://source.boomplaymusic.com/group10/M00/06/22/5cbae3dac0f740a2a5dffc4195a3939b_464_464.webp",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
      youtubeUrl: "https://www.youtube.com/watch?v=r2TLpZoB7Ug"
    },
    {
      id: 6,
      title: "Luminescence",
      album: "Single (2024)",
      cover: "https://source.boomplaymusic.com/group10/M00/02/01/c4c0510896c0416ba372494e218486aaH3000W3000_464_464.webp",
      audioSrc: "https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-51.mp3",
      youtubeUrl: "https://www.youtube.com/watch?v=uJ4vJAyOHvs"
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

  const openYoutubeLink = (track: Track, event: React.MouseEvent) => {
    event.stopPropagation();
    if (track.youtubeUrl) {
      window.open(track.youtubeUrl, '_blank');
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
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handlePlay(track)}
                    className="w-12 h-12 rounded-full bg-electric-blue flex items-center justify-center text-black"
                  >
                    {currentTrack?.id === track.id && isPlaying ? (
                      <Pause size={24} />
                    ) : (
                      <Play size={24} className="ml-1" />
                    )}
                  </button>
                  {track.youtubeUrl && (
                    <button 
                      onClick={(e) => openYoutubeLink(track, e)}
                      className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </button>
                  )}
                </div>
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