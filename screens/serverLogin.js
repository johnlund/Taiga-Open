import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ServerLogin({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={globalStyles.container}>
          <Text style={globalStyles.text}>Server URL</Text>
          <View>
              <View style={globalStyles.input}>
                <TextInput         
                    placeholder='Server URL'
                />
              </View>
              <Button 
              title='Submit' 
              onPress={pressHandler} 
              color='rgb(37, 162, 140)'
              />
          </View>
        </View> 
    )
}

// const styles = StyleSheet.create({
//     text: {
//         marginBottom: 50,
//         fontSize: 35,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     input: {
//         padding: 8,
//         borderBottomWidth: 3,
//         borderBottomColor: 'black',
//         marginBottom: 10,
//         color: 'red',
//         width: 120
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }
// })