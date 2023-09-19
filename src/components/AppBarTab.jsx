import { View, StyleSheet, Pressable } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  flexTab: {},
})

const AppBarTab = ({ title }) => {
  return (
    <View style={styles.flexTab}>
      <Pressable>
        <Text fontWeight="bold" color="white">
          {title}
        </Text>
      </Pressable>
    </View>
  )
}

export default AppBarTab
