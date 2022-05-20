import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import FunFact from './components/FunFact';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'FunFact') {
              return (
                <Ionicons
                  name={focused ? 'flame' : 'flame'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}>
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Tab.Screen name="FunFact" component={FunFact} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
