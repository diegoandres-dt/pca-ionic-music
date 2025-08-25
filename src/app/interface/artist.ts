export interface Artist {
    external_urls: {
        spotify: string
    },
    followers: {
        href: string
        total: number
    },
    genres: [],
    href: string,
    id: string,
    images: Images[],
    name: string,
    popularity: number,
    type: string,
    uri: string

}

export interface Images {
    url: string
    height: number
    width: number

}
