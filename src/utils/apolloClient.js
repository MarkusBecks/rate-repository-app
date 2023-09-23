import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { config } from './config'

const httpLink = createHttpLink({
  uri: config.APOLLO_URI,
})

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
