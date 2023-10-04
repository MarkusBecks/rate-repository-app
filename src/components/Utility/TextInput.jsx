/* eslint-disable no-unused-vars */
import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../../themes/theme'

const styles = StyleSheet.create({
  input: {
    borderColor: '#e1e4e8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 4,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, styles.text, style]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
