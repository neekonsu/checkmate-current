import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Plane_strip from './components/Plane_strip.js'
import Toolbar from './components/Toolbar.js'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Plane_strip style={styles.strip}/>
                <Toolbar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    strip: {
        
    }
});