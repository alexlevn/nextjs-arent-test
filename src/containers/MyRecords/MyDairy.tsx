import { FC, useState } from 'react'

const dairyItem = {
  date: '2021-01-01',
  time: '12:00',
  content: `私の日記の記録が一部表示されます。
  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
}

const arrItems = Array(4).fill(dairyItem)

const MyDairy: FC = () => {
  const [data, setData] = useState(arrItems)
  return (
    <div>
      <h2 className="uppercase font-sans">My Dairy</h2>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {data.map((item, index) => (
          <div key={index} className="border border-pc_dark_gray  p-4">
            <div className="flex flex-col text-pc_gray font-sans">
              <div className="uppercase">{item.date}</div>
              <div className="uppercase">{item.time}</div>
              <div className="mt-3">{item.content}</div>
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
    </div>
  )
}

export default MyDairy
