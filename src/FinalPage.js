/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        // Finalized Picture
        <Image
          source = {
            {
              isStatic: true,
              uri: 'https://image.ibb.co/cyJ6T0/image3.jpg',
            }
          }
          style={{
            height: 300,
            width: 300,
            marginTop: '15%',
          }}
          />
          <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row', marginTop:'15%'}}>
            <Button
              onPress={() => {
                // Navigate to the last page
                // this.props.navigation.navigate('Final', {photo: editedPhoto});
              }}
              title="Share on Facebook"
             />

             <Button
              onPress={() => {
                // Navigate to the last page
                // this.props.navigation.navigate('Final', {photo: editedPhoto});
              }}
              title="Share on Instagram"
              />
          </View>
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
