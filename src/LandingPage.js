import React from 'react';
import { Alert, StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Welcome to the App'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.text}
        </Text>
        <TextInput
          style={{height:40, width: 200}}
          placeholder="Enter some space term"
          onChangeText={(text) => this.setState({text})}
          />
          <Button
            onPress={() => {
              this.props.navigation.navigate('Camera', {spaceName: this.state.text})
            }}
            title="Take a Snap"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
