import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Alert
} from 'react-native';

const AddTodo = ({ addTodo }) => {

  const [ text, setText ] = useState('')

  const onAddedBtnClick = () => {
    if (text !== '') {
      addTodo(text);
    } else Alert.alert('Ooops', 'Please, enter title of task')
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Please, enter title of your new task"
        onChangeText={setText}
        defaultValue={text}
      />
      <Button
        style={styles.button}
        title="Add task"
        onPress={() => onAddedBtnClick()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    width: '70%',
    padding: 7,
    borderRadius: 5,
    borderColor: '#0277bd',
    borderWidth: 1
  },
  button: {
    borderRadius: 5,
    borderWidth: 1
  }
})

export default AddTodo;
