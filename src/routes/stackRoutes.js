import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Search from '../pages/Search';

const Stack = createNativeStackNavigator();

function StackRoutes(){
    return(
        <Stack.Navigator>
           <Stack.Screen name="Home" component={Home}
           options={{
            headerShown: false
           }}/>

            <Stack.Screen
            name="Sobre"
            component={Sobre}
            options ={{
                headerShown: false,
                title: 'Informações Sobre a Biblioteca'
            }}/>

            <Stack.Screen
            name="Search"
            component={Search}
            options ={{
                title: 'Sua Busca',
                headerTintColor:"#ffd200",
                headerTitleStyle:{
                    color:"#fff"
                },
                headerStyle:{
                    backgroundColor:"#0D3838"
                }
            }}/>

        </Stack.Navigator>

    )
    
}

export default StackRoutes;