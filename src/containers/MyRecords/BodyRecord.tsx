import { FC, useState } from 'react'

const recordItem = {
  name: '家事全般（立位・軽い）',
  kcal: Math.floor(Math.random() * 100),
  time: Math.floor(Math.random() * 20),
}
const arrItems = Array(50).fill(recordItem)

const BodyRecord: FC = () => {
  const [data, setData] = useState(arrItems)
  return (
    <div className="bg-pc_gray text-white p-5">
      <h2 className="uppercase font-sans">Body Record</h2>
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

export default BodyRecord
