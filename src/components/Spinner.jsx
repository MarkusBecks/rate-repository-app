import FlexColumnCenter from './FlexColumnCenter'
import { ActivityIndicator } from 'react-native'
import Text from './Text'

const Spinner = ({ size, color }) => {
  return (
    <FlexColumnCenter>
      <ActivityIndicator size={size} color={color} />
      <Text>Loading...</Text>
    </FlexColumnCenter>
  )
}

export default Spinner
