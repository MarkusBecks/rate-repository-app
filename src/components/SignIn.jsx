/* eslint-disable no-unused-vars */
import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import theme from '../themes/theme'
import Text from './Text'
import * as yup from 'yup'

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
  name: yup.string().required('Name is required'),
  password: yup.string().required('Password is required'),
})

const SignIn = () => {
  const onSubmit = (values) => {
    console.log('Values:', values)
  }

  return (
    <Formik
      initialValues={{ name: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.formContainer}>
          <FormikTextInput name="name" placeholder="Name" />
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
