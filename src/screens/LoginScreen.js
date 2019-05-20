import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import FormLogin from '../components/UI/FormLogin'
import { actionLogin } from '../store/Acciones';

class LoginScreen extends Component {

  constructor() {
    super();
    this.state = {
      name:"Nombre Completo",
      nameChange:'',
      id:"Cedula",
      idChange:'',
      date:"Fecha De Nacimiento",
      dateChange: '',
      email:"Correo Electronico",
      emailChange: '',
      github:"Usuario De Github",
      githubChange: '',
      nameColor:'#96aed4',
      idColor:'#96aed4',
      dateColor:'#96aed4',
      emailColor:'#96aed4',
      githubColor:'#96aed4',
    };
  }
  
  LoginUser = async() => {
    if(this.state.nameChange!="" && this.state.idChange!="" && this.state.dateChange!="" && this.state.emailChange!="" && this.state.githubChange!=""){
      this.props.login(this.state);
      try {
        await AsyncStorage.setItem('name', this.state.nameChange)
        await AsyncStorage.setItem('id', this.state.idChange)
        await AsyncStorage.setItem('date', this.state.dateChange)
        await AsyncStorage.setItem('email', this.state.emailChange)
        await AsyncStorage.setItem('github', this.state.githubChange)
        this.props.navigation.navigate("Home")
      } catch (e) {
        // saving error
      }
    }else{
      this.namePhBack()
      this.idPhBack()
      this.datePhBack()
      this.emailPhBack()
      this.githubPhBack()
    }
  };
  namePh=(value)=>{
    this.setState({nameChange:value.nativeEvent.text});
    this.setState({name:""});
    this.setState({nameColor:"#96aed4"});
  }
  idPh=(value)=>{
    this.setState({idChange:value.nativeEvent.text});
    this.setState({id:""});
    this.setState({idColor:"#96aed4"});
  }
  datePh =(key) => {
    this.setState({dateChange:key});
    this.setState({dateColor:"#96aed4"});
  };
  emailPh=(value)=>{
    this.setState({emailChange:value.nativeEvent.text});
    this.setState({email:""});
    this.setState({emailColor:"#96aed4"});
  }
  githubPh=(value)=>{
    this.setState({githubChange:value.nativeEvent.text});
    this.setState({github:""});
    this.setState({githubColor:"#96aed4"});
  }
  namePhBack=()=>{
    this.setState({name:"Nombre Completo"});
    if(this.state.nameChange==""){
      this.setState({nameColor:"#f44336"});
    }
  }
  idPhBack=()=>{
    this.setState({id:"Cedula"});
    if(this.state.idChange==""){
      this.setState({idColor:"#f44336"});
    }
  }
  datePhBack=()=>{
    setTimeout(() => {
      if(this.state.dateChange==''){
        this.setState({dateColor:"#f44336"});
      }
    }, 10);
  }
  emailPhBack=()=>{
    this.setState({email:"Correo Electronico"});
    if(this.state.emailChange==""){
      this.setState({emailColor:"#f44336"});
    }
  }
  githubPhBack=()=>{
    this.setState({github:"Usuario De Guthub"});
    if(this.state.githubChange==""){
      this.setState({githubColor:"#f44336"});
    }
  }
  static navigationOptions={
    header:null
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style = {styles.image} source={require('../assets/images/s4n.jpg')}/>
        <Text style={styles.title}>Información Del Canditado</Text>
        <FormLogin
          state={this.state}
          namePh={this.namePh}
          idPh={this.idPh}
          datePh={this.datePh}
          emailPh={this.emailPh}
          githubPh={this.githubPh}
          namePhBack={this.namePhBack}
          idPhBack={this.idPhBack}
          datePhBack={this.datePhBack}
          emailPhBack={this.emailPhBack}
          githubPhBack={this.githubPhBack}
          login={this.LoginUser}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1f23',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:80,
    height:80,
    marginBottom: 40,
  },
  title: {
    color:'#96aed4',
    fontSize:26,
    fontWeight:'bold',
    paddingBottom: 20,
  }
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (datos) => {
    dispatch(actionLogin(datos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);