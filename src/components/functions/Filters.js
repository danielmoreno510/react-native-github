import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const filters = (items, letter) => {
    function esSuficientementeGrande(elemento) {
        if(elemento.name.indexOf(letter)>-1){
        return elemento.name
        }
    }
    var filtrados = items.filter(esSuficientementeGrande);
    return filtrados
      
}

export default filters;