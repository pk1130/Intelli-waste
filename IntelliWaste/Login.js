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
import Axios from "axios";
import EmailPassword from "./EmailPassword" 
import {PrimaryButton, PrimaryText} from "./PrimaryButton"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const styles = StyleSheet.create({

    view: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 150        
       
    },
    
})
class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                email: "",
                password: ""
            }
        }
    }
    handleLogin() {
        const url = "http://0.0.0.0:3000/api/login"
        Axios.post(url, {email: this.state.data.email, pass: this.state.data.password}).then(res => {
            if(!res.data.verify) {
                alert('Invalid Credentials')
            }else {
                this.setState({data: {
                    email: "",
                    password: "",
             
                }})
                this.props.route.params.setUser(res.data.user)
            }
        })
    }
    update(type, text) {
        if(type !== undefined)
            this.setState({data: {...this.state.data, [type]: text}})
    }
    render() {
        return (
            <View style = {styles.view}>
                <EmailPassword update = {this.update.bind(this)}></EmailPassword>
                <TouchableOpacity onPress = {() => this.handleLogin()}>
                  <PrimaryButton  text = "Log In" padTop = {50}/>
                </TouchableOpacity>
                <PrimaryText text = "Forget your password?" padTop = {10}></PrimaryText>
            </View>
        )
    }

}
export default Login;