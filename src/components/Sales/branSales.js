import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, Modal, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {Searchbar,IconButton, Divider,TextInput} from 'react-native-paper';
import Header from '../Header';
import { Table, Row, Rows } from 'react-native-table-component';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
class Bran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['S.N.', 'Customer', 'Unit Packet Price', 'No. of Packets','Date','Total'],
            tableData: [
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Shiva International', '2000', '35', '2071-09-09','3486360'],
              ['1','Hari International', '2000', '35', '2071-09-09','3486360'],
              ['1','Ammonia International', '2000', '35', '2071-09-09','3486360'],
              ['1','Nitrogen International', '2000', '35', '2071-09-09','3486360'],
              ['1','Hydrogen International', '2000', '35', '2071-09-09','3486360'],
              ['1','Chlorine International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360'],
              ['1','Decade International', '2000', '35', '2071-09-09','3486360']
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
                <Header title="Bran Sales" navigation={this.props.navigation}/>
                <IconButton style={{position:'absolute',top:0,right:5}} icon="add" color="#fff" size={25}
                    onPress={()=>this.setState({visible:true})}
                />
                <Searchbar style={{margin:5,borderRadius:5}}
                    onChangeText={(text)=>this.setState({searchText:text})}
                    value={this.state.searchText}
                />
                <ScrollView style={{margin:5,marginTop:0}}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row flexArr={[1, 2, 2, 2,2,2]} data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows flexArr={[1, 2, 2, 2,2,2]} data={state.tableData.filter(x=>x[this.state.searchMode].includes(this.state.searchText))} textStyle={styles.text}/>
                </Table>
                </ScrollView>
                <Modal
                  transparent={true}
                  onRequestClose={()=>this.setState({visible:false})}
                  visible={this.state.visible}>
                <View style={styles.modalBackground}>
                    <View style={{backgroundColor:'#fff',padding:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                            <Text style={{fontSize:20,marginLeft:10}}>Add Bran Sales</Text>
                            <MaterialIcons name="close" size={25} color="#000" 
                                onPress={()=>this.setState({visible:false})}
                            />
                        </View>
                        <Divider style={{marginVertical:10,height:2}}/>
                        <KeyboardAvoidingView style={{marginBottom:10}}>
                            <TextInput style={styles.textInput}
                                theme={{ colors: { primary: "#FF5722" }}}
                                value={this.state.customer}
                                label="Customer"
                                // inputStyle={styles.labelText}
                                underlineColor='#FF5722'
                                // onChangeText={(text)=>this.onChangeLabel(text)} 
                                />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView style={{marginBottom:10}}>
                            <TextInput style={styles.textInput}
                                theme={{ colors: { primary: "#FF5722" }}}
                                value={this.state.customer}
                                label="Unit Packet Price"
                                // inputStyle={styles.labelText}
                                underlineColor='#FF5722'
                                // onChangeText={(text)=>this.onChangeLabel(text)} 
                                />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView style={{marginBottom:10}}>
                            <TextInput style={styles.textInput}
                                theme={{ colors: { primary: "#FF5722" }}}
                                value={this.state.customer}
                                label="No. of Packets"
                                // inputStyle={styles.labelText}
                                underlineColor='#FF5722'
                                // onChangeText={(text)=>this.onChangeLabel(text)} 
                                />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView style={{marginBottom:10}}>
                            <TextInput style={styles.textInput}
                                theme={{ colors: { primary: "#FF5722" }}}
                                value={this.state.customer}
                                label="Date"
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

export default Bran;