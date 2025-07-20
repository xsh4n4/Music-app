import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward, FiShuffle, FiRepeat, FiVolume2 } from 'react-icons/fi';
import './MusicPlayer.css';

const MusicPlayer = ({ currentTrack, isPlaying, onPlayPause }) => {
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      setDuration(total);
      setProgress((current / total) * 100);
    }
  };

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const rect = e.target.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={currentTrack?.preview_url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={(onPlayPause)}
      />
      
      <div className="player-left">
        <img
          src={currentTrack?.album?.images[0]?.url || 'https://via.placeholder.com/60'}
          alt={currentTrack?.name || 'Track'}
          className="current-track-image"
        />
        <div className="track-info">
          <h3 className="track-title">{currentTrack?.name || 'No track playing'}</h3>
          <p className="artist-name">{currentTrack?.artists?.[0]?.name || 'Unknown artist'}</p>
        </div>
      </div>
      
      <div className="player-center">
        <div className="player-controls">
          <button className="control-btn">
            <FiShuffle />
          </button>
          <button className="control-btn">
            <FiSkipBack />
          </button>
          <button className="play-btn" onClick={onPlayPause}>
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
          <button className="control-btn">
            <FiSkipForward />
          </button>
          <button className="control-btn">
            <FiRepeat />
          </button>
        </div>
        
        <div className="progress-bar">
          <span className="time">{formatTime(currentTime)}</span>
          <div className="progress" onClick={handleProgressClick}>
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
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
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
