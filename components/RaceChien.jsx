import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';


const RaceChien = ({ navigation }) => {

    const [raceChiens, setRaceChiens] = useState([]);

    useEffect(() => {
        console.log("Appel de l'api");
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    return;
                }
                console.log(data.message);
                setRaceChiens(data.message);
            })
    }, [])

    return (
        <View style={{width: '100%'}}>     
            { raceChiens && 
                <FlatList
                    data={Object.keys(raceChiens)}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            key={item} 
                            style={{ display: 'flex', flexDirection: 'row', width: '100%', padding: 10, paddingLeft: 20 }}
                            onPress={() => {
                                navigation.push('PhotoChien', {race: item})
                            }}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            }


        </View>
    )
}

export default RaceChien; 