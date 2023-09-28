import { Image, View, StyleSheet, Button } from 'react-native'

import theme from '../../themes/theme'
import Text from '../Text'
import Subheading from '../Subheading'
import FlexRow from '../FlexRow'
import FlexColumnCenter from '../FlexColumnCenter'

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
  repositoryContainer: {
    backgroundColor: 'white',
    padding: 20,
    paddingRight: 30,
    display: 'flex',
  },
  flexColumnPadding: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    marginTop: 10,
    color: theme.colors.textSecondary,
  },
  language: {
    padding: 8,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 15,
  },
  numberHeadings: {
    marginTop: 5,
    color: theme.colors.textSecondary,
  },
})

const formatNumber = (number) => {
  if (number >= 1000) {
    const thousands = number / 1000 // get thousands
    return thousands.toFixed(1) + 'k' // add one decimal and append 'k'
  }
  return number.toString()
}

const RepositoryItem = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repository

  return (
    <View testID="repositoryItem" style={styles.repositoryContainer}>
      <FlexRow>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.img} />
        <View style={styles.flexColumnPadding}>
          <Subheading>{fullName}</Subheading>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </FlexRow>
      <FlexRow>
        <FlexColumnCenter>
          <Subheading>{formatNumber(stargazersCount)}</Subheading>
          <Text style={styles.numberHeadings}>Stars</Text>
        </FlexColumnCenter>
        <FlexColumnCenter>
          <Subheading>{formatNumber(forksCount)}</Subheading>
          <Text style={styles.numberHeadings}>Forks</Text>
        </FlexColumnCenter>
        <FlexColumnCenter>
          <Subheading>{ratingAverage}</Subheading>
          <Text style={styles.numberHeadings}>Rating</Text>
        </FlexColumnCenter>
        <FlexColumnCenter>
          <Subheading>{reviewCount}</Subheading>
          <Text style={styles.numberHeadings}>Reviews</Text>
        </FlexColumnCenter>
      </FlexRow>
    </View>
  )
}

export default RepositoryItem
