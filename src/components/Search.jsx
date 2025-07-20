import React, { useState, useEffect } from 'react';
import { FiSearch, FiX, FiPlay, FiMusic, FiGlobe } from 'react-icons/fi';
import './Search.css';

const Search = ({ onTrackSelect, setPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({
    songs: [],
    artists: [],
    playlists: [],
    languages: []
  });
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const mockData = {
    songs: [
      {
        id: 1,
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        duration: '3:53',
        image: 'https://via.placeholder.com/150',
        audio: '/assets/audio/english/ed-sheeran/shape-of-you.mp3',
        language: 'English'
      },
      {
        id: 2,
        title: 'Tum Hi Ho',
        artist: 'Arijit Singh',
        duration: '4:22',
        image: 'https://via.placeholder.com/150',
        audio: '/assets/audio/hindi/arijit-singh/tum-hi-ho.mp3',
        language: 'Hindi'
      },
      {
        id: 3,
        title: 'Naatu Naatu',
        artist: 'Anurag Kulkarni',
        duration: '3:36',
        image: 'https://via.placeholder.com/150',
        audio: '/assets/audio/telugu/anurag-kulkarni/naatu-naatu.mp3',
        language: 'Telugu'
      }
    ],
    languages: ['English', 'Hindi', 'Telugu', 'Punjabi', 'Tamil', 'Kannada']
  };

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const query = searchQuery.toLowerCase();
        const results = {
          songs: mockData.songs.filter(song => 
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query) ||
            song.language.toLowerCase().includes(query)
          ),
          languages: mockData.languages.filter(lang => 
            lang.toLowerCase().includes(query)
          )
        };
        setSearchResults(results);
        setIsLoading(false);
      }, 500);
    } else {
      setSearchResults({ songs: [], artists: [], playlists: [], languages: [] });
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults({ songs: [], artists: [], playlists: [], languages: [] });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="search">
      <div className="search-header">
        <h2 className="section-title">Search</h2>
        <div className="search-input-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for songs, artists, or languages..."
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={clearSearch}>
              <FiX />
            </button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Searching...</p>
        </div>
      ) : searchQuery ? (
        <div className="search-results">
          {searchResults.languages.length > 0 && (
            <div className="results-section">
              <h3 className="results-title">
                <FiGlobe /> Languages
              </h3>
              <div className="languages-grid">
                {searchResults.languages.map((language, index) => (
                  <div key={index} className="language-card">
                    <span className="language-name">{language}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchResults.songs.length > 0 && (
            <div className="results-section">
              <h3 className="results-title">
                <FiMusic /> Songs
              </h3>
              <div className="songs-list">
                {searchResults.songs.map(song => (
                  <div 
                    key={song.id} 
                    className="song-item"
                    onClick={() => onTrackSelect(song)}
                  >
                    <img
                      src={song.image}
                      alt={song.title}
                      className="song-image"
                    />
                    <div className="song-info">
                      <h4 className="song-title">{song.title}</h4>
                      <p className="song-artist">{song.artist}</p>
                      <span className="song-language">{song.language}</span>
                    </div>
                    <span className="song-duration">{song.duration}</span>
                    <button className="play-btn">
                      <FiPlay />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {Object.values(searchResults).every(arr => arr.length === 0) && (
            <div className="no-results">
              <p>No results found for "{searchQuery}"</p>
              <div className="suggestions">
                <p>Try searching for:</p>
                <ul>
                  <li>Song titles</li>
                  <li>Artist names</li>
                  <li>Languages (English, Hindi, Telugu, etc.)</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="search-suggestions">
          <h3>Popular Searches</h3>
          <div className="suggestions-grid">
            {mockData.languages.map((language, index) => (
              <div key={index} className="suggestion-card">
                <FiGlobe className="suggestion-icon" />
                <span>{language} Music</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;