import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const styles= StyleSheet.create({
    belowText: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        color: "#007FFF"
    },
    button: {
        height: 56, 
        backgroundColor: "#007FFF",
        borderRadius: 8,
        width: 327,
        justifyContent: 'center'
    },
    text: {
      color: "white",
      fontStyle: 'normal',
      fontWeight: "500",
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 24

    }
})

export const PrimaryButton = (props) => {
    return (

            <View style = {[styles.button, {marginTop: props.padTop || 0}]}>
                  <Text style = {styles.text}>{props.text} </Text>
            </View>
  

    )
}

export const PrimaryText = (props) => {
    return <Text style = {[styles.belowText, {marginTop: props.padTop || 0}]}>{props.text}</Text>
}
