import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const ItemDetails = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 17,
    padding: 20,
    borderColor: '#0277bd',
    borderBottomWidth: 1
  }
})

export default ItemDetails;