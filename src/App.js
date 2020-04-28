/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* App Jogo da Velha;
*/
import 'react-native-gesture-handler'

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet, StatusBar } from 'react-native'

import Router from './Routes'

function App() {
   return (
      <NavigationContainer>
         <StatusBar
            barStyle='light-content'
            style={styles.statusbar}
         />

         <View
            style={styles.container}
         >
            <Router />
         </View>
      </NavigationContainer>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#312E28',
   },
   statusbar: {
      backgroundColor: '#312E28',
   }
})

export default App