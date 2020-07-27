import React from 'react';
import { Dimensions } from 'react-native';

import Swipe from './SwipeCards';
const { width } = Dimensions.get('screen');

export default class Activities extends React.Component {
  render() {
    return (
          <Swipe style={{flex: 1}} />
      );
      }
}
