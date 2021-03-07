import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  StatusBar,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const styles = StyleSheet.create({
    rootView: { 
        height: "100%",
        flexDirection: 'column',
        backgroundColor: 'black',
        paddingTop: 10
        
    },
    preview: {
        height: "80%",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    top: {
        height:40,
    
        justifyContent: 'space-between',
        flexDirection: 'row',
        
        paddingLeft: 20,
        paddingRight: 20
    
    }
})
class CameraScreen extends React.Component {
     constructor(props) {
         super(props)
         this.state = {
             flashMode: RNCamera.Constants.FlashMode.off,
             side: RNCamera.Constants.Type.back,
             flashIcon: "flash-off"
         }
     }
    takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
    };
    toggleFlash() {
        const [flashMode, flashIcon] = (this.state.flashMode === RNCamera.Constants.FlashMode.on) ? [RNCamera.Constants.FlashMode.off, "flash-off"] : [RNCamera.Constants.FlashMode.on, "flash-on"]
        this.setState({flashMode: flashMode, flashIcon: flashIcon})
    }
    toggleCameraType() {
        const side = (this.state.side === RNCamera.Constants.Type.front) ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front
        this.setState({side})  
    }
    goToDashboard() {
        this.props.navigation.navigate("Dashboard")
    }
    render() {
        return ( 
            <View style = {styles.rootView}>
                <View style = {styles.top}>
                  <TouchableHighlight onPress = {() => this.toggleFlash()}>
                     <Icon name={this.state.flashIcon} size={30} color="white" />
                  </TouchableHighlight>
                  <TouchableHighlight onPress = {() => this.toggleCameraType()}>
                    <Icon name="flip-camera-ios" size={30} color={"white"} />

                  </TouchableHighlight>
                  <TouchableHighlight onPress = {() => this.goToDashboard()}>
                     <Icon name="close" size={30} color={"white"} />
                  </TouchableHighlight>
            
                </View>
                <RNCamera
                    ref = {ref => {this.camera = ref}}
                   
                    flashMode = {this.state.flashMode}
                    type = {this.state.side}
                    style = {styles.preview}
                    captureAudio = {false}
                    useNativeZoom = {true}
                    playSoundOnCapture = {true}
                >
                
                   



                </RNCamera>
                <View style={{ height: '10%', flexDirection: 'row', justifyContent: 'center' , paddingTop: 20}}>
                       
                     <TouchableHighlight onPress = {() => this.takePicture()}>
                        <Icon name= "photo-camera" size={60} color="white" />
                     </TouchableHighlight>
                </View>


            </View>

        );


    }

}
export default CameraScreen;