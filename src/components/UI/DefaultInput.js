import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        autoCapitalize = "none"
        key="name"
        {...props}
    />
)

const styles= StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        width: 260,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 8,
        color:'#96aed4',
      },
});

export default defaultInput;