import React from "react";
import { View } from "react-native";
import Routes from './src/Routes';
// import { NavigationContainer} from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feed from "./src/screens/Feed";


// const Tab = createBottomTabNavigator();
export default function App(){
  return(
        <Routes/>
        //obrigado jao filipi
      
      // <NavigationContainer>

      //     <Tab.Navigator initialRouteName="Feed" screenOptions={({route}) => ({

      //       tabBarIcon: ({ focused, color, size }) => {
      //         let iconName;

      //         if (route.name === 'feed') {
      //           iconName = focused
      //             ? 'home-sharp'
      //             : 'home-outline';
      //         } else if (route.name === 'busca') {
      //           iconName = focused ? 'search' : 'search';
      //         }else if (route.name === 'reels') {
      //         iconName = focused ? 'videocam' : 'video-outline';
      //       }else if (route.name === 'shop') {
      //       iconName = focused ? 'shopping' : 'shopping-outline';
      //       }else if (route.name === 'conta') {
      //     iconName = focused ? 'person-outline' : 'person-outline';
      //     }

      //         return <Ionicons name={iconName} size={size} color={color} />;
      //       },
      //       tabBarActiveTintColor: 'black',
      //       tabBarInactiveTintColor: 'black',
      //       tabBarLabelStyle: {
      //         paddingBottom: 5,
      //       },
      //     })}

      //   >

      //     <Tab.Screen name="feed" component={Feed}/>
      //     <Tab.Screen name="busca" component={Feed}/>
      //     <Tab.Screen name="feed" component={Feed}/>
      //     <Tab.Screen name="feed" component={Feed}/>
      //   </Tab.Navigator>
        

      // </NavigationContainer>
    
      
    
    


  );
}