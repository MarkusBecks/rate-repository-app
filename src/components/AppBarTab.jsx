import { View, StyleSheet, Pressable } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  tab: {
    paddingLeft: 10,
    paddingRight: 10,
  },
})

const AppBarTab = ({ title, to }) => {
  return (
    <View style={styles.tab}>
      <Pressable>
        <Link to={to}>
          <Text fontWeight="bold" color="white">
            {title}
          </Text>
        </Link>
      </Pressable>
    </View>
  )
}

export default AppBarTab
