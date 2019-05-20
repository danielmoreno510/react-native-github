import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage, ScrollView } from 'react-native';
import DefaultInput from '../components/UI/DefaultInput'
import Header from '../components/UI/Header'
import List from '../components/UI/List'
import Filters from '../components/functions/Filters'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: '',
      date: '',
      email: '',
      github: '',
      loading:true,
      data:[],
      dataCopy:[],
      page:1,
      hasMore: true,
      namePlaceholder:'Filtrar Por Nombre',
      nameRequired:'#96aed4',
      all:[],
      filter:''
    }
    getData = async () => {
      try {
        const githubStorage = await AsyncStorage.getItem('github')
        if(githubStorage !== null) {
          this.setState({ github: githubStorage })
          this.setState({ email: await AsyncStorage.getItem('email') })
          this.setState({ date: await AsyncStorage.getItem('date') })
          this.setState({ id: await AsyncStorage.getItem('id') })
          this.setState({ name: await AsyncStorage.getItem('name') })
        }
        this.getAllGithub(this.state.github)
        this.getGithub(this.state.github)
      } catch(e) {
      }
    }
    getData()
  }

  getAllGithub=(github)=>{
    this.setState({loading:true})
    fetch("https://api.github.com/users/"+github+"/repos",{method:'GET'})
    .then(res=>res.json())
    .then(res=>{
      this.setState({loading:false, all:[...res]})
    })
    .catch((error)=>{
      this.setState({loading:false})
      console.log(error)
    })
  }

  handleName=(text)=>{
    this.state.filter=text
    if(text.length>2){
      this.setState({data:[...Filters(this.state.all,text)]})
    }else{
      this.setState({data:[...this.state.dataCopy]})
    }
  }

  getGithub=(github)=>{
    if(this.state.filter.length<3){
      fetch("https://api.github.com/users/"+github+"/repos?per_page=5&page="+this.state.page,{method:'GET'})
      .then(res=>res.json())
      .then(res=>{
        this.setState({data:[...this.state.data,...res],dataCopy:[...this.state.dataCopy,...res]})
        this.setState({page:this.state.page+1})
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }
  static navigationOptions={
    header:null
  }
  logout=()=>{
    AsyncStorage.clear()
    this.props.navigation.navigate("Login")
  }
  renderList = () => {
    return ( this.state.data.map((data,index) => {
      return ( 
        <View key={index} style={styles.items}>
          <List data={data}/>
        </View>
      );
    })
   );
  }
  isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {   return layoutMeasurement.height + contentOffset.y 
    >= contentSize.height - 180; }
    onFocus=(input)=>{
      if(input=="name"){
        this.setState({ namePlaceholder: "", nameRequired: "#96aed4" })
      }
    }
    onBlur=(input)=>{
      if(input=="name"){
        this.setState({ namePlaceholder: "Filtrar Por Nombre" })
        if(this.state.name==''){
          this.setState({ nameRequired: "#f44336" })
        }
      }
    }
  render() {
    if(!this.state.loading){
      return (
        <View style={styles.container}>
          <Header state={this.state} logout={this.logout}/>
          <DefaultInput style={styles.input}
            borderColor='#96aed4'
            placeholder = {this.state.namePlaceholder}
            placeholderTextColor = {this.state.nameRequired}
            onChangeText = {this.handleName}
            value={this.state.filter}
            onFocus={() => this.onFocus("name")}
            onBlur={() => this.onBlur("name")}
          />
          <ScrollView  style={styles.content}
            onScroll={({ nativeEvent }) => {
              if (this.isCloseToBottom(nativeEvent) && this.state.hasMore) {              
                this.getGithub(this.state.github); 
              }
            }}
          >
          {this.renderList()}
          </ScrollView>
        </View>
      );
    }else{
      return (
        <View style={styles.loading}>
          <Text style={styles.headerText}>Loading</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1f23',
  },
  loading: {
    flex: 1,
    backgroundColor: '#1b1f23',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items:{
    padding:10,
    borderWidth: 1,
    borderColor: '#1b1f23',
},
  content:{
    backgroundColor:'#282c33'
  },
  input:{
    margin: 10,
    height: 40,
    width: '60%',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    color:'#96aed4',
  }
});

export default HomeScreen;
