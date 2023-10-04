import useLoginStatus from '../../hooks/useUser'
import ReviewItem from './ReviewItem'
import { FlatList } from 'react-native'

const MyReviews = () => {
  const { data } = useLoginStatus()
  const user = data?.me

  return <FlatList />
}

export default MyReviews
