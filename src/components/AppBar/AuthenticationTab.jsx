import { View, StyleSheet, Pressable } from 'react-native'
import { Link } from 'react-router-native'
import Text from '../Text'
import useSignOut from '../../hooks/useSignOut'
import { useQuery } from '@apollo/client'
import { ME } from '../../graphql/queries'

const styles = StyleSheet.create({
  tab: {
    paddingLeft: 10,
    paddingRight: 10,
  },
})

/* Render a tab on AppBar based on user's authentication status */
const AuthenticationTab = () => {
  const { signOut } = useSignOut()

  const { data, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })

  const isSignedIn = data?.me

  if (loading) {
    return null
  }

  const handleSignOut = async () => {
    await signOut()
    console.log('signOut')
  }

  console.log('data.me: ', isSignedIn)

  return isSignedIn ? (
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
