import { useState } from 'react'
import useRepositories from '../../hooks/useRepositories'
import { useDebounce } from 'use-debounce'
import FilterContainer from './FilterContainer'
import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
  const [sortCriteria, setSortCriteria] = useState('')
  const [keyword, setKeyword] = useState('')
  const [debouncedKeyword] = useDebounce(keyword, 500)

  const { repositories, error, loading } = useRepositories(
    sortCriteria.orderBy,
    sortCriteria.orderDirection,
    debouncedKeyword
  )

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria)
  }

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
        error={error}
        loading={loading}
      />
    </>
  )
}

export default RepositoryList
