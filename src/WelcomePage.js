import React from 'react';
import { Image, Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: 'Welcome',
      text2: 'We are an AI Space Filter'
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Text style={{ color: '#A9A9A9', fontSize: 40}}>
          {this.state.text1}
        </Text>
        <Text style={{ color: '#A9A9A9', fontSize: 30}}>
          {this.state.text2}
        </Text>

        <Button
          onPress={() => {
            this.props.navigation.navigate('Landing')
          }}
          title="I'm ready!"
          style={{marginTop: '10%', width: 200}}
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
