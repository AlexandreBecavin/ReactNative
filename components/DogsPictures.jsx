import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';


const DogsPictures = ({ route })  => {
    const { race } = route.params;
    const [imageChien, setImageChien] = useState([]);

    useEffect(() => {
        console.log("Appel de l'api");
        fetch(`https://dog.ceo/api/breed/${race}/images/random/10`)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    return;
                }
                console.log(data.message);
                setImageChien(data.message);
            })
    }, [])

    return (
        <View>
        
            { imageChien && (
                <FlatList
                data={imageChien}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{uri: item}} style={{width: 400, height: 400, resizeMode: 'cover',}} />
                    </View>
                    )}
                />
            )}
        </View>
    );
}

export default DogsPictures;