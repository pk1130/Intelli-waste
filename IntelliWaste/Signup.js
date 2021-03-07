import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  TextInput,
  Text,
  FlatList,
  StatusBar,
 
  TouchableOpacity,
} from 'react-native';
import CheckBox from "@react-native-community/checkbox"
import EmailPassword from "./EmailPassword" 
import {PrimaryButton, PrimaryText} from "./PrimaryButton"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SvgXml} from "react-native-svg"
import Axios from "axios";
import {checkBox} from "./svgs"

const styles = StyleSheet.create({

    view: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 150        
       
    },
    input: {
  
        backgroundColor: '#E7ECF3',
        width: 327,
        height: 50,
        borderWidth: 1,
        borderColor: '#E7ECF3',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20
    } ,
    checbox: {
        marginTop: 20,
      
        flexDirection: 'row',
        alignItems: 'center',
    }
    ,
    text : {
        width: "80%",
        marginTop: 15,
        marginLeft: 10,
        color: "#1D232E",
        fontSize: 14,
        lineHeight: 20
    }
    
})



class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                email: "",
                password: "",
                name: "",
            },
            isSelected: false,

        }
    }
    handleSignup() {
        const url = "http://0.0.0.0:3000/api/signup"
        const body = {
            email: this.state.data.email,
            pass: this.state.data.password,
            name: this.state.data.name
        }
        Axios.post(url, body).then(res => {

            if(res.data.found) {
                alert('Email already exists')
            }else {
                this.setState({data: {
                    email: "",
                    password: "",
                    name: "",
                }})
                this.props.navigation.navigate("Login")
            }
        })

        
    }
    update(type, val) {
        if(type !== undefined)
            this.setState({data: {...this.state.data, [type]: val}})
    }
    render() {
        return (
            <View style = {styles.view}>
                <View style = {styles.input}>
                    <TextInput  value = {this.state.data.name} onChangeText = {(text) => this.setState({data: {...this.state.data, name: text}})} placeholder = "Name" placeholderTextColor = "#A7B0C0">
                  
                    </TextInput>
                
                </View>
                <EmailPassword update = {this.update.bind(this)}></EmailPassword>
                <View style = {styles.checbox}>
                 <SvgXml xml = {checkBox} width = "20" height = "20"></SvgXml>
                 <Text style = {styles.text}>I would like to receive your newsletter and other promotional information.</Text>
                 
                </View>
                <TouchableOpacity onPress = {() => this.handleSignup()}>
                  <PrimaryButton  text = "Sign Up" padTop = {50}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress = {() => this.props.navigation.navigate("Login")}>
                <PrimaryText text = "Already have account? Log In" padTop = {10}></PrimaryText>

                </TouchableOpacity>


            </View>
        )
    }

}
export default SignUp;