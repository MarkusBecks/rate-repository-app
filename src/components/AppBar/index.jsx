import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../../themes/theme'
import AppBarTab from './AppBarTab'
import AuthenticationTab from './AuthenticationTab'
import { useAuth } from '../../contexts/AuthContext'

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
  const { data } = useAuth()
  const signedIn = data?.me

  return (
    <View style={styles.appBarContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab title="Repositories" to="/" />
        {signedIn && (
          <>
            <AppBarTab title="Create a review" to="/create-review" />
            <AppBarTab title="My reviews" to="/reviews" />
          </>
        )}
        <AuthenticationTab />
        {!signedIn && <AppBarTab title="Sign up" to="/signup" />}
      </ScrollView>
    </View>
  )
}

export default AppBar
