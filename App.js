import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen/HomeScreen';
import NoteListScreen from './components/NotesListScreen/NotesListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isUploadDataInExternalStorage, setIsUploadDataInExternalStorage] = useState(true);
  const [notesListDataLocal, setNotesListDataLocal] = useState(null)

  return (
    <NavigationContainer initialRouteName="Home">
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} initialParams={{ itemId: 42 }} />
          <Stack.Screen name="Details" component={NoteListScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}