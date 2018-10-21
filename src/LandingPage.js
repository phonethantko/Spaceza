import React from 'react';
import { Alert, StyleSheet, ImageBackground,  Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'With the word you use, we will determine the filter you want'
    };
  }
  render() {
    return (
      <ImageBackground
        source={{uri: 'https://images-assets.nasa.gov/image/PIA16466/PIA16466~large.jpg'}}
        style={{ width: '100%', height: '100%', flex: 1}}
      >
      <View style={styles.container}>
        <Text style={{ fontSize: 15, color: '#fff'}}>
          {this.state.text}
        </Text>
        <TextInput
          style={{height:50, width: 300, marginTop: '5%'}}
          placeholder="Enter some space term"
          placeholderTextColor="#fff" 
          onChangeText={(text) => this.setState({text})}
          />
          <Button
            onPress={() => {
              this.props.navigation.navigate('Camera', {spaceName: this.state.text})
            }}
            title="Take a Snap"
            style={{ marginTop: '10%'}}
          />
      </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
