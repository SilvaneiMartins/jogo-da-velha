import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';
import range from 'lodash';
const _ = range;
export default class Game extends Component {
  constructor(props) {
    super(props);  
    
    // Combinações vencedoras
    this.possible_combinations = [
      [0, 3, 6],
      [1, 4, 7],
      [0, 1, 2],
      [3, 4, 5],
      [2, 5, 8],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // Corresponde ao número do quadrado na tabela
    this.ids = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
                
    // Para a tabela 3x3
    this.rows = [
      _.range(3).fill(''),
      _.range(3).fill(''),
      _.range(3).fill(''),
    ];
  
    this.state = {
      moves: _.range(9).fill(''),
      x_score: 0,
      o_score: 0,
    }
    this.turn = 'X' // Muda sempre que um jogador faz um movimento
    this.game_over = false; // Definido como true quando o jogo terminar
    this.count = 0; // usado para verificar se o jogo termina em empate
  }
}