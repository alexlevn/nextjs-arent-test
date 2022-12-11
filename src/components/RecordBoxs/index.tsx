/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { IRecord } from './interface'
import styles from './index.module.css'

const arrRecords: IRecord[] = [
  {
    image: './images/my_recommend_1.png',
    title: 'BODY RECORD',
    subTitle: '自分のカラダの記録',
  },
  {
    image: './images/my_recommend_2.png',
    title: 'MY EXERCISE',
    subTitle: '自分の運動の記録',
  },
  {
    image: './images/my_recommend_3.png',
    title: 'MY DIARY',
    subTitle: '自分の日記',
  },
]
const RecordBoxs: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {arrRecords.map((item, index) => (
        <div
          key={index}
          className="h-72 bg-cover border-[24px] border-pc_yellow flex flex-col gap-3 justify-center items-center bg-record
          "
          style={{
            backgroundImage: `url(${item.image})`,
            mixBlendMode: 'luminosity',
            
          }}
        >
          <p className={styles.record_title}>{item.title}</p>
          <p className={styles.record_subtitle}>{item.subTitle}</p>
        </div>
      ))}
    </div>
  )
}

export default RecordBoxs
