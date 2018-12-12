import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, Modal, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {Searchbar,IconButton, Divider,TextInput} from 'react-native-paper';
import Header from '../Header';
import { Table, Row, Rows } from 'react-native-table-component';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['S.N.', 'Name', 'Price'],
            tableData: [
              ['1','Rent', '7900'],
              ['2','Lunch', '9870'],
              ['3','Snacks', '8000'],
              ['4','Repair','4000']
            ],
            visible:false,
            filterMode:'Customer',
            searchText:'',
            searchMode:1
          }
    }
    render() {
        const state = this.state;
        return (
           <View style={styles.container}>
                <Header title="Expense" navigation={this.props.navigation}/>
                <IconButton style={{position:'absolute',top:0,right:5}} icon="add" color="#fff" size={25}
                    onPress={()=>this.setState({visible:true})}
                />
                <IconButton style={{position:'absolute',top:0,right:40}} icon="refresh" color="#fff" size={25}
                    onPress={()=>this.setState({visible:true})}
                />
                <Searchbar style={{margin:5,borderRadius:5}}
                    onChangeText={(text)=>this.setState({searchText:text})}
                    value={this.state.searchText}
                />
                <ScrollView style={{margin:5,marginTop:0}}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row flexArr={[0.5, 2, 1.5]} data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows flexArr={[0.5, 2, 1.5]} data={state.tableData.filter(x=>x[this.state.searchMode].includes(this.state.searchText))} textStyle={styles.text}/>
                    <Row flexArr={[0.5,2,1.5]}  data={['','Total','585800']} style={styles.head} textStyle={styles.text}/>
                </Table>
                </ScrollView>
                <Modal
                  transparent={true}
                  onRequestClose={()=>this.setState({visible:false})}
                  visible={this.state.visible}>
                <View style={styles.modalBackground}>
                    <View style={{backgroundColor:'#fff',padding:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                            <Text style={{fontSize:20,marginLeft:10}}>Add Expense</Text>
                            <MaterialIcons name="close" size={25} color="#000" 
                                onPress={()=>this.setState({visible:false})}
                            />
                        </View>
                        <Divider style={{marginVertical:10,height:2}}/>
                        <KeyboardAvoidingView style={{marginBottom:10}}>
                            <TextInput style={styles.textInput}
                                theme={{ colors: { primary: "#FF5722" }}}
                                value={this.state.name}
                                label="Name"
                                // inputStyle={styles.labelText}
                                underlineColor='#FF5722'
                                // onChangeText={(text)=>this.onChangeLabel(text)} 
                                />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView style={{marginBottom:10}}>
                            <TextInput style={styles.textInput}
                                theme={{ colors: { primary: "#FF5722" }}}
                                value={this.state.price}
                                label="Price"
                                // inputStyle={styles.labelText}
                                underlineColor='#FF5722'
                                // onChangeText={(text)=>this.onChangeLabel(text)} 
                                />
                        </KeyboardAvoidingView>
                        <TouchableOpacity style={styles.submitButton}
                            activeOpacity={0.7}
                        >
                            <Text style={{fontSize:20,color:'#fff'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
          </Modal>    
           </View> 
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    head: {
        backgroundColor: '#f1f8ff' 
    },
    text: {
        margin: 6 
    },
    modalBackground:{
        backgroundColor:'rgba(0,0,0,0.8)',
        flex:1,
        paddingHorizontal:20,
        paddingVertical:20,
        justifyContent:'center'
    },
    title:{
        fontSize:18,
        marginTop:10
    },
    textInput:{
        backgroundColor:'#fff',
        fontSize:24,
        marginVertical:0,
        paddingVertical:0
    },
    submitButton:{
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:'#FF5722',
        marginTop:10,
        height:40,
        width:100,
        justifyContent:'center',
        borderRadius:20
    }
})

export default Expense;