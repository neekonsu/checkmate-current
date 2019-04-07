import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class SubStrip extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>{this.props.tailnumber}</Text>
                <Text style={styles.text2}>{this.props.eta}</Text>
                <Text style={styles.text3}>{this.props.hours}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 20,
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: '#64b5f6',
        alignContent: 'center'
    },
    text1: {
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginLeft: 60,
        marginRight: 98
    },
    text2: {
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginRight: 82
    },
    text3: {
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },    
})
