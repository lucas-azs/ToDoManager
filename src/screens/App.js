import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView ref='main' style={styles.container}>
        <View ref='first' style={styles.first}>
          <View style={styles.subView} />
          <View style={styles.subView} />
          <View style={styles.subView} />
        </View>
        <View ref='second' style={styles.second}>
          <View style={styles.subView} />
          <View style={styles.subView} />
          <View style={styles.subView} />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  first: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: flex - start,
    margin: 40,
    borderColor: 'red',
    borderWidth: 1
  },
  second: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: flex - end,
    margin: 40,
    borderColor: 'red',
    borderWidth: 1
  },
  subView: {
    height: 50,
    width: 50,
    backgroundColor: 'skyblue'
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigBlue: {
    color: 'blue',
    fontSize: 50
  },
  smallRed: {
    color: 'red',
    fontSize: 20
  }
});