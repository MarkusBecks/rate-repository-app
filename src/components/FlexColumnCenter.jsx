import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
})

const FlexColumnCenter = (props) => {
  return <View style={styles.flexColumn} {...props} />
}

export default FlexColumnCenter
