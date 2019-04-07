import React, { Component } from 'react';
import { SectionList, Platform, StyleSheet, Text, View } from 'react-native';

// let item let item = this.props.item
// let index = this.props.listIndex
// let section = this.props.section
// let title = this.props.title= this.props.item
// let index = this.props.listIndex
// let section = this.props.section
// let title = this.props.title

export default class List extends Component {
    render() {
        return (
            // Why does renderItem{} require `section`?
            <View style={styles.list}>
                <SectionList 
                    sections={[
                        {title: 'Title 1', data: ['description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...']},
                        {title: 'Title 2', data: ['description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...']},
                        {title: 'Title 3', data: ['description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...']},
                        {title: 'Title 4', data: ['description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...']},
                        {title: 'Title 5', data: ['description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...']},
                        {title: 'Title 6', data: ['description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...']},
                        {title: 'Title 7', data: ['description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...']},
                        {title: 'Title 8', data: ['description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...', 'description...']}
                    ]}
                    renderItem={({index, item, section}) => <View style={styles.itemContainer}>
                                                                <Text key={index} style={styles.index}>
                                                                    {index + 1}
                                                                </Text>
                                                                <Text key={index + 1} style={styles.description}>
                                                                    {item}
                                                                </Text>
                                                            </View>
                                                            }
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginBottom: 16
    },
    index: {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 50,
    },
    description: {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 70,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 35,
        alignSelf: 'center',
        marginTop: 20,    //remember to add section-separator lines
        marginBottom: 5
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignContent: 'center'
    }
})