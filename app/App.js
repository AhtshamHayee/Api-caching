/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Fragment } from "react";
 import {SafeAreaView} from "react-native";
 import AppNavigation from "./src/navigation/index";
 

 const App = () => {
   return (
     <SafeAreaView style={{flex:1}}>
      <AppNavigation />
     </SafeAreaView>

   );
 };

 
 export default App;
 