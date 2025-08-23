

import React from 'react';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward, FiShuffle, FiRepeat, FiVolume2 } from 'react-icons/fi';
import './MusicPlayer.css';

const MusicPlayer = ({ 
  currentTrack, 
  isPlaying, 
  onPlayPause, 
  onNext, 
  onPrevious,
  currentTime,
  duration,
  onSeek,
  volume,
  onVolumeChange
}) => {
  const handleProgressClick = (e) => {
    if (duration && duration > 0) {
      const rect = e.target.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * duration;
      onSeek({ target: { value: newTime.toString() } });
    }
  };

  const formatTime = (time) => {
    if (isNaN(time) || time === Infinity) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Safely extract track information with fallbacks
  const trackImage = currentTrack?.album?.images?.[0]?.url || 
                    currentTrack?.image || 
                    'https://via.placeholder.com/60';
  
  const trackName = currentTrack?.name || 
                   currentTrack?.title || 
                   'No track playing';
  
  const artistName = currentTrack?.artists?.[0]?.name || 
                    currentTrack?.artist;

  return (
    <div className="music-player">
      <div className="player-left">
        <img
          src={trackImage}
          alt={trackName}
          className="current-track-image"
        />
        <div className="track-info">
          <h3 className="track-title">{trackName}</h3>
          <p className="artist-name">{artistName}</p>
        </div>
      </div>
      
      <div className="player-center">
        <div className="player-controls">
          <button className="control-btn">
            <FiShuffle />
          </button>
          <button className="control-btn" onClick={onPrevious}>
            <FiSkipBack />
          </button>
          <button className="play-btn" onClick={onPlayPause}>
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
          <button className="control-btn" onClick={onNext}>
            <FiSkipForward />
          </button>
          <button className="control-btn">
            <FiRepeat />
          </button>
        </div>
        
        <div className="progress-bar">
          <span className="time">{formatTime(currentTime)}</span>
          <div className="progress" onClick={handleProgressClick}>
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="time">{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="player-right">
        <button className="control-btn">
          <FiVolume2 />
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={onVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;