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
    flexDirection: 'row'
  },
  first: {
    flex: 0.25,
    height: 50,
    backgroundColor: '#4285F4'
  },
  second: {
    flex: 0.25,
    height: 50,
    backgroundColor: '#DB4437'
  },
  third: {
    flex: 0.25,
    height: 50,
    backgroundColor: '#F4B400'
  },
  fourth: {
    flex: 0.25,
    height: 50,
    backgroundColor: '#0F9D58'
  }
})