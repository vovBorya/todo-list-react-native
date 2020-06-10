import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#0277bd',
  },
  title: {
    fontSize: 17,
    color: "white",
    marginBottom: 5
  }
})

export default Navbar;
