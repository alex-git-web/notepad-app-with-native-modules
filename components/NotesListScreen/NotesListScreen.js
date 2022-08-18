import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function NoteListScreen({ navigation, route }) {
    
  const getNotesListForSelectedTopic = () => {
    NativeModules.NotepadModule.initializeNotesList(notesTopicId)
    .then(res => {
        console.log(res)
        setNotesListData(res)
    })
    .catch(err => {
        console.log('ERROR! ' + err);
    });
  }

    useEffect(() => {
        if (route.params?.notesTopicId) {
            getNotesListForSelectedTopic(notesTopicId)
        }
      }, []); 

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}