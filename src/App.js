import Login from './components/Login';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from 'react';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Dashboard from './components/Dashboard';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type:"SET_TOKEN",
        token:_token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {

        dispatch({
          type:"SET_USER",
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getMyTopTracks().then((top) => {
        dispatch({
          type: "SET_TOP",
          top: top
        })
      })

      spotify.getMyTopArtists().then((artists) => {
        dispatch({
          type: "SET_ARTISTS",
          artists: artists
        })
      })

      spotify.getMyRecentlyPlayedTracks().then((played) => {
        dispatch({
          type: "SET_PLAYED",
          played: played
        })
      })
    }
  }, []);

  return (
    <div>
      { token ? (<Dashboard spotify={spotify} />) : (<Login />)}
    </div>
  );
}

export default App;
