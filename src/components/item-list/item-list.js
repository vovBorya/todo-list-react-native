import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import ItemDetails from "../item-details";

const ItemList = ({ todos }) => {

  return (
    <View style={styles.list}>
      {
        todos.map(({ id, title }) => (
          <ItemDetails key={id} title={title} />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: 15,
    borderColor: '#0277bd',
    borderWidth: 1,
    borderRadius: 5
  }
})

export default ItemList;