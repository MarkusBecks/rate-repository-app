import { View, StyleSheet, Pressable } from 'react-native'
import { Link, useNavigate } from 'react-router-native'
import Text from '../Utility/Text'
import useSignOut from '../../hooks/useSignOut'
import ErrorMessage from '../Utility/ErrorMessage'
import Spinner from '../Utility/Spinner'
import { useAuth } from '../../contexts/AuthContext'

const styles = StyleSheet.create({
  tab: {
    paddingLeft: 10,
    paddingRight: 10,
  },
})

/* Render a tab based on user's authentication status */
const AuthenticationTab = () => {
  const { signOut } = useSignOut()
  // Retrieve user's login status
  const { data, loading, error } = useAuth()
  const navigate = useNavigate()
  const isLoggedIn = data?.me
  console.log('data ', data)

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  // sign user out and navigate back to repositories
  const handleSignOut = async () => {
    await signOut()
    navigate('/')
    console.log('signOut')
  }

  return isLoggedIn ? (
    <View style={styles.tab}>
      <Pressable onPress={handleSignOut}>
        <Text fontWeight="bold" color="white">
          Sign Out
        </Text>
      </Pressable>
    </View>
  ) : (
    <View style={styles.tab}>
      <Pressable>
        <Link to="/signin">
          <Text fontWeight="bold" color="white">
            Sign In
          </Text>
        </Link>
      </Pressable>
    </View>
  )
}

export default AuthenticationTab
