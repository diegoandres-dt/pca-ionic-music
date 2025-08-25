export interface Category {
    href: string,
    icons: Icons[],
    id: string,
    name: string,
}

export interface Icons {
    url: string
    height: number
    width: number
}