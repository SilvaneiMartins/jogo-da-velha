/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* App Jogo da Velha;
*/
import 'react-native-gesture-handler'
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from './pages/WelcomeScreen'
import GameScreen from './pages/GameScreen'
import Game from './pages/GameScreen/Game'

const Stack = createStackNavigator();

const Routes = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name='Jogo da Velha!'   
            component={WelcomeScreen}
         />
         <Stack.Screen
            name='Jogo da Velha'
            component={GameScreen}
         />
         <Stack.Screen 
            name='Game'
            component={Game}
         />
      </Stack.Navigator>
   )
}

export default Routes