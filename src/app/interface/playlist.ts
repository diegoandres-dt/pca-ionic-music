export interface Playlist {
    collaborative: boolean,
    description: string,
    external_urls: {
        spotify: string
    },
    href: string,
    id: string,
    images: Images[],
    name: string,
    owner: {
        external_urls: {
            spotify: string
        }
        href: string
        id: string
        type: string
        uri: string
        display_name: string
    },
    public: false,
    snapshot_id: string,
    tracks: any,
    type: string
    uri: string

}

export interface Images {
    url: string
    height: number
    width: number
}
