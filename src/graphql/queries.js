import { gql } from '@apollo/client'
import {
  REPOSITORY_DETAILS,
  USER_DETAILS,
  REPO_WITH_URL,
  REVIEW_INFO,
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
  query {
    me {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`

export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    repository(id: $id) {
      ...RepoWithUrl
      reviews {
        edges {
          node {
            ...ReviewInfo
          }
        }
      }
    }
  }
  ${REPO_WITH_URL}
  ${REVIEW_INFO}
`
