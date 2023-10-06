import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native'
import theme from '../../../themes/theme'

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sortButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 7,
    paddingVertical: 11,
    marginBottom: 5,
    alignSelf: 'flex-start',
    elevation: 4,
  },
  modalContent: {
    backgroundColor: 'snow',
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalText: {
    padding: 10,
    color: theme.colors.textSecondary,
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
  text: {
    color: 'white',
  },
})

const SortingMenu = ({ selectedOption, onSelect }) => {
  const [open, setOpen] = useState(false)
  const sortingOptions = [
    {
      label: 'Latest review',
      orderBy: 'CREATED_AT',
      orderDirection: 'DESC',
    },
    {
      label: 'Highest rated',
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    },
    {
      label: 'Lowest rated',
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
    },
    ,
  ]

  return (
    <View>
      <Pressable onPress={() => setOpen(!open)} style={styles.sortButton}>
        <Text style={styles.text}>Sort repositories...</Text>
        <Modal
          animationType="fade"
          transparent={true}
          visible={open}
          onRequestClose={() => setOpen(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Sort by...</Text>
              {sortingOptions.map((option) => (
                <TouchableOpacity
                  key={option.label}
                  style={[
                    styles.option,
                    selectedOption.label === option.label &&
                      styles.selectedOption,
                  ]}
                  onPress={() => {
                    onSelect(option)
                    setOpen(false)
                  }}
                >
                  <Text>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </Pressable>
      <Text>{selectedOption ? `Sorting by ${selectedOption.label}` : ''}</Text>
    </View>
  )
}

export default SortingMenu
