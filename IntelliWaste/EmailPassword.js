
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
  ProgressViewIOSComponent,
} from 'react-native';
import { ThemeConsumer } from 'react-native-elements';
import {SvgXml} from "react-native-svg"
import {camera, house, maps} from "./svgs"

/*


position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;


background: #F8FAFD;
border: 1px solid #E7ECF3;
box-sizing: border-box;
border-radius: 8px;

*/
/*


position: absolute;
width: 40px;
height: 24px;
left: 16px;
top: calc(50% - 24px/2);

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.25px;


color: #A7B0C0;


*/

const styles = StyleSheet.create({
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
  } 
})
class EmailPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showHideText: "Show",
            email: "",
            password: "",

        }
    }
    toggleShowHidePassword() {
        const show = !this.state.show
        const showHideText = (show) ? "Hide" : "Show"
        this.setState({show, showHideText})
    }
    handleInputChange(text, type) {

        this.props.update(type, text)

        this.setState({[type]: text})
        
    }
    render() {

        return (
            <View>
                <View style = {styles.input}>
                    <TextInput  value = {this.state.email} onChangeText = {(text) => this.handleInputChange(text, "email")} placeholder = "Email" placeholderTextColor = "#A7B0C0" textContentType = "emailAddress" keyboardType = "email-address">
                  
                    </TextInput>
           
                </View>
                <View style = {styles.input}>
                    <TextInput  value = {this.state.password} onChangeText = {(text) => this.handleInputChange(text, "password")} style = {{flex: 1}} placeholder = "Password" placeholderTextColor = "#A7B0C0"  secureTextEntry = {!this.state.show} textAlign = "left">
                  
                    </TextInput>
                    <TouchableOpacity onPress = {() => this.toggleShowHidePassword()}>
                          <Text style = {{color: '#007FFF'}}>{this.state.showHideText}</Text>

                    </TouchableOpacity>
           
                </View>
                
               
               

            </View>
            

        )
    }

}
export default EmailPassword;