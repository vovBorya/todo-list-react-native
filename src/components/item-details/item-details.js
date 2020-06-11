import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity, Button
} from 'react-native';

const ItemDetails = ({ item, onRemove, onImportant, onDone }) => {

  const { id, title, important, done } = item;

  const itemStyle = {
    fontWeight: important ? 'bold': 'normal',
    color: important ? '#3d5afe': 'black',
    textDecorationLine: done ? 'line-through': 'none'
  }

  return (
    <TouchableOpacity
      onPress={() => onDone(id)}
      onLongPress={() => onImportant(id)}
    >
      <View style={styles.item}>
        <Text style={itemStyle} >{title}</Text>
        <Button
          title="x"
          color='#ff3d00'
          onPress={() => onRemove(id)}
        />
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
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default ItemDetails;