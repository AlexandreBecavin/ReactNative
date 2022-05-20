import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const FunFact = () => {
    const [funFact, setFunFact] = useState([]);

    useEffect(() => {
        console.log("Appel de l'api");
        fetch(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all`)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    return;
                }
                console.log(data);
                setFunFact(data);
            })
    }, [])


    return (
        <View>
            {funFact && (
                <FlatList
                data={funFact}
                renderItem={({ item }) => (
                    <View>
                        <Text style={{margin: 10}}>{item.fact}</Text>
                    </View>
                    )}
                />
            )}
        </View>
    );
}

export default FunFact;