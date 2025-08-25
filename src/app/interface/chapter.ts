import { Audiobook } from "./audiobook"
export interface Chapter {
    audio_preview_url: string,
    available_markets: [],
    description: string,
    html_description: string,
    duration_ms: number,
    explicit: boolean,
    external_urls: {
        spotify: string
    },
    href: string,
    id: string,
    images: Images[],
    is_playable: boolean,
    languages: [],
    name: string,
    release_date: number,
    release_date_precision: string,
    resume_point: {
        fully_played: boolean
        resume_position_ms: number
    },
    type: string,
    uri: string,
    restrictions: {
        reason: string

    },
    audiobook: Audiobook[],

}

export interface Images {
    url: string
    height: number
    width: number

}
