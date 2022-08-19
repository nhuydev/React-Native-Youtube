import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Welcome, Walkthrough } from './screens';
import AuthMain from './screens/Authentication/AuthMain';
import AuthEmail from './screens/Authentication/AuthEmail';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Welcome"
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Walkthrough" component={Walkthrough} />
                <Stack.Screen name="AuthMain" component={AuthMain} />
                <Stack.Screen name="AuthEmail" component={AuthEmail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
