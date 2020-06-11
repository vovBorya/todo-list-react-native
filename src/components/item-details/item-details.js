import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ItemDetails = ({ item, removeTodo }) => {

  const { id, title, important } = item;

  return (
    <TouchableOpacity
      onPress={() => console.log(`pressed ${id}`)}
      onLongPress={() => removeTodo(id)}
    >
      <View style={styles.item}>
        <Text style={ important && styles.important } >{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 17,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderColor: '#0277bd',
    borderWidth: 1,
    borderRadius: 5
  },
  buttons: {
    padding: 8
  },
  important: {
    fontWeight: 'bold',
    color: '#3d5afe'
  }
})

export default ItemDetails;