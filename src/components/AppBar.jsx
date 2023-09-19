import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  flexContainer: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingBottom: Constants.statusBarHeight / 2,
    paddingHorizontal: Constants.statusBarHeight / 2,
    backgroundColor: theme.colors.appBarBg,
    opacity: 0.95,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBarTab title="Repositories" />
      <AppBarTab title="Secondary tab" />
    </View>
  )
}

export default AppBar
