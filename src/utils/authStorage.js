import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  async getAccessToken() {
    // Get the access token for the storage
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`
    )
    console.log('AuthStorage getAccessToken: ', accessToken)
    return accessToken ? JSON.parse(accessToken) : []
  }

  async setAccessToken(token) {
    // Add the access token to the storage
    const currentToken = await this.getAccessToken()
    const newToken = [...currentToken, token]

    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(newToken)
    )
    console.log('AuthStorage setAccessToken: ', newToken)
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`)
    console.log('AuthStorage removeAccessToken')
  }
}

export default AuthStorage
