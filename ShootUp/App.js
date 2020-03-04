// made by :Ashutosh Bansal
// email: aashutoshbansal03@gmail.com
// linkedin : https://www.linkedin.com/in/aashutosh-bansal-57a968175/

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import MainScreen from "./src/screens/MainScreen"
import TeamBlue from "./src/screens/TeamBlue"
import TeamRed from "./src/screens/TeamRed"
const navigator= createStackNavigator({

  MainScreen: MainScreen,
  TeamRed:TeamRed,
  TeamBlue:TeamBlue

 },{

  initialRouteName: "MainScreen",
  defaultNavigationOption:{   
    title:"MainScreen"
  }
});
 
const App= createAppContainer(navigator);

export default ()=>{
return<App/>
};