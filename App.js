import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import Navbar from "./src/components/navbar";
import AddTodo from "./src/components/add-todo";
import ItemList from "./src/components/item-list";
import ItemDetails from "./src/components/item-details";

export default function App() {

  const [ todos, setTodos ] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      important: false,
      done: false
    }
    setTodos(prev => [...prev, newTodo]);
  }

  const toggleProperty = (id, propName) => {
    const index = todos.findIndex(el => el.id === id);

    const oldItem = todos[index];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    }

    return [
      ...todos.slice(0, index),
      newItem,
      ...todos.slice(index + 1)
    ]
  }

  const onToggleImportant = (id) => {
    setTodos(toggleProperty(id, 'important'))
  }

  const onToggleDone = (id) => {
    console.log(todos.find(el => el.id === id))
    setTodos(toggleProperty(id, 'done'))
  }

  const removeTodo = (id) => {
    setTodos( todos => {
      const index = todos.findIndex((el) => el.id === id)
      return [
        ...todos.slice(0, index),
        ...todos.slice(index + 1)
      ]
    })
  }

  return (
    <View>
      <Navbar title="ToDo app" />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <FlatList
          style={styles.list}
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({ item }) => (
            <ItemDetails
              item={item}
              onRemove={removeTodo}
              onImportant={onToggleImportant}
              onDone={onToggleDone}
            />
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 220
  },
  list: {
    marginTop: 20
  }
});