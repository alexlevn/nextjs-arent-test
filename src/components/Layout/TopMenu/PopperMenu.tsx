import Image from 'next/legacy/image'
import { FC, useState } from 'react'

const PopperMenu: FC = () => {
  const [arrMenuItems, setArrMenuItems] = useState([
    {
      id: 1,
      title: '自分の記録',
      path: '/',
    },

    {
      id: 2,
      title: '体重グラフ',
      path: '/',
    },
    {
      id: 3,
      title: '目標',
      path: '/',
    },
    {
      id: 4,
      title: '選択中のコース',
      path: '/',
    },
    {
      id: 5,
      title: 'コラム一覧',
      path: '/',
    },
    {
      id:6,
      title: '設定',
      path: '/',
    },
  ])

  return (
    <div className="popper flex gap-2 items-center h-14">
      <div className="cursor-pointer relative ">
        <Image src="/images/bars.svg" alt="menu" width={30} height={30} />
      </div>

      <div className="popper-menu">
        <div className="flex flex-col items-end">
          <Image src="/images/close.svg" alt="menu" width={30} height={30}  className="cursor-pointer" />
          <div className="w-full">
            {arrMenuItems.map((item) => (
              <div className="popper-menu-item bg-pc_light_gray" key={item.id}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default PopperMenu
