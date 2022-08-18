import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NOTES_LIST_DATA } from '../../NOTES_LIST_DATA';
import { NOTES_TOPICS_DATA } from '../../NOTES_TOPICS_DATA';

export default function HomeScreen({ navigation, route }) {
    const setDoneStatusForNote = (item) => {

    }

    const NoteItem = ({ item }) => { 
        return (
            <TouchableOpacity onPress={() => setDoneStatusForNote(item) } style={styles.noteItem_wrapper}>
                <View onPress={() => {}} style={[styles.noteItem_doneCheckbox_wrapper, {opacity: item.isDone ? 0 : 1}]}></View>

                <Text style={styles.noteItemCaption_text}> { item.caption} </Text>

                {   
                    item.isDone ?
                        <View style={styles.noteStrikeLine}></View>
                    : []
                }
            </TouchableOpacity>
        )
    }

    const NotesTopicItem = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.notesTopicItem_wrapper, {backgroundColor: item.bgColor}]} activeOpacity={0.7}>
                <View style={styles.topicCaption_wrapper}>
                    <Text style={styles.topicCaption_text}> { item.caption} </Text>
                </View>
                
                <FlatList
                    data={NOTES_LIST_DATA.filter((note) => note.topicId == item.id)}
                    renderItem={NoteItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />  
            </TouchableOpacity>
        )
    }

    
    useEffect(() => {
      console.log(route.params)
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.screenCaption_wrapper}>
                <Text style={styles.firstPart_text}>Tasks</Text>
                <Text style={styles.secondPart_text}>Lists</Text>
            </View>

            <TouchableOpacity style={styles.addListBtn}>
                <View style={styles.addListBtn_icon_wrapper}>
                    <Text style={styles.addListBtn_icon_symbol}>+</Text>
                </View>
                <Text style={styles.addListBtn_label}>Add List</Text>
            </TouchableOpacity>

            <FlatList
                data={NOTES_TOPICS_DATA}
                renderItem={NotesTopicItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

            {/* <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    // ---
    screenCaption_wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginBottom: 50,
        marginTop: 50
    },
    firstPart_text: {
        fontSize: 33,
        fontWeight: '600',
        color: "rgba(0, 0, 0, 1)"
    },
    secondPart_text: {
        fontSize: 33,
        fontWeight: '300',
        color: "rgba(0, 0, 0, 0.5)",
        marginLeft: 10
    },
    // ---
    addListBtn: {
       alignItems: 'center',
       marginBottom: 70
    },
    addListBtn_icon_wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
    },
    addListBtn_icon_symbol: {
        fontSize: 20,
        fontWeight: '400',
        color: "rgba(0, 0, 0, 1)",
    },
    addListBtn_label: {
        fontSize: 17,
        fontWeight: '300',
        color: "rgba(0, 0, 0, 0.5)",
        marginTop: 15
    },
    // ---
    notesTopicItem_wrapper: {
        alignItems: 'flex-start',
        borderRadius: 15,
        paddingLeft: 20,
        paddingVertical: 10,
        height: 250,
        width: 250,
        marginLeft: 15
    },
    topicCaption_wrapper: {
        width: '100%',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        marginBottom: 15
    },
    topicCaption_text: {
        fontSize: 20,
        color: "white",
        fontWeight: '600',
    }, 
    // ---
    noteItem_wrapper: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        position: 'relative',
    },
    noteItem_doneCheckbox_wrapper: {
        borderRadius: 5,
        padding: 4,
        borderWidth: 1,
        borderColor: "white",
        width: 20, 
        height: 20,
    },
    noteItem_doneCheckbox_markSymbol: {
        fontSize: 11,
        color: "white",
        fontWeight: '400',
    },
    noteItemCaption_text: {
        fontSize: 18,
        color: "white",
        fontWeight: '400',
        marginLeft: 10
    }, 
    noteStrikeLine: {
        height: 1, 
        width: '100%',
        position: 'absolute',
        zIndex: 3,
        backgroundColor: 'white'
    }
})