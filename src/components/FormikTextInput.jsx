import { StyleSheet } from 'react-native'
import { useField } from 'formik'
import theme from '../themes/theme'
import TextInput from './TextInput'
import Text from './Text'

const styles = StyleSheet.create({
  errorText: {
    marginHorizontal: 20,
    marginTop: 10,
    color: theme.colors.error,
  },
  errorInput: {
    borderColor: theme.colors.error,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      {showError ? (
        <>
          <TextInput
            style={styles.errorInput}
            onChangeText={(value) => helpers.setValue(value)}
            onBlur={() => helpers.setTouched(true)}
            value={field.value}
            error={showError}
            {...props}
          />
          <Text style={styles.errorText}>{meta.error}</Text>
        </>
      ) : (
        <>
          <TextInput
            onChangeText={(value) => helpers.setValue(value)}
            onBlur={() => helpers.setTouched(true)}
            value={field.value}
            error={showError}
            {...props}
          />
        </>
      )}
    </>
  )
}

export default FormikTextInput
