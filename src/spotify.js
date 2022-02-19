export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = 'http://localhost:3000/';
const clientId = '8d0a83dea9464b8e8ef6452f0facc1ca';

const scopes = [
    'user-read-recently-played',
    'user-top-read',
    'user-read-private',
    'user-read-email',
    'user-follow-read',
    'user-library-read',
    'user-read-playback-position',
    'playlist-read-private'
];

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

