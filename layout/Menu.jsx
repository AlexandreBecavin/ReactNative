import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import RaceChien from '../components/RaceChien';
import FunFact from '../components/FunFact';

const Menu = () => {
    const Menu = [
        {   
            'icon': 'test',
            'component':  RaceChien
        },
        {
            'icon': 'test',
            'component':  FunFact
        }
    ];

    const [activeComposant, setActiveComposant] = useState(0);
    const Component = Menu[activeComposant].component;

    return (
        <SafeAreaView style={{flex: 1, marginTop: 30}}>
            <View style={{flex: 1}}>
                <Component/>
            </View>

            <View style={{display: 'flex', flexDirection: 'row',backgroundColor: 'red', padding: 10}}>
                { Menu.map((item, index) => (
                     <TouchableOpacity 
                        key={index} 
                        onPress={() => {
                            console.log(index);
                            setActiveComposant(index);
                        }}
                        style={{
                            width: '50%', 
                        }}
                    >
                        <Text
                            style={{ 
                                textAlign: 'center', 
                                textAlignVertical: 'center', 
                                fontSize: 22
                            }}
                        >
                            {item.icon}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    )
}

export default Menu;