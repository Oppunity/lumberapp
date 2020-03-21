import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Header, Left, Right, Icon} from 'native-base'
import {  SearchBar } from 'react-native-elements';
import ProductFeed from '../components/ProductFeed'


export default class HomeScreen extends React.Component{
    static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor }) =>
        <Icon name = "home"
      style={{fontSize: 24, color: tintColor}}/>

    }

  render(){
  return (
    <View style={styles.container}>
        
                <Icon  name = "menu" 
                onPress = {() => this.props.navigation.openDrawer()}
                style = {{zIndex: 2, height: 40, width: 40, position: 'absolute', top: 50, left: 30, color: 'white'}}/>

                <Image source = {{uri: 'https://static.wixstatic.com/media/256ff4_33cb552a24564008952f5726a8c43c76~mv2.png/v1/fill/w_1182,h_1038,al_c,q_90/file.jpg'}}
                style = {{height: 40, width: 40, borderRadius: 20, position: 'absolute', right: '10%', top: '5%'}}/>

                <SearchBar 
                placeholder="Search products..."
                round
                fontColor="black"

                
                containerStyle={{backgroundColor: 'black', width: '100%', borderWidth: 1, borderRadius: 10, position: 'absolute', top: '11%', }}

               /> 

            <View style = {{position: 'absolute', top: '22%', alignItems: 'center', justifyContent: 'center', height: '100%', width: '97%'}}>
                    <ProductFeed />
            </View>
        
    </View>
  );
}
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
