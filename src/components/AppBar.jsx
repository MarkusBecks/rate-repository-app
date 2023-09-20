import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  appBarContainer: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingBottom: Constants.statusBarHeight / 2,
    backgroundColor: theme.colors.appBarBg,
    display: 'flex',
  },
  scrollViewContent: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-around',
    flexGrow: 1,
  },
})

const AppBar = () => {
  return (
    <View style={styles.appBarContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        horizontal={true}
      >
        <AppBarTab title="Repositories" to="/" />
        <AppBarTab title="Sign In" to="/signin" />
        <AppBarTab title="Repositories" to="/" />
        <AppBarTab title="Sign In" to="/signin" />
        <AppBarTab title="Sign In" to="/signin" />
        <AppBarTab title="Sign In" to="/signin" />
        <AppBarTab title="Sign In" to="/signin" />
      </ScrollView>
    </View>
  )
}

export default AppBar
