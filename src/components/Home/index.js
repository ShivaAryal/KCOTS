import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity,Dimensions, StyleSheet } from 'react-native';
import PureChart from 'react-native-pure-chart';
import Header from '../Header';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mode:'M',
            data:[{"x":"Jan",'y':12000},
                    {"x":"Feb",'y':14000},
                    {"x":"Mar",'y':13500},
                    {"x":"Apr",'y':11500},
                    {"x":"May",'y':13500},
                    {"x":"Jun",'y':12500},
                    {"x":"Jul",'y':11250},
                    {"x":"Aug",'y':12250},
                    {"x":"Sep",'y':12200},
                    {"x":"Nov",'y':11500},
                    {"x":"Dec",'y':14500},]
         };
    }
    onPressMode=(mode)=>{
        this.setState({
            mode:mode
        })
    }
    render() {
        return (
          <View style={{flex:1}}>
              <Header title="Home" navigation={this.props.navigation}/>
              <ScrollView style={{backgroundColor:'#fff'}}>
              <View style={styles.modeView}>
                <TouchableOpacity style={[styles.modeButton,{backgroundColor:this.state.mode=='Y' && '#FF5722' || '#E0E0E0'}]}
                    onPress={()=>this.onPressMode('Y')}>
                    <Text style={{color:this.state.mode=='Y'  && '#fff' || '#000',fontSize:20}}>Y</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modeButton,{backgroundColor:this.state.mode=='M' && '#FF5722' || '#E0E0E0'}]}
                    onPress={()=>this.onPressMode('M')}>
                <Text style={{color:this.state.mode=='M'  && '#fff' || '#000',fontSize:20}}>M</Text>
                </TouchableOpacity>
              </View>
              {this.state.mode=='M' && <View>
              <View style={styles.salesView}>
                <View style={[styles.salesIView,{width:Dimensions.get('window').width/2-60}]}>
                    <Text style={{alignSelf:'center'}}>20000 rs</Text>
                    <Text style={{alignSelf:'center'}}>This Month Sale</Text>
                </View>
                <View style={[styles.salesIView,{width:Dimensions.get('window').width/2-60}]}>
                    <Text style={{alignSelf:'center'}}>2000 rs</Text>
                    <Text style={{alignSelf:'center'}}>This Month Profit</Text>
                </View>
              </View>
              {/* graph view */}
              <View style={{marginTop:20}} >
                <PureChart 
                    data={this.state.data}
                    type='line' 
                    height={200} 
                    width={'100%'} 
                    showEvenNumberXaxisLabel={false}/>
                </View>
                <Text style={{marginLeft:20}}>Monthly Sales</Text>
                <View style={{marginTop:30}} >
                <PureChart 
                    data={this.state.data}
                    type='line' 
                    height={200} 
                    width={'100%'} 
                    showEvenNumberXaxisLabel={false}/>
                </View>
                <Text style={{marginLeft:20}}>Monthly Profits</Text>
                <View style={[styles.salesView,{marginHorizontal:20,marginVertical:20}]}>
                <View style={[styles.salesIView,{width:Dimensions.get('window').width/2-10}]}>
                    <Text style={{alignSelf:'center'}}>30000 rs</Text>
                    <Text style={{alignSelf:'center'}}>Predicted Next Month Sale</Text>
                </View>
                <View style={[styles.salesIView,{width:Dimensions.get('window').width/2-10}]}>
                    <Text style={{alignSelf:'center'}}>2000 rs</Text>
                    <Text style={{alignSelf:'center'}}>Predicted Next Month Profit</Text>
                </View>
              </View>
                </View> ||
                <View>
                <View style={[styles.salesView,{marginHorizontal:10,marginVertical:20}]}>
                  <View style={[styles.salesIView,{width:Dimensions.get('window').width/2-10}]}>
                      <Text style={{alignSelf:'center'}}>2000 rs</Text>
                      <Text style={{alignSelf:'center'}}>This Year Sale</Text>
                  </View>
                  <View style={[styles.salesIView,{width:Dimensions.get('window').width/2-10}]}>
                      <Text style={{alignSelf:'center'}}>2000 rs</Text>
                      <Text style={{alignSelf:'center'}}>This Year Profit</Text>
                  </View>
                </View>
                {/* graph view */}
                <View style={{marginTop:20}} >
                  <PureChart 
                      data={this.state.data}
                      type='line' 
                      height={200} 
                      width={'100%'} 
                      showEvenNumberXaxisLabel={false}/>
                  </View>
                  <Text style={{marginLeft:20}}>Yearly Sales</Text>
                  <View style={{marginTop:30}} >
                  <PureChart 
                      data={this.state.data}
                      type='line' 
                      height={200} 
                      width={'100%'} 
                      showEvenNumberXaxisLabel={false}/>
                  </View>
                  <Text style={{marginLeft:20}}>Yearly Profits</Text>
                  <View style={[styles.salesView,{marginHorizontal:10,marginVertical:20}]}>
                  <View style={[styles.salesIView,{width:Dimensions.get('window').width/2-10}]}>
                      <Text style={{alignSelf:'center'}}>300000 rs</Text>
                      <Text style={{alignSelf:'center'}}>Predicted Next Year Sale</Text>
                  </View>
                  <View style={[styles.salesIView,{width:Dimensions.get('window').width/2-10}]}>
                      <Text style={{alignSelf:'center'}}>20000 rs</Text>
                      <Text style={{alignSelf:'center'}}>Predicted Next Year Profit</Text>
                  </View>
                </View>
                  </View>
            }
              </ScrollView>
          </View>  
        );
    }
}

const styles = StyleSheet.create({
    modeView:{
        flexDirection:'row',
        alignSelf:'flex-end',
        marginVertical:5
    },
    modeButton:{
        width:30,
        height:30,
        borderRadius:25,
        marginRight:7,
        alignItems:'center',
        justifyContent:'center'
    },
    salesView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:30
    },
    salesIView:{
        borderWidth:1,
        borderBottomWidth:2,
        borderColor:'#F5F5F5',
        borderRadius:5
    }
})

export default Home;