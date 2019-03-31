import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';



export default class Plane_strip extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello</Text>
                <Text style={styles.text}>And</Text>
                <Text style={styles.text}>Goodbye</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-evenly',
        backgroundColor: '#64b5f6'
    },
    text: {
        fontSize: 20,
        alignSelf: 'center'
    }
})
