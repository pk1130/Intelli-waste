

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {SvgXml} from "react-native-svg"
import {camera, house, maps} from "./svgs"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const styles = StyleSheet.create({
    
      footer: {
         
        flexDirection: 'row',
          width: '100%',
          height: '12%',
         justifyContent: 'center',

         alignItems:'center'

      },
      circle: {
        borderRadius: 30,
        width: 50,
        height: 50,
        backgroundColor: '#A7D930',
        alignItems: 'center',  

        marginLeft: 50,
        marginRight: 50,
        justifyContent: 'center'

      },
      circle1: {
        borderRadius: 30,
        width: 40,
        height: 40,
        backgroundColor: '#A7D930',
        alignItems: 'center',
        marginTop: -20,
        justifyContent: 'center'

      },
  

})

class CommonFooter extends React.Component {
    constructor(props) {
        super(props)
        this.background = props.background || "#63371E"
        this.handleNavigation = this.props.navigation
    }
    
    render() {
        return (
         <View style = {[styles.footer, {backgroundColor: this.background}]}>
              <TouchableOpacity onPress = {() => this.handleNavigation(0)}>
                <View style = {styles.circle1}>
                <SvgXml xml = {house} width = "20" height = "30"></SvgXml>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => this.handleNavigation(1)}>
              <View style = {styles.circle}>
                <SvgXml xml = {camera} width = "25" height = "40"></SvgXml>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => this.handleNavigation(2)}>

                <View style = {styles.circle1}>
                <SvgXml xml = {maps} width = "20" height = "30"></SvgXml>
                </View>
              </TouchableOpacity>

          </View>
        )
    }
}
export default CommonFooter;
   
