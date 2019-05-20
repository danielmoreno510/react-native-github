import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultInput from './DefaultInput'
import DefaultDate from './DefaultDate'

const formLogin = props => (
    <View style={styles.container}>
        <DefaultInput
            borderColor={props.state.nameColor}
            placeholder = {props.state.name}
            placeholderTextColor = {props.state.nameColor}
            onFocus={props.namePh}
            onBlur={props.namePhBack}
            onChange={props.namePh}
        />
        <DefaultInput
            borderColor={props.state.idColor}
            placeholder = {props.state.id}
            placeholderTextColor = {props.state.idColor}
            onFocus={props.idPh}
            onBlur={props.idPhBack}
            onChange={props.idPh}
        />
        <DefaultDate
            borderColor={props.state.dateColor}
            date={props.state.dateChange}
            placeholder={props.state.date}
            customStyles={{
                dateIcon: {
                    display:'none'
                },
                dateInput: {
                    marginLeft: 40,
                    marginRight: 40,
                    borderColor: props.state.dateColor,
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingLeft: 8,
                    textAlign: 'left',
                    alignItems: 'flex-start',
                },
                placeholderText: {
                    color: props.state.dateColor
                },
                dateText: {
                    color: '#96aed4',
                }
            }}

            onDateChange={props.datePh}
            onCloseModal={props.datePhBack}
        />
        <DefaultInput
            borderColor={props.state.emailColor}
            placeholder = {props.state.email}
            placeholderTextColor = {props.state.emailColor}
            onFocus={props.emailPh}
            onBlur={props.emailPhBack}
            onChange={props.emailPh}
        />
        <DefaultInput
            borderColor={props.state.githubColor}
            placeholder = {props.state.github}
            placeholderTextColor = {props.state.githubColor}
            onFocus={props.githubPh}
            onBlur={props.githubPhBack}
            onChange={props.githubPh}
        />
        <Text style={styles.button} onPress={props.login}>Entrar</Text>
    </View>
)

const styles= StyleSheet.create({
    container: {
        backgroundColor: '#1b1f23',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#0d47a1',
        padding: 10,
        margin: 15,
        paddingLeft:14,
        paddingRight:14,
        height: 40,
        color:'#fff',
        borderRadius:8,
        borderWidth: 1,
        borderColor: '#0d47a1',
        overflow:'hidden'
    }
});

export default formLogin;