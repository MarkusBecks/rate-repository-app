/* eslint-disable no-unused-vars */
import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import theme from '../themes/theme'
import Text from './Text'
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

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      if (data) {
        const accessToken = data.authenticate.accessToken
        console.log('SignIn onSubmit accessToken: ', accessToken)
        console.log('Sign in')
        // Navigate user back to repositoriesList
        navigate('/')
      } else {
        console.log('Response does not contain accessToken.')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
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

export default SignIn
