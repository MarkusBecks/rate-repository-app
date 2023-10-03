import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  searchInput: {
    elevation: 4,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    flexGrow: 1,
    alignSelf: 'flex-start',
  },
})

const SearchInput = ({ onChangeText, value }) => {
  return (
    <TextInput
      style={styles.searchInput}
      key="search"
      placeholder="Search..."
      onChangeText={onChangeText}
      value={value}
    ></TextInput>
  )
}

export default SearchInput
