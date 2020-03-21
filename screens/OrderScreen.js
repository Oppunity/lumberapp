import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Header, Left, Right, Icon} from 'native-base'
import {  SearchBar } from 'react-native-elements';



export default class OrderScreen extends React.Component{
     static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor }) =>
        <Icon name = "md-cart" 
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
                placeholder="Search all orders..."
                round
                fontColor="black"

                
                containerStyle={{backgroundColor: 'black', width: '100%', borderWidth: 1, borderRadius: 10, position: 'absolute', top: '11%', }}

               /> 

            <View style = {{position: 'absolute', flexDirection: 'row', borderColor: 'white', borderWidth: 1,  top: '20%', width: '90%', height: '12%', alignItems: 'center', justifyContent: 'center', }}>
                 
                 
                
                  <Text style = {{top: 25, left: 20, color: 'white', fontSize: 16, fontWeight: '500', position: 'absolute'}}> Buy Again </Text>
                 <Text style = {{top: 45, left: 20, color: 'dodgerblue', fontSize: 16, fontWeight: '400', position: 'absolute'}}> See More </Text>
                    
                      
                  

                      
                        <TouchableOpacity> 
                        <Image source = {{uri: 'https://www.yellowstonelumber.com/wp-content/uploads/2018/05/wood-dark.jpg'}}
                          style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: 90}}/>
                          </TouchableOpacity>
                       

                        
                     
                        <TouchableOpacity> 
                          <Image source = {{uri: 'https://twainharteace.com/wp-content/uploads/lumber.png'}}
                          style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: 20}}/>
                          </TouchableOpacity>
                       
                     
                        <TouchableOpacity> 
                          <Image source = {{uri: 'https://www.rmfp.com/wp-content/uploads/2018/12/lumber-colors-1080x675.jpeg'}}
                          style={{width: 50, height: 50, resizeMode: 'cover', marginLeft: 20}}/>
                          </TouchableOpacity>
                      
                   
            </View>

             <Icon name = "md-cart" 
      style={{fontSize: 100, color: 'white', position: 'absolute', top: 300}}/>
      <Text style = {{position: 'absolute', top: 420, color: 'white'}}> Your cart is empty </Text>

      <TouchableOpacity style={{ backgroundColor: 'dodgerblue', padding: 5, width: 150, height: 40, justifyContent: 'center', borderRadius: 5, borderWidth: 1, top: 60}}
                           >
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> Start Shopping </Text>

               </TouchableOpacity>
        
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
