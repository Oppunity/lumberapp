import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Header, Left, Right, Icon} from 'native-base'



export default class SettingsScreen extends React.Component{
   static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor }) =>
        <Icon name = "md-settings"  
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

               

            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text> Settings Screen </Text>
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
