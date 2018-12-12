import React, { Component } from 'react';
import { View,Dimensions } from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import Home from './Home';
import Sales from './Sales';
import Transactioner from './Transactioner';
import Stock from './Stock';
import Expense from './Expense';
import Drawer from './Drawer';
import { Constants } from 'expo';
const AppNavigator = createDrawerNavigator({
    Home:{screen:Home},
    Sales:{screen:Sales},
    Transactioner:{screen:Transactioner},
    Stock:{screen:Stock},
    Expense:{screen:Expense}
  },{
      initialRouteName:'Home',
      headerMode:'none',
      drawerPosition:'left',
      drawerWidth:Dimensions.get('window').width*0.7,
      contentComponent:Drawer
    //   drawerLockMode: 'locked-closed'
  });

  const App = createAppContainer(AppNavigator)

  export default function Route(){
      return(
          <View style={{flex:1}}>
            <View style={{backgroundColor: "#FF5722",height: Constants.statusBarHeight}} />
            <App/>
          </View>
      )
  }