import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Navbar from "./src/components/navbar";
import AddTodo from "./src/components/add-todo";

export default function App() {

  const [ todos, setTodos ] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      important: false
    }

    setTodos(prev => [...prev, newTodo])

    console.log(todos)
  }

  return (
    <View>
      <Navbar title="ToDo app" />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <View>
          {
            todos.map(({ id, title }) => (
                <Text key={id}>{title}</Text>
              )
            )
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});