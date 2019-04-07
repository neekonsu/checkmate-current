import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Strip from './components/Strip.js'
import SubStrip from './components/SubStrip.js'
import Toolbar from './components/Toolbar.js'
import List from './components/List.js'

/* 
let fb-object = fb.getdata({
    tailnumberA: {
        PlaneStrip: {
            hobbs: x,
            tailnumber: k
        },
        ListView: {
            item: a,
            index: i,
            section: k,
            title: y
        }
    },
    tailnumberN: {
        PlaneStrip: {
            hobbs: x,
            tailnumber: k
        },
        ListView: {
            item: a,
            index: i,
            section: k,
            title: y
        }
    }
})
*/
// let tailnumber = 'N#######'
// let eta = 0000
// let hobbs = 'null hours'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Strip tailnumber={'N52535'} eta={5} hours={4321}/>
                <SubStrip tailnumber={'Tail #'} eta={'ETA'} hours={'Hobbs'}/>
                <List/>
                <Toolbar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-end'
    }
});