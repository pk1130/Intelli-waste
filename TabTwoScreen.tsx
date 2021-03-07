import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';

import {Button} from 'react-native-elements';
export default function TabTwoScreen() {
  const image = { uri: "https://cdn.discordapp.com/attachments/817573910320513045/818229605725896724/leaf.png" };
    return (
    
    <View style={{ flex: 1, backgroundColor: '#009900'}} >
     
      <Text style={{
    fontWeight: 'bold',
    fontSize: '70',
    color: '#99cc00',
    marginTop : 30,
    textAlign : 'center'
      }}>Intelli-Waste</Text>

      <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 36
      }}>

        
        <ImageBackground source={image} style={{
          position: 'absolute',
          bottom:0,
          width: 300,
          height: 300
    }}>
    
        </ImageBackground>
      </View>
      <TouchableOpacity style = {{
              marginRight:40,
              marginLeft:40,
             marginTop:10,
              paddingTop:10,
              paddingBottom:10,
              backgroundColor:'#1E6738',
              borderRadius:10,
              borderWidth: 1,
              borderColor: '#fff',
              bottom: 10
            }}>
              <Text style={{
                color:'#fff',
                textAlign:'center',
                paddingLeft : 10,
                paddingRight : 10
              }}>Login</Text>
            </TouchableOpacity>
    </View>
    )
}




