import React from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';

const ActionButtons = () => {

  return (
    <View style={styles.buttons}>
      <Button title="-" />
      <Button title="!" />
      <Button title="Х" />
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default ActionButtons;