import React from 'react';
import { Image } from 'react-native'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import {  createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import AccountScreen from './screens/AccountScreen'
import OrderScreen from './screens/OrderScreen'
import SettingsScreen from './screens/SettingsScreen'


const { width } = Dimensions.get('window')
export default class App extends React.Component{
  render(){
  return (
   <AppContainer/>
  );
 }
}

const CustomDrawerComponent = (props) => (
   <SafeAreaView style = {{flex: 1}}>
   <View style = {{height: 150, backgroundColor: 'white'}}>
    <Image source = {{uri: 'https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png'}}
    style = {{height: 120, width: 120, borderRadius: 60, justifyContent: 'center'}}/>
   </View>
  
   

   <ScrollView>
   <DrawerItems {...props} />
   </ScrollView>
   </SafeAreaView>
 )

const AppDrawerNavigator = createDrawerNavigator(
  {
  Home: HomeScreen,
  Account: AccountScreen,
  Orders: OrderScreen, 
    Settings: SettingsScreen,
  },

 {
  contentComponent: CustomDrawerComponent,
  drawerWidth: '60%'
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = createAppContainer(AppDrawerNavigator)
