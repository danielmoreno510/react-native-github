import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const header = props => (
    <View style={styles.header}>
        <View style={{flexDirection: 'row', paddingBottom:6}}>
            <View style={{flex:1}}>
            <Text style={styles.headerTitle}>Nombre Completo:</Text>
            <Text style={styles.headerText}>{props.state.name}</Text>
            </View>
            <View style={{flex:1, alignItems: 'flex-end'}}>
            <Text style={styles.headerTitle}>Identificación:</Text>
            <Text style={styles.headerText}>{props.state.id}</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', paddingBottom:6}}>
            <View style={{flex:1}}>
            <Text style={styles.headerTitle}>Fecha De Nacimiento:</Text>
            <Text style={styles.headerText}>{props.state.date}</Text>
            </View>
            <View style={{flex:1, alignItems: 'flex-end'}}>
            <Text style={styles.headerTitle}>Correo Electronico:</Text>
            <Text style={styles.headerText}>{props.state.email}</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row'}}>
            <View style={{flex:1}}>
            <Text style={{fontSize:20,color:'#fff',fontWeight:'bold',paddingTop: 6,}} onPress={props.logout}>Salir</Text>
            </View>
            <View style={{flex:1, alignItems: 'flex-end'}}>
            <Text style={styles.headerTitle}>Github:</Text>
            <Text style={styles.headerText}>{props.state.github}</Text>
            </View>
        </View>  
    </View>
)

const styles = StyleSheet.create({
    header: {
      padding:10,
      marginTop: 30,
    },
    headerText:{
      color:'#fff'
    },
    headerTitle:{
      color:'#fff',
      fontWeight:'bold',
    },
  });

export default header;