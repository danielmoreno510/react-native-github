// import liraries
import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Authentication from './Authentication'
import NoAuthentication from './NoAuthentication'
import { actionEstablecerSesion } from '../store/Acciones';

// create a component
class Config extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
        }
        sesion= async()=>{
            try {
                const value = await AsyncStorage.getItem('github')
                if(value !== null) {
                    this.setState({ login: true })
                }else{
                    this.setState({ login: false })
                }
            } catch (e) {
                // saving error
            }
        }
        sesion()
    }
    static navigationOptions={
        header:null
    }
    render() {        
        return (
            <View style={styles.container}>
                {this.state.login ? <Authentication /> : <NoAuthentication />}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Config;
