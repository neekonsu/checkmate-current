import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';



export default class Strip extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.tailnumber}</Text>
                <Text>||</Text>
                <Text style={styles.text}>{this.props.eta}</Text>
                <Text>||</Text>
                <Text style={styles.text}>{this.props.hours}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 20,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-evenly',
        backgroundColor: '#64b5f6',
        alignContent: 'center'
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})
