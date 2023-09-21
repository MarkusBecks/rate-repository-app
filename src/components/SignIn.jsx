import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import theme from '../theme'
import Text from './Text'

const onSubmit = (values) => {
  console.log('Values:', values)
}

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
  },
})

const SignIn = () => {
  return (
    <Formik initialValues={{ name: '', password: '' }}>
      {({ values }) => (
        <View style={styles.formContainer}>
          <FormikTextInput name="name" placeholder="Name" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={() => onSubmit(values)}>
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
