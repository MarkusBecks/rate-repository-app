import { gql } from '@apollo/client'
import {
  REPOSITORY_DETAILS,
  REVIEWS,
  REVIEW_INFO,
  USER_DETAILS,
} from './fragments'

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $first: Int
    $after: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      first: $first
      after: $after
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
  query GetRepository($first: Int, $after: String, $id: ID!) {
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
      reviews(first: $first, after: $after) {
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
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`
