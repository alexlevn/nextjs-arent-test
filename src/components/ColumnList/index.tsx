/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

interface IColumnData {
  image: string
  description: string
  tags: string
  time: string
}

const item: IColumnData = {
  image: './images/column_1.png',
  description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  tags: '#魚料理  #和食  #DHA',
  time: '2021.05.17   23:25',
}
const arrItems: IColumnData[] = Array(8)
  .fill(0)
  .map((_, index) => {
    return { ...item, image: `./images/column_${index + 1}.png` }
  })

const ColumnList = () => {
  const [data, setData] = useState<IColumnData[]>(arrItems)
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative">
              <img
                src={item.image}
                alt="column"
                className="w-full h-48 object-cover"
              />

              <div className="absolute bottom-0 left-0  py-1 px-2 bg-pc_yellow ">
                <div className="text-sm text-white">{item.time}</div>
              </div>
            </div>
            <div className=" bottom-0 left-0  h-24 p-2">
              <div className="text-sm text-pc_gray ">{item.description}</div>
              <span className="text-sm text-pc_orange ">{item.tags}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center my-10 ">
        <button
          className="btn-load-more"
          onClick={() => {
            setData([...data, ...arrItems])
          }}
        >
          自分の日記をもっと見る
        </button>
      </div>
    </>
  )
}
export default ColumnList
