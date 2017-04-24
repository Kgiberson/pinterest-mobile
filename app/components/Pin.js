import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Back,
  Heart,
  More,
  PinIcon,
  Share
} from '../util/icons';


export default class Pin extends Component {
  render() {
    return (
      <View style={styles.PinContainer}>

        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <Back />
            <Heart />
            <More />
            <Share />
          </View>
          <View style={styles.PinButtonContainer}>
            <View style={styles.PinButton}>
              <PinIcon />
              <Text style={styles.PinButtonText}>Save</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  PinContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  PinHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  UtilityNav: {
    flexDirection: 'row'
  }
})
