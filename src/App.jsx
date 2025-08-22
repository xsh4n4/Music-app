

import React, { useState, useRef, useEffect } from 'react';
import { FiHome, FiSearch, FiMusic, FiPlay, FiPause, FiSkipBack, FiSkipForward, FiShuffle, FiRepeat } from 'react-icons/fi';
import Home from './components/Home';
import Search from './components/Search';
import Library from './components/Library';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

class AudioController {
  constructor() {
    this.audio = new Audio();
    this.isChangingTrack = false;
    this.currentTrack = null;
    this.isPlaying = false;
    this.volume = 0.7;
    
    this.audio.volume = this.volume;
  }

  async setTrack(track, shouldPlay = false) {
    this.isChangingTrack = true;
    this.currentTrack = track;
    
    try {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio.src = track.audio;
      
      await new Promise((resolve) => {
        const handleCanPlay = () => {
          this.audio.removeEventListener('canplay', handleCanPlay);
          resolve();
        };
        this.audio.addEventListener('canplay', handleCanPlay);
        this.audio.load();
      });

      this.isChangingTrack = false;
      
      if (shouldPlay) {
        await this.play();
      }
    } catch (error) {
      console.error('Error setting track:', error);
      this.isPlaying = false;
    }
  }

  async play() {
    if (this.isChangingTrack) return;
    
    try {
      await this.audio.play();
      this.isPlaying = true;
    } catch (error) {
      console.error('Error playing:', error);
      this.isPlaying = false;
    }
  }

  pause() {
    if (this.isChangingTrack) return;
    
    this.audio.pause();
    this.isPlaying = false;
  }

  setVolume(volume) {
    this.volume = volume;
    this.audio.volume = volume;
  }

  seek(time) {
    this.audio.currentTime = time;
  }

  cleanup() {
    this.audio.pause();
    this.audio.src = '';
  }
}

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [playlist, setPlaylist] = useState([]);
  const [activeTab, setActiveTab] = useState('home');
  const audioControllerRef = useRef(new AudioController());

  useEffect(() => {
    const controller = audioControllerRef.current;
    
    // Update UI state when audio time updates
    const handleTimeUpdate = () => {
      setCurrentTime(controller.audio.currentTime);
      setDuration(controller.audio.duration || 0);
    };

    // Update UI state when play state changes
    const handlePlayStateChange = () => {
      setIsPlaying(controller.isPlaying);
    };

    controller.audio.addEventListener('timeupdate', handleTimeUpdate);
    controller.audio.addEventListener('play', handlePlayStateChange);
    controller.audio.addEventListener('pause', handlePlayStateChange);
    controller.audio.addEventListener('ended', handleNext);

    return () => {
      controller.audio.removeEventListener('timeupdate', handleTimeUpdate);
      controller.audio.removeEventListener('play', handlePlayStateChange);
      controller.audio.removeEventListener('pause', handlePlayStateChange);
      controller.audio.removeEventListener('ended', handleNext);
      controller.cleanup();
    };
  }, []);

  useEffect(() => {
    audioControllerRef.current.setVolume(volume);
  }, [volume]);

  const handleTrackSelect = async (track) => {
    setCurrentTrack(track);
    await audioControllerRef.current.setTrack(track, true);
  };

  const handlePlayPause = async () => {
    const controller = audioControllerRef.current;
    if (controller.isPlaying) {
      controller.pause();
    } else {
      await controller.play();
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audioControllerRef.current.seek(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleNext = () => {
    if (playlist.length > 0 && currentTrack) {
      const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
      const nextIndex = (currentIndex + 1) % playlist.length;
      handleTrackSelect(playlist[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (playlist.length > 0 && currentTrack) {
      const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
      const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
      handleTrackSelect(playlist[prevIndex]);
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

