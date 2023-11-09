import {spotify} from '@/config/axios'

export const spotifyUrls = {
    GET_PRESENT_PLAYING: 'me/player/currently-playing',
}

/** get present playing song spotify */
const get_spotify_profile = async () => {
    return await spotify.get(spotifyUrls.GET_PRESENT_PLAYING)
}

export { get_spotify_profile }