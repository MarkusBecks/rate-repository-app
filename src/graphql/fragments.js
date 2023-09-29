import { gql } from '@apollo/client'

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    reviewCount
    ratingAverage
    forksCount
    stargazersCount
    description
    language
    ownerAvatarUrl
  }
`
export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
    reviewCount
    createdAt
  }
`

export const REPO_WITH_URL = gql`
  fragment RepoWithUrl on Repository {
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
  }
`

export const REVIEW_INFO = gql`
  fragment ReviewInfo on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`
