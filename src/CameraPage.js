import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, FileSystem, Permissions } from 'expo';

export default class CameraPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceName: this.props.navigation.state.params.spaceName
    }
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
     const { hasCameraPermission } = this.state;
     if (hasCameraPermission === null) {
       return <View />;
     } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
     } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
          style={{ flex: 1 }}
          ref = {(ref) => {this.camera = ref}}
          type={this.state.type}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>

              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  if(this.camera) {
                    this.camera.takePictureAsync({ onPictureSaved: (photo) => {
                      this.props.navigation.navigate('Filter', {photo: photo, spaceName: this.state.spaceName});
                    }});
                  }
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Snap{' '}
                </Text>
              </TouchableOpacity>

            </View>
          </Camera>
        </View>
      );
    }
  }
}
