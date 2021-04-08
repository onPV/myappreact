import React from 'react';
import {View} from 'react-native';
import About from './components/About';
import Search from './components/Search';

export default class App extends React.Component {
    

    render(){
        return(
               <View style={{marginVertical : 40}}>
               <Search/>
               </View>
        );
    }
}

