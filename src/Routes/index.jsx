import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Feed from '../screens/Feed';
import logo from '../../assets/logo.png';
import send from '../../assets/send.png';
import like from '../../assets/like.png';
import { Octicons } from '@expo/vector-icons';

const MainNavigator = createStackNavigator(
  {
    Feed
  },
  {
    defaultNavigationOptions: {
      headerTitle: '',
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Image source={logo} />
        </TouchableOpacity>
      ),
      headerRight: (
        <>
          <TouchableOpacity style={{ marginRight: 10, marginTop:10 }}>
            <Image source={send} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 50, marginTop:-20 }}>
            <Image source={like} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Octicons name="diff-added" size={20} color="black" style={{marginRight:85, marginTop: -20}} />
          </TouchableOpacity>
        </>
      )
    }
  }
);

export default createAppContainer(MainNavigator);