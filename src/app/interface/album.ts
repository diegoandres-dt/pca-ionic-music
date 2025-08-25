import { Artist } from "./artist"
export interface Album {
    album_type: string,
    total_tracks: number,
    available_markets: [],
    external_urls: {
        spotify: string
    },
    href: string,
    id: string,
    images: Images[],
    name: string,
    release_date: number,
    release_date_precision: string,
    restrictions: {
        reason: string
    },
    type: string,
    uri: string,
    artists: Artist[],
    tracks: any,
    copyrights: Copyrights[],
    external_ids: {
        isrc: string
        ean: string
        upc: string
    },
    genres: [],
    label: string,
    popularity: number,

}

export interface Images {
    url: string
    height: number
    width: number

}

export interface Copyrights {
    text: string
    type: string
}
