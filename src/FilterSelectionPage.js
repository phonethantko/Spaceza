/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet, Image, Button
} from 'react-native';

export default class FilterSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.navigation.state.params.photo,
      spaceName: this.props.navigation.state.params.spaceName
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <Text>{this.state.spaceName}</Text>
        <Image
          source = {
            {
              isStatic: true,
              uri: this.state.photo.uri,
            }
          }
          style={{
            height: 300,
            width: 300,
          }}
          />
        </View>
        <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>

          <Button
            onPress={() => {

            }}
            title="Original"
          />

          <Button
            onPress={() => {

            }}
            title="Filter 1"
           />

           <Button
            onPress={() => {

            }}
            title="Filter 2"
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
