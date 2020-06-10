import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput
} from 'react-native';

const AddTodo = ({ addTodo }) => {

  const [ text, setText ] = useState('')

  const onAddedBtnClick = () => {
    if (text !== '') {
      addTodo(text);
    } else alert('Enter title of task')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Please, enter title of your new task"
        onChangeText={text => setText(text)}
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
