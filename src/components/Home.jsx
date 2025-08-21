
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
              audio: 'src/assets/audio/english/ed-sheeran/shape-of-you.mp3',
              image: '/assets/images/albums/shape-of-you.jpg'
            },
            {
              id: 2,
              title: 'Perfect',
              duration: '4:23',
              audio: '/assets/audio/english/ed-sheeran/perfect.mp3',
              image: '/assets/images/albums/perfect.jpg'
            },
            {
              id: 3,
              title: 'Thinking Out Loud',
              duration: '4:41',
              audio: '/assets/audio/english/ed-sheeran/thinking-out-loud.mp3',
              image: '/assets/images/albums/thinking-out-loud.jpg'
            },
            {
              id: 4,
              title: 'Photograph',
              duration: '4:18',
              audio: '/assets/audio/english/ed-sheeran/photograph.mp3',
              image: '/assets/images/albums/photograph.jpg'
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
              audio: '/assets/audio/english/camia-cabello/havana.mp3',
              image: '/assets/images/albums/havana.jpg'
            },
            {
              id: 2,
              title: 'Senorita',
              duration: '3:51',
              audio: '/assets/audio/english/camia-cabello/senorita.mp3',
              image: '/assets/images/albums/senorita.jpg'
            },
            {
              id: 3,
              title: 'Never be the same',
              duration: '3:39',
              audio: '/assets/audio/english/camia-cabello/never-be-the-same.mp3',
              image: '/assets/images/albums/never-be-the-same.jpg'
            },
            {
              id: 4,
              title: "Don't Go Yet",
              duration: '3:51',
              audio: '/assets/audio/english/camia-cabello/dont-go-yet.mp3',
              image: '/assets/images/albums/dont-go-yet.jpg'
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
              image: '/assets/images/albums/stitches.jpg'
            },
            {
              id: 2,
              title: "There's Nothing Holdin' Me Back",
              duration: '4:45',
              audio: '/assets/audio/english/shawn-mendes/theres-nothing-holdin-me-back.mp3',
              image: '/assets/images/albums/theres-nothing-holdin-me-back.jpg'
            },
            {
              id: 3,
              title: 'Treat You Better',
              duration: '3:48',
              audio: '/assets/audio/english/shawn-mendes/treat-you-better.mp3',
              image: '/assets/images/albums/treat-you-better.jpg'
            },
            {
              id: 4,
              title: 'In My Blood',
              duration: '4:02',
              audio: '/assets/audio/english/shawn-mendes/in-my-blood.mp3',
              image: '/assets/images/albums/in-my-blood.jpg'
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
              image: '/assets/images/albums/tum-hi-ho.jpg'
            },
            {
              id: 2,
              title: 'Channa Mereya',
              duration: '4:49',
              audio: '/assets/audio/hindi/arijit-singh/channa-mereya.mp3',
              image: '../assets/images/albums/channa-mereya.jpg'
            },
            {
              id: 3,
              title: 'Raabta',
              duration: '4:57',
              audio: '/assets/audio/hindi/arijit-singh/raabta.mp3',
              image: '/assets/images/albums/raabta.jpg'
            },
            {
              id: 4,
              title: 'Ae Dil Hai Mushkil',
              duration: '4:29',
              audio: '/assets/audio/hindi/arijit-singh/ae-dil-hai-mushkil.mp3',
              image: '/assets/images/albums/ae-dil-hai-mushkil.jpg'
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
              audio: '/assets/audio/hindi/shreya-ghoshal/param-sundari.mp3',
              image: '/assets/images/albums/param-sundari.jpg'
            },
            {
              id: 2,
              title: 'Manwa Laage',
              duration: '4:14',
              audio: '/assets/audio/hindi/shreya-ghoshal/manwa-laage.mp3',
              image: '/assets/images/albums/manwa-laage.jpg'
            },
            {
              id: 3,
              title: 'Teri Meri',
              duration: '4:25',
              audio: '/assets/audio/hindi/shreya-ghoshal/teri-meri.mp3',
              image: '/assets/images/albums/teri-meri.jpg'
            },
            {
              id: 4,
              title: 'Sun Raha Hai',
              duration: '4:54',
              audio: '/assets/audio/hindi/shreya-ghoshal/sun-raha-hai.mp3',
              image: '/assets/images/albums/sun-raha-hai.jpg'
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
              audio: '/assets/audio/hindi/darshan-raval/tera-zikr.mp3',
              image: '/assets/images/albums/tera-zikr.jpg'
            },
            {
              id: 2,
              title: 'Ek Tarfa',
              duration: '4:20',
              audio: '/assets/audio/hindi/darshan-raval/ek-tarfa.mp3',
              image: '/assets/images/albums/ek-tarfa.jpg'
            },
            {
              id: 3,
              title: 'Chogada',
              duration: '7:07',
              audio: '/assets/audio/hindi/darshan-raval/chogada.mp3',
              image: '/assets/images/albums/chogada.jpg'
            },
            {
              id: 4,
              title: 'Baarish Lete Aana',
              duration: '6:34',
              audio: '/assets/audio/hindi/darshan-raval/baarish-lete-aana.mp3',
              image: '/assets/images/albums/baarish-lete-aana.jpg'
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
              audio: '/assets/audio/telugu/sid-sriram/inkem-inkem.mp3',
              image: '/assets/images/albums/inkem-inkem.jpg'
            },
            {
              id: 2,
              title: 'Samajavaragamana',
              duration: '3:40',
              audio: '/assets/audio/telugu/sid-sriram/samajavaragamana.mp3',
              image: '/assets/images/albums/samajavaragamana.jpg'
            },
            {
              id: 3,
              title: 'Butta Bomma',
              duration: '3:18',
              audio: '/assets/audio/telugu/sid-sriram/butta-bomma.mp3',
              image: '/assets/images/albums/butta-bomma.jpg'
            },
            {
              id: 4,
              title: 'O Rendu Prema Meghaalila',
              duration: '4:01',
              audio: '/assets/audio/telugu/sid-sriram/o-rendu-prema.mp3',
              image: '/assets/images/albums/o-rendu-prema.jpg'
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
              audio: '/assets/audio/telugu/sunitha/ee-velalo-neevu.mp3',
              image: '/assets/images/albums/ee-velalo-neevu.jpg'
            },
            {
              id: 2,
              title: 'Manasa Manasa',
              duration: '4:12',
              audio: '/assets/audio/telugu/sunitha/manasa-manasa.mp3',
              image: '/assets/images/albums/manasa-manasa.jpg'
            },
            {
              id: 3,
              title: 'Andamaina Premarani',
              duration: '3:37',
              audio: '/assets/audio/telugu/sunitha/andamaina-premarani.mp3',
              image: '/assets/images/albums/andamaina-premarani.jpg'
            },
            {
              id: 4,
              title: 'Neeli Neeli Kannullo',
              duration: '3:36',
              audio: '/assets/audio/telugu/sunitha/neeli-neeli-kannullo.mp3',
              image: '/assets/images/albums/neeli-neeli-kannullo.jpg'
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
              title: 'Halame',
              duration: '3:12',
              audio: '/assets/audio/telugu/anirudh/halame.mp3',
              image: '/assets/images/albums/halame.jpg'
            },
            {
              id: 2,
              title: 'Dosti',
              duration: '4:10',
              audio: '/assets/audio/telugu/anirudh/dosti.mp3',
              image: '/assets/images/albums/dosti.jpg'
            },
            {
              id: 3,
              title: 'College Papa',
              duration: '3:45',
              audio: '/assets/audio/telugu/anirudh/college-papa.mp3',
              image: '/assets/images/albums/college-papa.jpg'
            },
            {
              id: 4,
              title: 'Private Party',
              duration: '3:30',
              audio: '/assets/audio/telugu/anirudh/private-party.mp3',
              image: '/assets/images/albums/private-party.jpg'
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