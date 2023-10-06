import { Image, View, StyleSheet, Pressable } from 'react-native'
import theme from '../../themes/theme'
import Text from '../Utility/Text'
import Subheading from '../Utility/Subheading'
import FlexRow from '../Utility/FlexRow'
import FlexColumnCenter from '../Utility/FlexColumnCenter'
import { useNavigate } from 'react-router-native'

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
    const thousands = number / 1000
    return thousands.toFixed(1) + 'k'
  }
  return number.toString()
}

const RepositoryItem = ({ repository }) => {
  const {
    id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repository
  const navigate = useNavigate()

  return (
    <Pressable onPress={() => navigate(`/${id}`)}>
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
    </Pressable>
  )
}

export default RepositoryItem
