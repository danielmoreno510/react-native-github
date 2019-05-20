import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const list = props => (
    <View>
        <Text style={styles.title}>Name:</Text>        
        <Text style={styles.info}>{props.data.name}</Text>
        <Text style={styles.title}>Descripcion:</Text>        
        <Text style={styles.info}>{props.data.description}</Text>
        <Text style={styles.title}>Url:</Text>        
        <Text style={styles.info}>{props.data.url}</Text>
        <Text style={styles.title}>Languaje:</Text>        
        <Text style={styles.info}>{props.data.languaje}</Text>
        <Text style={styles.title}>Branch:</Text>        
        <Text style={styles.info}>{props.data.default_branch}</Text>
    </View>
)

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
    },
    info:{
        fontSize:18,
        color:'#fff',
        paddingBottom: 10,
    },
  });

export default list;