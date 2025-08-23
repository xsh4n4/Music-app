
import React, { useState } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';
import './Home.css';

const Home = ({ onTrackSelect, setPlaylist }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [selectedArtist, setSelectedArtist] = useState(null);

  const musicData = {
    english: {
      artists: [
        {
          id: 1,
          name: 'Ed Sheeran',
          image: '/assets/images/artists/ed-sheeran.jpg',

          songs: [
            {
              id: 1,
              title: 'Shape of You',
              duration: '3:53',
              audio: '/assets/audio/english/ed-sheeran/shapeofyou.mp3',
              image: '/assets/images/albums/english/ed-sheeran/shapeofyou.jpg'
            },
            {
              id: 2,
              title: 'Perfect',
              duration: '4:23',
              audio: '/assets/audio/english/ed-sheeran/perfect.mp3',
              image: '/assets/images/albums/english/ed-sheeran/perfect.jpg'
            },
            {
              id: 3,
              title: 'Thinking Out Loud',
              duration: '4:41',
              audio: '/assets/audio/english/ed-sheeran/thinkingoutloud.mp3',
              image: '/assets/images/albums/english/ed-sheeran/thinkingoutloud.jpg'
            },
            {
              id: 4,
              title: 'Photograph',
              duration: '4:18',
              audio: '/assets/audio/english/ed-sheeran/photograph.mp3',
              image: '/assets/images/albums/english/ed-sheeran/photograph.jpg'
            }
          ]
        },
        {
          id: 2,
          name: 'Camila Cabello',
          image: '/assets/images/artists/camila-cabello.jpg',
          songs: [
            {
              id: 1,
              title: 'Havana',
              duration: '3:55',
              audio: '/assets/audio/english/camila-cabello/havana.mp3',
              image: '/assets/images/albums/english/camila-cabello/havana.jpg'
            },
            {
              id: 2,
              title: 'Senorita',
              duration: '3:51',
              audio: '/assets/audio/english/camila-cabello/senorita.mp3',
              image: '/assets/images/albums/english/camila-cabello/senorita.jpg'
            },
            {
              id: 3,
              title: 'Mi Persona Favorita',
              duration: '3:59',
              audio: '/assets/audio/english/camila-cabello/mipersonafavorita.mp3',
              image: '/assets/images/albums/english/camila-cabello/mipersonafavorita.jpg'
            },
            {
              id: 4,
              title: "Shameless",
              duration: '3:08',
              audio: '/assets/audio/english/camila-cabello/shameless.mp3',
              image: '/assets/images/albums/english/camila-cabello/shameless.jpg'
            }
          ]
        },
        {
          id: 3,
          name: 'Shawn Mendes',
          image: '/assets/images/artists/shawn-mendes.jpg',
          songs: [
            {
              id: 1,
              title: 'Stitches',
              duration: '4:55',
              audio: '/assets/audio/english/shawn-mendes/stitches.mp3',
              image: '/assets/images/albums/english/shawn-mendes/stitches.jpg'
            },
            {
              id: 2,
              title: "Skyfall",
              duration: '4:45',
              audio: '/assets/audio/english/shawn-mendes/skyfall.mp3',
              image: '/assets/images/albums/english/shawn-mendes/skyfall.jpg'
            },
            {
              id: 3,
              title: 'Treat You Better',
              duration: '3:48',
              audio: '/assets/audio/english/shawn-mendes/treatyoubetter.mp3',
              image: '/assets/images/albums/english/shawn-mendes/treatyoubetter.jpg'
            },
            {
              id: 4,
              title: 'Hello',
              duration: '4:02',
              audio: '/assets/audio/english/shawn-mendes/hello.mp3',
              image: '/assets/images/albums/english/shawn-mendes/hello.jpg'
            }
          ]
        }
      ]
    },
    hindi: {
      artists: [
        {
          id: 1,
          name: 'Arijit Singh',
          image: '../assets/images/artists/arijit-singh.jpg',
          songs: [
            {
              id: 1,
              title: 'Tum Hi Ho',
              duration: '4:22',
              audio: '/assets/audio/Hindi/arijit-singh/tumhiho.mp3',
              image: '/assets/images/albums/hindi/arijit-singh/tumhiho.jpg'
            },
            {
              id: 2,
              title: 'Channa Mereya',
              duration: '4:49',
              audio: '/assets/audio/hindi/arijit-singh/channamereya.mp3',
              image: '../assets/images/albums/hindi/arijit-singh/channamereya.jpg'
            },
            {
              id: 3,
              title: 'Raabta',
              duration: '4:57',
              audio: '/assets/audio/hindi/arijit-singh/raabta.mp3',
              image: '/assets/images/albums/hindi/arijit-singh/raabta.jpg'
            },
            {
              id: 4,
              title: 'Ae Dil Hai Mushkil',
              duration: '4:29',
              audio: '/assets/audio/hindi/arijit-singh/aedilhaimushkil.mp3',
              image: '/assets/images/albums/hindi/arijit-singh/aedilhaimushkil.jpg'
            }
          ]
        },
        {
          id: 2,
          name: 'Shreya Ghoshal',
          image: '/assets/images/artists/shreya-ghoshal.jpg',
          songs: [
            {
              id: 1,
              title: 'Param Sundari',
              duration: '3:43',
              audio: '/assets/audio/hindi/shreya-ghoshal/paramsundari.mp3',
              image: '/assets/images/albums/hindi/shreya-ghoshal/paramsundari.jpg'
            },
            {
              id: 2,
              title: 'Manwa Laage',
              duration: '4:14',
              audio: '/assets/audio/hindi/shreya-ghoshal/manwalaage.mp3',
              image: '/assets/images/albums/hindi/shreya-ghoshal/manwalaage.jpg'
            },
            {
              id: 3,
              title: 'Zaalima',
              duration: '4:25',
              audio: '/assets/audio/hindi/shreya-ghoshal/zaalima.mp3',
              image: '/assets/images/albums/hindi/shreya-ghoshal/zaalima.jpg'
            },
            {
              id: 4,
              title: 'Sun Raha Hai',
              duration: '4:54',
              audio: '/assets/audio/hindi/shreya-ghoshal/sunnrahahai.mp3',
              image: '/assets/images/albums/hindi/shreya-ghoshal/sunnrahahai.jpg'
            }
          ]
        },
        {
          id: 3,
          name: 'Darshan Raval',
          image: '/assets/images/artists/darshan-raval.jpg',
          songs: [
            {
              id: 1,
              title: 'Tera Zikr',
              duration: '5:21',
              audio: '/assets/audio/hindi/darshan-raval/terazikr.mp3',
              image: '/assets/images/albums/hindi/darshan-raval/terazikr.jpg'
            },
            {
              id: 2,
              title: 'Ek Tarfa',
              duration: '4:20',
              audio: '/assets/audio/hindi/darshan-raval/ektarfa.mp3',
              image: '/assets/images/albums/hindi/darshan-raval/ektarfa.jpg'
            },
            {
              id: 3,
              title: 'Chogada',
              duration: '7:07',
              audio: '/assets/audio/hindi/darshan-raval/chogada.mp3',
              image: '/assets/images/albums/hindi/darshan-raval/chogada.jpg'
            },
            {
              id: 4,
              title: 'Baarish Lete Aana',
              duration: '6:34',
              audio: '/assets/audio/hindi/darshan-raval/baarishleteaana.mp3',
              image: '/assets/images/albums/hindi/darshan-raval/baarishleteaana.jpg'
            }
          ]
        }
      ]
    },
    telugu: {
      artists: [
        {
          id: 1,
          name: 'Sid Sriram',
          image: '/assets/images/artists/sid-sriram.jpg',
          songs: [
            {
              id: 1,
              title: 'Inkem Inkem Inkem Kaavaale',
              duration: '4:28',
              audio: '/assets/audio/telugu/sid-sriram/inkemkavale.mp3',
              image: '/assets/images/albums/telugu/sid-sriram/inkemkavale.jpg'
            },
            {
              id: 2,
              title: 'Samajavaragamana',
              duration: '3:40',
              audio: '/assets/audio/telugu/sid-sriram/samajavaragamana.mp3',
              image: '/assets/images/albums/telugu/sid-sriram/samajavaragamana.jpg'
            },
            {
              id: 3,
              title: 'Butta Bomma',
              duration: '3:18',
              audio: '/assets/audio/telugu/sid-sriram/buttabomma.mp3',
              image: '/assets/images/albums/telugu/sid-sriram/buttabomma.jpg'
            },
            {
              id: 4,
              title: 'Neevalle',
              duration: '4:01',
              audio: '/assets/audio/telugu/sid-sriram/neevalle.mp3',
              image: '/assets/images/albums/telugu/sid-sriram/neevalle.jpg'
            }
          ]
        },
        {
          id: 2,
          name: 'Sunitha',
          image: '/assets/images/artists/sunitha.jpg',
          songs: [
            {
              id: 1,
              title: 'Ee Velalo Neevu',
              duration: '3:51',
              audio: '/assets/audio/telugu/sunitha/eevelalo.mp3',
              image: '/assets/images/albums/telugu/sunitha/eevelalo.jpg'
            },
            {
              id: 2,
              title: 'Manasa Manasa',
              duration: '4:12',
              audio: '/assets/audio/telugu/sunitha/manasa.mp3',
              image: '/assets/images/albums/telugu/sunitha/manasa.jpg'
            },
            {
              id: 3,
              title: 'Manasa Sancharare',
              duration: '3:37',
              audio: '/assets/audio/telugu/sunitha/maanasasancharare.mp3',
              image: '/assets/images/albums/telugu/sunitha/manasasancharare.jpg'
            },
            {
              id: 4,
              title: 'Neeli Neeli Kannullo',
              duration: '3:36',
              audio: '/assets/audio/telugu/sunitha/neelikannullo.mp3',
              image: '/assets/images/albums/telugu/sunitha/neelikannullo.jpg'
            }
          ]
        },
        {
          id: 3,
          name: 'Anirudh',
          image: '/assets/images/artists/anirudh.jpg',
          songs: [
            {
              id: 1,
              title: 'Fear',
              duration: '3:12',
              audio: '/assets/audio/telugu/anirudh/fear.mp3',
              image: '/assets/images/albums/telugu/anirudh/fear.jpg'
            },
            {
              id: 2,
              title: 'Dosti',
              duration: '4:10',
              audio: '/assets/audio/telugu/anirudh/dosti.mp3',
              image: '/assets/images/albums/telugu/anirudh/dosti.jpg'
            },
            {
              id: 3,
              title: 'College Papa',
              duration: '3:45',
              audio: '/assets/audio/telugu/anirudh/collegepaapa.mp3',
              image: '/assets/images/albums/telugu/anirudh/collegepaapa.jpg'
            },
            {
              id: 4,
              title: 'Private Party',
              duration: '3:30',
              audio: '/assets/audio/telugu/anirudh/privateparty.mp3',
              image: '/assets/images/albums/telugu/anirudh/privateparty.jpg'
            }

          ]
        }
      ]
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setSelectedArtist(null);
  };

  const handleArtistSelect = (artist) => {
    setSelectedArtist(artist);
    setPlaylist(artist.songs);
  };

  const handleSongSelect = (song) => {
    onTrackSelect(song);
  };

  return (
    <div className="home">
      <div className="language-selector">
        <button
          className={`language-btn ${selectedLanguage === 'english' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('english')}
        >
          English
        </button>
        <button
          className={`language-btn ${selectedLanguage === 'hindi' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('hindi')}
        >
          Hindi
        </button>
        <button
          className={`language-btn ${selectedLanguage === 'telugu' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('telugu')}
        >
          Telugu
        </button>
      </div>

      <div className="artists-grid">
        {musicData[selectedLanguage].artists.map(artist => (
          <div
            key={artist.id}
            className={`artist-card ${selectedArtist?.id === artist.id ? 'selected' : ''}`}
            onClick={() => handleArtistSelect(artist)}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="artist-image"
            />
            <h3 className="artist-name">{artist.name}</h3>
          </div>
        ))}
      </div>

      {selectedArtist && (
        <div className="songs-list">
          <h2 className="section-title">{selectedArtist.name}'s Songs</h2>
          {selectedArtist.songs.map(song => (
            <div
              key={song.id}
              className="song-item"
              onClick={() => handleSongSelect(song)}
            >
              <img
                src={song.image}
                alt={song.title}
                className="song-image"
              />
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-duration">{song.duration}</p>
              </div>
              <button className="play-btn">
                <FiPlay />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;