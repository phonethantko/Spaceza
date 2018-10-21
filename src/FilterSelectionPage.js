/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet, Image,
  TouchableHighlight,
} from 'react-native';
import { Button } from 'react-native-elements';


export default class FilterSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.navigation.state.params.photo,
      spaceName: this.props.navigation.state.params.spaceName,
      text: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, marginTop: '10%'}}>{this.state.spaceName}</Text>
        <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row', marginTop: '10%'}}>
          <TouchableHighlight onPress={() => {}}>
          <Image
            source = {
              {
                isStatic: true,
                uri: 'https://image.ibb.co/jQ4fo0/image1.jpg',
              }
            }
            style={{
              height: 150,
              width: 150,
              marginRight: '1%'
            }}
            />
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{
            this.props.navigation.navigate('Final')
          }}>
            <Image
              source = {
                {
                  isStatic: true,
                  uri: 'https://image.ibb.co/cyJ6T0/image3.jpg',
                }
              }
              style={{
                height: 150,
                width: 150,
                marginRight: '1%'
              }}
              />
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{}}>
              <Image
                source = {
                  {
                    isStatic: true,
                    uri: 'https://image.ibb.co/bQ7N1L/image2.jpg',
                  }
                }
                style={{
                  height: 150,
                  width: 150,
                  marginRight: '1%'
                }}
                />
            </TouchableHighlight>
        </View>
        <Text style={{ fontSize: 15, color: 'blue'}}>"Tap on your favourite image to proceed!"</Text>
        <View style={{flex: 1, paddingLeft: '5%', paddingRight: '5%', marginTop: '10%'}}>
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '3%'}}
            >Description about "Abell 370"</Text>
          <Text>
            'Much like the eclectic group of space rebels in the upcoming film Guardians of the Galaxy Vol. 2, NASA’s Hubble Space Telescope has some amazing superpowers, specifically when it comes to observing innumerable galaxies flung across time and space. A stunning example is a galaxy cluster called Abell 370 that contains an astounding assortment of several hundred galaxies tied together by the mutual pull of gravity. That’s a lot of galaxies to be guarding, and just in this one cluster! '
          </Text>
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
