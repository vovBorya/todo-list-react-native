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
      important: false
    }
    setTodos(prev => [...prev, newTodo])
  }

  return (
    <View>
      <Navbar title="ToDo app" />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({ item }) => <ItemDetails title={item.title} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});