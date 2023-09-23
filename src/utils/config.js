import Constants from 'expo-constants'

const APOLLO_URI = Constants.expoConfig.extra.APOLLO_URI
const ENV = Constants.expoConfig.extra.ENV

export const config = {
  APOLLO_URI,
  ENV,
}
