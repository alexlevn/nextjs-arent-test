import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const MyRecords = dynamic(() => import('src/containers/MyRecords'), {
  ssr: false,
})

const MyRecordsPage: NextPage = () => {
  return <MyRecords />
}

export default MyRecordsPage
