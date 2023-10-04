/* eslint-disable no-unused-vars */
import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from './Utility/FormikTextInput'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import theme from '../themes/theme'
import Text from './Utility/Text'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignin'
import useCreateUser from '../hooks/useCreateUser'

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    backgroundColor: 'white',
    paddingVertical: 40,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 15,
    alignItems: 'center',
    elevation: 4,
  },
})

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username cannot be longer than 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password cannot be longer than 50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
})

export const SignUpContainer = ({ onSubmit }) => {
  const submitHandler = async (values) => {
    // Call the onSubmit prop with just the form values
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{ username: '', password: '', passwordConfirmation: '' }}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.formContainer}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry={true}
          />
          <FormikTextInput
            name="passwordConfirmation"
            placeholder="Password confirmation"
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text color="white" fontWeight="bold" fontSize="subheading">
              Sign up
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
}

const SignUp = () => {
  const [createUser] = useCreateUser()
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const data = await createUser({ username, password })
      if (data) {
        console.log('createUser data: ', data)
        const signInData = await signIn({ username, password })
        console.log('signInData data: ', signInData)
        navigate('/')
      } else {
        console.log('Creating user failed.')
      }
    } catch (e) {
      console.log(e)
    }
  }
  return <SignUpContainer onSubmit={onSubmit} />
}

export default SignUp
