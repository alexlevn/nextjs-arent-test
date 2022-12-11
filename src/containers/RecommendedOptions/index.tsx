import { FC } from 'react'

interface IOption {
  title: string
  subTitle: string
}

const options: IOption[] = [
  {
    title: 'RECOMMENDED COLUMN',
    subTitle: 'オススメ',
  },
  {
    title: 'RECOMMENDED DIET',
    subTitle: 'ダイエット',
  },
  {
    title: 'RECOMMENDED BEAUTY',
    subTitle: '美容',
  },
  {
    title: 'RECOMMENDED HEALTH',
    subTitle: '健康',
  },
]

const RecommendedOptions: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-10  mt-10">
      {options.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-pc_darkest_gray text-white p-10 flex flex-col items-center justify-center text-center gap-3 "
          >
            <div className="text-2xl font-light text-pc_yellow uppercase">
              {item.title}
            </div>
            <div className="w-16 border-t border-t-white"></div>
            <div className="text-lg font-extralight">{item.subTitle}</div>
          </div>
        )
      })}
    </div>
  )
}

export default RecommendedOptions
