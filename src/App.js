import Login from './components/Login';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)


  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token);
    }
  }, []);


  return (
    <div>
      { token ? (<h1>dashboard</h1>) : (<Login />)}
    </div>
  );
}

export default App;
