export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
    token:null,
    top:[],
    artists:[],
    played:[]
}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists,
            };

        case "SET_TOP":
            return {
                ...state,
                top:action.top
            }
        case "SET_ARTISTS":
            return {
                ...state,
                artists:action.artists
            }
        case "SET_PLAYED":
            return {
                ...state,
                played:action.played
            } 
        default:
            return state;
    }
}

export default reducer;