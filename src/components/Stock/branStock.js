import React, { Component } from 'react';
import { View, StyleSheet,ScrollView,Picker, Modal, Text, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, Keyboard } from 'react-native';
import {Searchbar,IconButton, Divider,TextInput,FAB} from 'react-native-paper';
import Header from '../Header';
import { Table, Row, Rows } from 'react-native-table-component';
import StockService from './stocks.services.js';
import {getToken} from './../../utils';
class Bran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['S.N.', 'Good Name', 'Unit Packet Price', 'No. of Packets'],
            tableData: [],
            visible:false,
            filterMode:'Customer',
            searchText:'',
            searchMode:1,
            loading:false,
            good:'Masino Bran'
          }
    }

    componentDidMount(){
        getToken().then(token=>{
            this.setState({token:token})
            this.setState({loading:true})
            StockService.getBranStock(token).then(res=>{
                let tableData =[]
                res.map((datum,i)=>{
                    tableData.push([i+1,datum.good,datum.unitPrice,datum.noofPackets])
                })
                this.setState({tableData:tableData,loading:false})
            }).catch(err=>{
                this.setState({loading:false})
                alert("err")
            })
        })
    }

    isValid(){
        const state = this.state;
        if(state.good && state.unitPacketPrice && state.noofPackets) return true;
        else return false;
    }

    onSubmit(){
        Keyboard.dismiss();
        const {good,unitPacketPrice,noofPackets} = this.state;
        this.setState({loading:true,visible:false})
        StockService.postBranStock(this.state.token,good,unitPacketPrice,noofPackets).then(res=>{
            alert("Succesfully added")
            StockService.getBranStock(this.state.token).then(res=>{
            let tableData =[]
            res.map((datum,i)=>{
                tableData.push([i+1,datum.good,datum.unitPrice,datum.noofPackets])
            })
            this.setState({tableData:tableData,loading:false})
        })
        this.setState({
            good:'Masino Bran',
            unitPacketPrice:'',
            noofPackets:'',
            loading:false
        })
        }).catch(err=>{
            this.setState({loading:false})
            alert("sorry can't be added")
        })
    }

    render() {
        const state = this.state;
        return (
           <View style={styles.container}>
                <Header title="Bran Stock" navigation={this.props.navigation}/>
                <IconButton style={{position:'absolute',top:0,right:5}} icon="add" color="#fff" size={25}
                    onPress={()=>this.setState({visible:true})}
                />
                <Searchbar style={{margin:5,borderRadius:5}}
                    onChangeText={(text)=>this.setState({searchText:text})}
                    value={this.state.searchText}
                />
                {this.state.loading && <View style={styles.loaderContainer}>
                    <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
                </View> ||
                <ScrollView style={{margin:5,marginTop:0}}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row flexArr={[0.8, 2, 2,2]} data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows flexArr={[0.8, 2, 2,2]} data={state.tableData.filter(x=>x[this.state.searchMode].includes(this.state.searchText))} textStyle={styles.text}/>
                </Table>
                </ScrollView>}
                <Modal
                  transparent={true}
                  onRequestClose={()=>this.setState({visible:false})}
                  visible={this.state.visible}>
                <ScrollView contentContainerStyle={styles.modalBackground} keyboardShouldPersistTaps="handled" >
                    <View style={{backgroundColor:'#fff',padding:10,borderRadius:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                            <Text style={{fontSize:20,marginLeft:10,marginVertical:5}}>Add Bran Stock</Text>
                            <FAB
                                icon="close"
                                color="#fff"
                                style={{width:35,height:35,backgroundColor:'#c6291c',alignItems:'center',justifyContent:'center'}}
                                onPress={()=>this.setState({visible:false})}
                            />
                        </View>
                        <Divider style={{marginVertical:10,height:2}}/>
                        {/* <KeyboardAvoidingView style={{marginBottom:10}}>
                            <TextInput style={styles.textInput}
                                theme={{ colors: { primary: "#FF5722" }}}
                                value={this.state.good}
                                label="Good"
                                // inputStyle={styles.labelText}
                                underlineColor='#FF5722'
                                onChangeText={(text)=>this.setState({good:text})} 
                                />
                        </KeyboardAvoidingView> */}
                        <Picker
                            style={{marginBottom:0}}
                            selectedValue={this.state.good}
                            onValueChange={(itemValue, itemIndex) => this.setState({good: itemValue})}
                            mode="dropdown">
                            <Picker.Item value="Masino Bran" label="Masino Bran" />
                            <Picker.Item value="Moto Bran" label="Moto Bran" />
                        </Picker>
                        <Divider style={{backgroundColor:'#FF5722',height:1.2,marginVertical:5,marginBottom:10}}/>
                        <KeyboardAvoidingView style={{marginBottom:10}}>
                            <TextInput style={styles.textInput}
                                theme={{ colors: { primary: "#FF5722" }}}
                                value={this.state.unitPacketPrice}
                                label="Unit Packet Price"
                                keyboardType="numeric"
                                underlineColor='#FF5722'
                                onChangeText={(text)=>this.setState({unitPacketPrice:text})} 
                                />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView style={{marginBottom:10}}>
                            <TextInput style={styles.textInput}
                                theme={{ colors: { primary: "#FF5722" }}}
                                value={this.state.noofPackets}
                                label="No. of Packets"
                                keyboardType="numeric"
                                underlineColor='#FF5722'
                                onChangeText={(text)=>this.setState({noofPackets:text})} 
                                />
                        </KeyboardAvoidingView>
                        <TouchableOpacity style={[styles.submitButton,{backgroundColor:this.isValid() && '#FF5722' || '#FF8A65'}]}
                            activeOpacity={0.7}
                            onPress={()=>this.onSubmit()}
                            disabled={!this.isValid()}
                        >
                            <Text style={{fontSize:20,color:'#fff'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        paddingHorizontal:'7%',
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
    },
    loaderContainer:{
        flex: 1,
        zIndex: 1111,
        backgroundColor: '#ffffff85',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        alignItems: 'center',
    },
    loader: {
        width: 50,
        top: '25%',
        zIndex: 11111,
        alignSelf:'center'
    }
})

export default Bran;