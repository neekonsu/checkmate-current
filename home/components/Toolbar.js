import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class Toolbar extends Component {
    render() {
        return (
          <View style={styles.container}>

            <View style={styles.first}>
              <Text style={styles.text}>
                Remove
              </Text>
            </View>

            <View style={styles.second}>
              <Text style={styles.text}>
                Edit
              </Text>
            </View>

            <View style={styles.third}>
              <Text style={styles.text}>
                Settings
              </Text>
            </View>

            <View style={styles.fourth}>
              <Text style={styles.text}>
                New
              </Text>
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
    backgroundColor: '#4285F4',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  second: {
    flex: 0.25,
    height: 50,
    backgroundColor: '#DB4437',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  third: {
    flex: 0.25,
    height: 50,
    backgroundColor: '#F4B400',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fourth: {
    flex: 0.25,
    height: 50,
    backgroundColor: '#0F9D58',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})