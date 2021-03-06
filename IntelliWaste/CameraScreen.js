import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
const styles = StyleSheet.create({
    rootView: { 
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
class CameraScreen extends React.Component {
   
    takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
      };
    
    render() {
        return ( 
            <View style = {styles.rootView}>
                <RNCamera
                    ref = {ref => {this.camera = ref}}
                    style = {styles.preview}
                    captureAudio = {false}
                    status  = {RNCamera.Constants.CameraStatus.PENDING_AUTHORIZATION}
                    flasMode = {RNCamera.Constants.FlashMode.on}
                    type = {RNCamera.Constants.Type.front}
                    useNativeZoom = {true}

                >
                   <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Text style={{ fontSize: 14 }}> SNAP </Text>
                        </TouchableOpacity>
                    </View>



                </RNCamera>


            </View>

        );


    }

}
export default CameraScreen;