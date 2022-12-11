import { FC } from 'react'
import Chart from 'src/components/Chart'

const BodyRecord: FC = () => {
  return (
    <div className="bg-pc_gray text-white p-5">
      <h2 className="w-1/4 flex justify-between items-center uppercase font-sans text-sm mb-3">
        BODY <br /> RECORD
        <span className="text-2xl font-extralight">2022.12.12</span>
      </h2>

      <div className="bg-pc_dark_gray">
        <Chart />
      </div>
    </div>
  )
}

export default BodyRecord
