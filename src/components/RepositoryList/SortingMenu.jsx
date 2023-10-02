import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native'

const SortingMenu = ({ selectedOption, onSelect }) => {
  const [open, setOpen] = useState(false)
  const sortingOptions = [
    { label: 'Latest review', orderBy: 'CREATED_AT', orderDirection: 'DESC' },
    {
      label: 'Highest rated',
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    },
    { label: 'Lowest rated', orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
  ]

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setOpen(!open)} style={styles.sortButton}>
        <Text style={styles.text}>Sort repositories...</Text>
        <Modal
          animationType="fade"
          transparent={true}
          visible={open}
          onRequestClose={() => setOpen(false)}
        >
          <View style={styles.modalContent}>
            {sortingOptions.map((option) => (
              <TouchableOpacity
                key={option.label}
                style={[
                  styles.option,
                  selectedOption === option.value && styles.selectedOption,
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
        </Modal>
      </Pressable>
      <Text>{selectedOption ? `Sorting by ${selectedOption.label}` : ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 10,
    borderColor: '#e1e4e8',
  },
  sortButton: {
    backgroundColor: '#0366d6',
    borderRadius: 5,
    padding: 7,
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  modalContent: {
    backgroundColor: '#e1e4e8',
    padding: 10,
  },
  option: {
    padding: 10,
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
  text: {
    color: 'white',
  },
})

export default SortingMenu
