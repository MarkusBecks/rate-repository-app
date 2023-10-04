/* eslint-disable no-unused-vars */
import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from './Utility/FormikTextInput'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import theme from '../themes/theme'
import Text from './Utility/Text'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignin'

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
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

export const SignInContainer = ({ onSubmit }) => {
  const submitHandler = async (values) => {
    // Call the onSubmit prop with just the form values
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
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
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text color="white" fontWeight="bold" fontSize="subheading">
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const data = await signIn({ username, password })
      if (data) {
        // Navigate user back to repositoriesList
        navigate('/')
      } else {
        console.log('Response does not contain accessToken.')
      }
    } catch (e) {
      console.log(e)
    }
  }
  return <SignInContainer onSubmit={onSubmit} />
}

export default SignIn
