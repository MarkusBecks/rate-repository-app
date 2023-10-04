import { View } from 'react-native'
import Text from './Text'

const ErrorMessage = ({ error }) => {
  const { message } = error
  return (
    <View>
      <Text>Error: {message}</Text>
    </View>
  )
}

export default ErrorMessage
