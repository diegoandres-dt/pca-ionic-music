import { Episode } from "./episode"
export interface Show {
    available_markets: [],
    copyrights: Copyrights[],
    description: string
    html_description: string
    explicit: boolean,
    external_urls: {
        spotify: string,
    },
    href: string,
    id: string,
    images: Images[],
    is_externally_hosted: boolean,
    languages: [],
    media_type: string,
    name: string,
    publisher: string,
    type: string,
    uri: string,
    total_episodes: number,
    episodes: Episode[],
}

export interface Copyrights {
    text: string
    type: string
}

export interface Images {
    url: string
    height: number
    width: number
}

