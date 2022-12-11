import { NextPage } from 'next'

import MyRecords from 'src/containers/MyRecords'
import BodyRecord from 'src/containers/MyRecords/BodyRecord'
import MyDairy from 'src/containers/MyRecords/MyDairy'
import MyExercise from 'src/containers/MyRecords/MyExercise'

const MyRecordsPage: NextPage = () => {
  return (
    <div>
      <div className="max-w-desktop mt-10">
        <MyRecords />
      </div>
      <div className="max-w-desktop mt-10">
        <BodyRecord />
      </div>
      <div className="max-w-desktop mt-10">
        <MyExercise />
      </div>
      <div className="max-w-desktop mt-10">
        <MyDairy />
      </div>
    </div>
  )
}

export default MyRecordsPage
