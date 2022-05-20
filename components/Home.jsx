import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RaceChien from './RaceChien';
import DogsPictures from './DogsPictures';

function Home() {
    const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator initialRouteName="RaceChien">
                <Stack.Screen name="RaceChien" component={RaceChien} />
                <Stack.Screen name="PhotoChien" component={DogsPictures} />
            </Stack.Navigator>
    );
}

export default Home;