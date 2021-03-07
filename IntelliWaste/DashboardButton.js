import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Text,
  StatusBar,
  
} from 'react-native';
/* 


position: absolute;
width: 300px;
height: 75px;
left: 57px;
top: 400px;

background: #28430A;
box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
border-radius: 25px;

*/
/*
position: absolute;
width: 168px;
height: 35px;
left: calc(50% - 168px/2);
top: 420px;

font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 35px;
text-align: center;

color: #95C22B;

border: 1px solid #000000;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

*/
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#28430A',
        borderRadius: 25,
        width: 300,
        height: 75,
        shadowOffset:{  width: 0,  height: 4,  },
        shadowRadius: 3,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 1.0,
        justifyContent: 'center',
        marginBottom: 30

    },
    text: {
        fontStyle: 'normal',
        fontSize: 28,
        lineHeight: 35,
        textAlign: 'center',
        color: '#95C22B',
        textShadowOffset: {width: 0, height: 4},
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 4,
    
    }
})

class DashboardButton extends React.Component {
     constructor(props)  {
        super(props)
     }
     render() {
        return (
            <View style = {styles.button}>
                    <Text style = {styles.text}>{this.props.text} </Text>

            </View>
        )

     }

}
export default DashboardButton ;