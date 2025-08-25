export interface Audiobook {
    authors: Authors[],
    available_markets: [],
    copyrights: Copyrights[],
    description: string,
    html_description: string,
    edition: string,
    explicit: boolean,
    external_urls: {
        spotify: string
    },
    href: string,
    id: string,
    images: Images[],
    languages: [],
    media_type: string,
    name: string,
    narrators: Narrators[],
    publisher: string,
    type: string,
    uri: string,
    total_chapters: number,
    chapters: any,
}

export interface Authors {
    name: string
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

export interface Narrators{
    name: string
}
