import Image from 'next/legacy/image'
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
  const arrTopMenuItems: ITypTopMenuItems[] = [
    {
      id: 1,
      name: 'Profile',
      title: 'Home',
      link: '/',
      icon: '/images/profile.svg',
    },
    {
      id: 2,
      name: 'Challenge',
      title: 'Home',
      link: '/challenge',
      icon: '/images/challenge.svg',
    },
    {
      id: 3,
      name: 'News',
      title: 'Home',
      link: '/news',
      icon: '/images/news.svg',
      bagde: 3,
    },
  ]
  return (
    <div className="w-full bg-pc_gray">
      <div className="max-w-desktop flex gap-10 my-3 justify-between">
        <div className="logo">
          <Image
            src="/images/healthy_logo.svg"
            alt="logo"
            width={150}
            height={100}
          />
        </div>

        {/* right header*/}
        <div className="right flex gap-2">
          <div className="flex gap-5 items-center">
            {arrTopMenuItems.map((item) => (
              <div key={item.id} className="flex gap-2 items-center">
                <div
                  className={
                    'cursor-pointer ' + (item.bagde ? ' relative' : '')
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

                <div className="text-white text-sm">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
