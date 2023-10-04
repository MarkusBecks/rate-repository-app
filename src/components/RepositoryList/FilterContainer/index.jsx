import SortingMenu from './SortingMenu'
import SearchInput from './SearchInput'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  filterContainer: {
    padding: 15,
    backgroundColor: 'snow',
    display: 'flex',
    flexDirection: 'row',
  },
})

const FilterContainer = ({
  sortCriteria,
  handleSortChange,
  keyword,
  setKeyword,
}) => {
  return (
    <View style={styles.filterContainer}>
      <SortingMenu selectedOption={sortCriteria} onSelect={handleSortChange} />
      <SearchInput value={keyword} onChangeText={setKeyword} />
    </View>
  )
}

export default FilterContainer
