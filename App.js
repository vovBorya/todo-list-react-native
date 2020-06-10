import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Navbar from "./src/components/navbar";
import AddTodo from "./src/components/add-todo";

export default function App() {

  return (
    <View style={styles.container}>
      <Navbar title="ToDo app" />
      <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});