import { Show } from "./show"
export interface Episode {
    audio_preview_url: string,
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
    is_externally_hosted: boolean,
    is_playable: boolean,
    language: string,
    languages: [],
    name: string,
    release_date: number,
    release_date_precision: string
    resume_point: {
        fully_played: boolean
        resume_position_ms: number
    },
    restrictions: {
        reason: string
    },
    show: Show[],
}

export interface Images {
    url: string
    height: number
    width: number

}