import React from 'react';
import Router from './src/navigation/Router';
import { SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView  style={{flex:1 , backgroundColor: "#9ee4d4"}}>
      <StatusBar backgroundColor={"#9eee4d4"} barStyle={"dark-content"}/>
      <Router/>
    </SafeAreaView>
   
  );
}

export default App;

