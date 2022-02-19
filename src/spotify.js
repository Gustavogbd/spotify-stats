export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = 'http://localhost:3000/';
const clientId = '8d0a83dea9464b8e8ef6452f0facc1ca';
//const clientSecret = '8e021bad7ea842a1ac1d475bb333a15d';

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

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;