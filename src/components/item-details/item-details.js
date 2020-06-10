import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ActionButtons from "../action-buttons";

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
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderColor: '#0277bd',
    borderWidth: 1,
    borderRadius: 5
  },
  buttons: {
    padding: 8
  }
})

export default ItemDetails;