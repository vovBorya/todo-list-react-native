import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView
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
  }
})

export default ItemList;