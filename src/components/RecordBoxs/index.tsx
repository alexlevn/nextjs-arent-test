/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { IRecord } from './interface'
import styles from './index.module.css'

const arrRecords: IRecord[] = [
  {
    image: '',
    title: 'Morning',
    subTitle: '2021/10/10',
  },
  {
    image: '',
    title: 'Morning',
    subTitle: '2021/10/10',
  },
  {
    image: '',
    title: 'Morning',
    subTitle: '2021/10/10',
  },
]
const RecordBoxs: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {arrRecords.map((item, index) => (
        <div
          key={index}
          className="h-72 bg-cover border-[24px] border-pc_yellow flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url('/images/record_bg.png')`,
          }}
        >
          <p className={styles.record_title}>{item.title}</p>
          <p className={styles.sub_title}>{item.subTitle}</p>
        </div>
      ))}
    </div>
  )
}

export default RecordBoxs
