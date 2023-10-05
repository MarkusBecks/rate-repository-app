import { gql } from '@apollo/client'
import {
  REPOSITORY_DETAILS,
  REPO_WITH_URL,
  REVIEWS,
  REVIEW_INFO,
  USER_DETAILS,
} from './fragments'

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`

export const ME = gql`
  query me($includeReviews: Boolean = false) {
    me {
      ...UserDetails
      ...Reviews @include(if: $includeReviews)
    }
  }
  ${USER_DETAILS}
  ${REVIEWS}
`

export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    repository(id: $id) {
      id
      ownerAvatarUrl
      name
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`
