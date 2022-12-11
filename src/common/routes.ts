interface IRoute {
    id: number
    name: string
    title: string
    path: string
    icon: string
    bagde?: number
}


const MY_RECORDS = "/my-records"
const CHALLENGE = "/challenge"
const NEWS = "/news"


export const ROURES: IRoute[] = [
    {
        id: 1,
        name: 'Profile',
        title: '自分の記録',
        path: MY_RECORDS,
        icon: '/images/profile.svg',
    },
    {
        id: 2,
        name: 'Challenge',
        title: 'チャレンジ',
        path: CHALLENGE,
        icon: '/images/challenge.svg',
    },
    {
        id: 3,
        name: 'News',
        title: 'お知らせ',
        path: NEWS,
        icon: '/images/news.svg',
        bagde: 3,
    },
]