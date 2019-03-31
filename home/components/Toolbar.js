import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default class Toolbar extends Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.first}> 
            </View>
            <View style={styles.second}>
            </View>
            <View style={styles.third}>
            </View>
            <View style={styles.fourth}>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 50
  },
  first: {
    flex: 0.25,
    height: 50,
    backgroundColor: 'powderblue'
  },
  second: {
    flex: 0.25,
    height: 50,
    backgroundColor: 'skyblue'
  },
  third: {
    flex: 0.25,
    height: 50,
    backgroundColor: 'steelblue'
  },
  fourth: {
    flex: 0.25,
    height: 50,
    backgroundColor: 'magenta'
  }
})