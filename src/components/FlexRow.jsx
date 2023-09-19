import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
})

const FlexRow = (props) => {
  return <View style={styles.flexRow} {...props} />
}

export default FlexRow
