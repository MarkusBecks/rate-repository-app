import { useState } from 'react'
import useRepositories from '../../hooks/useRepositories'
import { useDebounce } from 'use-debounce'
import FilterContainer from './FilterContainer'
import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
  const [sortCriteria, setSortCriteria] = useState('')
  const [keyword, setKeyword] = useState('')
  const [debouncedKeyword] = useDebounce(keyword, 500)

  const { repositories, fetchMore, error, loading } = useRepositories({
    orderBy: sortCriteria.orderBy,
    orderDirection: sortCriteria.orderDirection,
    searchKeyword: debouncedKeyword,
    first: 5,
  })

  const onEndReach = () => {
    fetchMore()
    console.log('You have reached the end of the list')
  }

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria)
  }

  // Use keyword instead of debouncedKeyword for responsive updates
  // in the SearchInput component rendered by FilterContainer, while
  // still debouncing API requests with "searchKeyword: debouncedKeyword"
  // as the variable for useRepositories hook
  return (
    <>
      <FilterContainer
        sortCriteria={sortCriteria}
        handleSortChange={handleSortChange}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <RepositoryListContainer
        repositories={repositories}
        onEndReach={onEndReach}
        error={error}
        loading={loading}
      />
    </>
  )
}

export default RepositoryList
