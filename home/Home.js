import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Toolbar from './components/Toolbar.js'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Toolbar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
});
