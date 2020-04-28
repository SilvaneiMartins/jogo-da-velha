/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* App Jogo da Velha;
*/
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import Game from '../GameScreen/Game'

function WelcomeScreen() {
   const navigation = useNavigation()

   return (
      <View style={styles.container}>
         <Text
            style={styles.welcome}>Ben Vindo ao Game!
         </Text>
         <TouchableOpacity
            onPress={() => navigation.navigate('Game')}
         >
            <Text
               style={styles.instructions}>Toque aqui para começar
            </Text>
         </TouchableOpacity>
      </View>
   )
}  

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   welcome: {
      fontSize: 24,
      marginBottom: 54,
      textAlign: 'center',
   },
   instructions: {
      textAlign: 'center',
      color: 'grey',
   },
})

export default WelcomeScreen
