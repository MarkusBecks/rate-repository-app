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
export const ADDED_REVIEW = gql`
  fragment AddedReview on Review {
    user {
      username
    }
    repository {
      name
      fullName
      ownerName
    }
    rating
    text
  }
`

export const REVIEWS = gql`
  fragment Reviews on User {
    reviews {
      edges {
        node {
          createdAt
          id
          rating
          text
          repository {
            id
            fullName
            ownerName
          }
        }
      }
    }
  }
`
