
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
import {camera} from "./svgs"
import  DashboardButton from "./DashboardButton"
import CommonFooter from "./CommonFooter"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const styles = StyleSheet.create({
    dashboard : {
            width: "100%",
            alignItems: 'center'


    },
    topView : {
            flex: 1,
            flexDirection: "column",
            paddingTop: 20,
            backgroundColor: '#7B4425',
            alignItems: 'center',
            justifyContent: 'space-between'
            
            
    },
    leaf: {
        width: 331,
        height: 331,
        marginBottom: 40
    },
    outerCircle: {
        borderRadius: 200,
        width: 242.07,
        height: 242.07,
        borderRightColor: "#9EC590",
        borderStartColor: 'rgb(149,194,43)',
        borderBottomColor: 'rgb(149,194,43)',
        borderTopColor: 'rgb(149,194,43)',
        alignSelf: 'center',
        borderWidth: 3,
        marginTop: 80,
        paddingTop: 75
      },
      textView : {
          alignSelf: 'center',
       
          
      },
      tvContainer: {
         alignItems: 'center',
      },       
         
   
      text: {
          fontSize: 24,
          color: 'rgb(149,194,43)',
          
         
      },
      reduction: {
          fontSize: 15,
          color: "#9EC590",
      },
      footer: {
          backgroundColor: '#63371E',
        
          width: '100%',
          height: '12%'

      }
      
  

})
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        console.log(this.props.route.params.user)
        this.state = {
            reduction: this.props.route.params.user.carbon_footprint,
            buttons: Array.of("This or That?", "Recycler Finder", "Learn More"), 
            
        }
        this.footerNavigation = (iconIndex) =>  {
            
            switch(iconIndex) {
                case 0:
                    this.props.navigation.navigate("Dashboard")
                    return 
                case 1:
                    this.props.navigation.navigate("Camera")
                    return 
                default: 
                    return 
            }
        } 

    } 
    handleNavigation(buttonTitle) {
        alert(buttonTitle)
    }
    renderDashboardButton({item}) {
        return (
           <TouchableOpacity onPress  = {() => this.handleNavigation(item)}>
             <DashboardButton text = {item} ></DashboardButton>

           </TouchableOpacity>
        )

    }
    

    render() {

        return (
            <View style = {styles.topView} >
                <View style = {styles.dashboard}>
                    
                    <ImageBackground source = {require("./static/leaf.png")} imageStyle = {{opacity: 0.2}} style = {styles.leaf} >
                        <View style={styles.outerCircle}>
                            <View style = {styles.textView}>
                                <View style = {styles.tvContainer}>
                                    <Text style = {styles.text}>Carbon</Text>
                                    <Text style = {styles.text}>Footprint</Text>
                                </View>
                                <View style = {styles.tvContainer}>
        <Text style = {styles.reduction}>{this.state.reduction}% reduced this month</Text>
                                    
                                </View>
                            </View>
             
                        </View>
                    </ImageBackground> 
                    <FlatList
                        data = {this.state.buttons}
                        renderItem = {this.renderDashboardButton.bind(this)}
                        keyExtractor = {(buttonTitle) => buttonTitle}
                        
                    >

                    </FlatList>
                    
                   

                    
                   
                </View>
                <CommonFooter navigation = {this.footerNavigation}></CommonFooter>

             

            </View>
        )
    }
}


export default Dashboard;
