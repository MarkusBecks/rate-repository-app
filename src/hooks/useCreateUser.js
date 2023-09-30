import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'

const useCreateUser = () => {
  const [addUser, result] = useMutation(CREATE_USER)

  const createUser = async ({ username, password }) => {
    const { data } = await addUser({
      variables: { user: { username, password } },
    })
    return data
  }

  return [createUser, result]
}

export default useCreateUser
