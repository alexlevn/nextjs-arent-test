import { FC } from 'react'

const Footer: FC = () => {
  const arrFooterItems = [
    {
      title: '会員登録',
      link: '#',
    },
    {
      title: '運営会社',
      link: '#',
    },
    {
      title: '利用規約',
      link: '#',
    },
    {
      title: '個人情報の取扱について',
      link: '#',
    },
    {
      title: '特定商取引法に基づく表記',
      link: '#',
    },
    {
      title: 'お問い合わせ',
      link: '#',
    },
  ]

  return (
    <div className="w-full bg-pc_gray">
      <div className="max-w-desktop flex gap-10 my-10">
        {arrFooterItems.map((item, index) => {
          return (
            <a key={index} className="text-white  cursor-pointer">
              {item.title}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
