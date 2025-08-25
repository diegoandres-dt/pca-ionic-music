import { Album } from "./album";
import { Artist } from "./artist";
import { Audiobook } from "./audiobook";
import { Episode } from "./episode";
import { Playlist } from "./playlist";
import { Show } from "./show";
import { Track } from "./track";

export interface Search {
    tracks: Track[],
    artists: Artist[],
    albums: Album[],
    playlists: Playlist[],
    shows: Show[],
    episodes: Episode[],
    audiobooks: Audiobook[],
}
