import React, { useState } from 'react';
import { FiPlay, FiPause, FiPlus, FiTrash2, FiMusic } from 'react-icons/fi';
import './Library.css';

const Library = ({ onTrackSelect, setPlaylist }) => {
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: 'Favorites',
      songs: [
        {
          id: 1,
          title: 'Shape of You',
          artist: 'Ed Sheeran',
          duration: '3:53',
          image: '/assets/images/albums/english/ed-sheeran/shapeofyou.jpg',
          audio: '/assets/audio/english/ed-sheeran/shapeofyou.mp3'
        },
        {
          id: 2,
          title: 'Tum Hi Ho',
          artist: 'Arijit Singh',
          duration: '4:22',
          image: '/assets/images/albums/hindi/arijit-singh/tumhiho.jpg',
          audio: '/assets/audio/hindi/arijit-singh/tumhiho.mp3'
        }
      ]
    }
  ]);

  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [showNewPlaylistInput, setShowNewPlaylistInput] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [showAddSongs, setShowAddSongs] = useState(false);

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      const newPlaylist = {
        id: playlists.length + 1,
        name: newPlaylistName,
        songs: []
      };
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylistName('');
      setShowNewPlaylistInput(false);
    }
  };

  const handleDeletePlaylist = (playlistId) => {
    setPlaylists(playlists.filter(playlist => playlist.id !== playlistId));
    if (selectedPlaylist?.id === playlistId) {
      setSelectedPlaylist(null);
    }
  };

  const handlePlayPlaylist = (playlist) => {
    setPlaylist(playlist.songs);
    if (playlist.songs.length > 0) {
      onTrackSelect(playlist.songs[0]);
    }
  };

  const handleAddToPlaylist = (playlistId) => {
    setSelectedPlaylist(playlists.find(p => p.id === playlistId));
    setShowAddSongs(true);
  };

  const handleAddSong = (song) => {
    if (selectedPlaylist) {
      const updatedPlaylists = playlists.map(p => {
        if (p.id === selectedPlaylist.id) {
          return {
            ...p,
            songs: [...p.songs, song]
          };
        }
        return p;
      });
      setPlaylists(updatedPlaylists);
      setSelectedPlaylist(updatedPlaylists.find(p => p.id === selectedPlaylist.id));
    }
  };

  return (
    <div className="library">
      <div className="library-header">
        <h2 className="section-title">Your Library</h2>
        <button 
          className="create-playlist-btn"
          onClick={() => setShowNewPlaylistInput(true)}
        >
          <FiPlus /> Create Playlist
        </button>
      </div>

      {showNewPlaylistInput && (
        <div className="new-playlist-input">
          <input
            type="text"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
            placeholder="Enter playlist name"
            className="playlist-input"
          />
          <button 
            className="save-playlist-btn"
            onClick={handleCreatePlaylist}
          >
            Save
          </button>
          <button 
            className="cancel-playlist-btn"
            onClick={() => {
              setShowNewPlaylistInput(false);
              setNewPlaylistName('');
            }}
          >
            Cancel
          </button>
        </div>
      )}

      <div className="playlists-grid">
        {playlists.map(playlist => (
          <div key={playlist.id} className="playlist-card">
            <div className="playlist-header">
              <h3 className="playlist-name">{playlist.name}</h3>
              <div className="playlist-actions">
                <button 
                  className="add-songs-btn"
                  onClick={() => handleAddToPlaylist(playlist.id)}
                >
                  <FiPlus />
                </button>
                <button 
                  className="delete-playlist-btn"
                  onClick={() => handleDeletePlaylist(playlist.id)}
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
            <div className="playlist-info">
              <span className="song-count">{playlist.songs.length} songs</span>
              <button 
                className="play-playlist-btn"
                onClick={() => handlePlayPlaylist(playlist)}
                disabled={playlist.songs.length === 0}
              >
                <FiPlay /> Play All
              </button>
            </div>
            <div className="playlist-songs">
              {playlist.songs.map(song => (
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
                  </div>
                  <span className="song-duration">{song.duration}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showAddSongs && selectedPlaylist && (
        <div className="add-songs-modal">
          <div className="modal-content">
            <h3>Add Songs to {selectedPlaylist.name}</h3>
            <div className="available-songs">
              {/* Add your available songs list here */}
              <div className="song-item" onClick={() => handleAddSong({
                id: 3,
                title: 'New Song',
                artist: 'New Artist',
                duration: '3:30',
                image: '/assets/images/albums/default.jpg',
                audio: '/assets/audio/default.mp3'
              })}>
                <FiMusic className="song-icon" />
                <div className="song-info">
                  <h4 className="song-title">New Song</h4>
                  <p className="song-artist">New Artist</p>
                </div>
                <button className="add-btn">
                  <FiPlus />
                </button>
              </div>
            </div>
            <button 
              className="close-modal-btn"
              onClick={() => {
                setShowAddSongs(false);
                setSelectedPlaylist(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;