import { FC, useState } from 'react'

interface IRecord {
  name: string
  kcal: number
  time: number
}

const recordItem: IRecord = {
  name: '家事全般（立位・軽い）',
  kcal: 345,
  time: 12,
}

const arrItems = Array(50).fill(recordItem)

const MyExercise: FC = () => {
  const [data, _] = useState<IRecord[]>(arrItems)
  return (
    <div className="bg-pc_gray text-white p-5 ">
      <h2 className="w-1/4 flex justify-between items-center uppercase font-sans text-sm mb-3">
        My <br /> Exercise
        <span className="text-2xl font-extralight">2022.12.12</span>
      </h2>
      
      <div className="grid grid-cols-2 gap-x-10 max-h-56 overflow-auto pr-6">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-2 border-b font-sans border-white py-1 "
            >
              *{' '}
              <div className="flex-1">
                <div className="">{item.name}</div>
                <div className="text-pc_yellow">{item.kcal} kcal</div>
              </div>
              <p className="h6 text-pc_yellow">{item.time} min</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyExercise
