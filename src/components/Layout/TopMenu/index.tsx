import Image from 'next/legacy/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface ITypTopMenuItems {
  id: number
  name: string
  title: string
  link: string
  icon: string
  bagde?: number
}
const TopMenu: FC = () => {
  const router = useRouter()
  const arrTopMenuItems: ITypTopMenuItems[] = [
    {
      id: 1,
      name: 'Profile',
      title: '自分の記録',
      link: '/profile',
      icon: '/images/profile.svg',
    },
    {
      id: 2,
      name: 'Challenge',
      title: 'チャレンジ',
      link: '/challenge',
      icon: '/images/challenge.svg',
    },
    {
      id: 3,
      name: 'News',
      title: 'お知らせ',
      link: '/news',
      icon: '/images/news.svg',
      bagde: 3,
    },
  ]
  return (
    <div className="w-full bg-pc_gray">
      <div className="max-w-desktop flex gap-10 justify-between">
        <div 
        className="logo"
        onClick={() => router.push('/')}
        >
          <Image
            src="/images/healthy_logo.svg"
            alt="logo"
            width={144}
            height={100}
          />
        </div>

        {/* right header*/}
        <div className="right flex gap-2">
          {/* menu */}
          <div className="flex gap-5 items-center">
            {arrTopMenuItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-2 items-center h-14"
                onClick={() => router.push(item.link)}
              >
                <div
                  className={
                    'pt-1 cursor-pointer ' + (item.bagde ? ' relative' : '')
                  }
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  {item.bagde && (
                    <div className="bg-pc_orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center -top-1 -right-1 absolute ">
                      {item.bagde}
                    </div>
                  )}
                </div>

                <div className="text-white text-sm">{item.title}</div>
              </div>
            ))}

            {/* poper menu */}
            <div className="flex gap-2 items-center h-14">
              <div className="cursor-pointer relative">
                <Image
                  src="/images/bars.svg"
                  alt="menu"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
