import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export default class About extends React.Component {
    render () {
        return (
        <View style={style.view}>
            <Text style={style.title}> About me. </Text>
            <Text> blablabla ldksgjsmdlkfghj qdmlkghqmldskjgh mlkqdjshg mlqksjdh mqdsjklgh qmsdkgjh qmsdklghj msdlkh qmsdlkjh mqlsdkg mqdslkjh mqlkdh
            </Text>
            <View>
                <ActivityIndicator style={style.view} color="#FF0000" size="large" animating="true"/>
            </View>
        </View>
        )
    }
}


const style = StyleSheet.create({
    
    view: {
        margin : 40
    },

    title: {
        fontSize: 22,
        marginBottom: 50
    }
})

