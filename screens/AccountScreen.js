import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Header, Left, Right, Icon} from 'native-base'



export default class AccountScreen extends React.Component{
    static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor }) =>
        <Icon name = "md-contact" 
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

               

            <View style = {{flexDirection: 'row', top: '10.5%', marginTop: 10, left: 10, height: 70, width: '95%', position: 'absolute', borderColor: 'white',}}>
              <TouchableOpacity style={{backgroundColor: 'dodgerblue', padding: 5, width: 150, height: 40, justifyContent: 'center', borderRadius: 5, borderWidth: 1, left: 10, top: 10}}
                           >
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> Sign In </Text>

               </TouchableOpacity>
              

               <Image 
               source = {{uri: 'https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png'}}
               style = {{position: 'absolute', top: '10%', right: '7.5%', height: 50, width:50, borderRadius: 25, borderColor: 'white', borderWidth:1}}>
               </Image> 
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
