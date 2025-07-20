import React, { useState, useRef, useEffect } from 'react';
import { FiHome, FiSearch, FiMusic, FiPlay, FiPause, FiSkipBack, FiSkipForward, FiShuffle, FiRepeat } from 'react-icons/fi';
import Home from './components/Home';
import Search from './components/Search';
import Library from './components/Library';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [playlist, setPlaylist] = useState([]);
  const [activeTab, setActiveTab] = useState('home');
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTrackSelect = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  const handleNext = () => {
    if (playlist.length > 0) {
      const currentIndex = playlist.findIndex(track => track.id === currentTrack?.id);
      const nextIndex = (currentIndex + 1) % playlist.length;
      setCurrentTrack(playlist[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (playlist.length > 0) {
      const currentIndex = playlist.findIndex(track => track.id === currentTrack?.id);
      const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
      setCurrentTrack(playlist[prevIndex]);
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          <h1>Music App</h1>
        </div>
        <nav className="nav-menu">
          <button 
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <FiHome /> Home
          </button>
          <button 
            className={`nav-item ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            <FiSearch /> Search
          </button>
          <button 
            className={`nav-item ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => setActiveTab('library')}
          >
            <FiMusic /> Library
          </button>
        </nav>
      </div>

      <div className="main-content">
        {activeTab === 'home' && <Home onTrackSelect={handleTrackSelect} setPlaylist={setPlaylist} />}
        {activeTab === 'search' && <Search onTrackSelect={handleTrackSelect} setPlaylist={setPlaylist} />}
        {activeTab === 'library' && <Library onTrackSelect={handleTrackSelect} setPlaylist={setPlaylist} />}
      </div>

      {currentTrack && (
        <div className="player-container">
          <audio
            ref={audioRef}
            src={currentTrack.audio}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleNext}
          />
          <MusicPlayer
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrevious={handlePrevious}
            currentTime={currentTime}
            duration={duration}
            onSeek={handleSeek}
            volume={volume}
            onVolumeChange={handleVolumeChange}
          />
        </div>
      )}
    </div>
  );
}

export default App;