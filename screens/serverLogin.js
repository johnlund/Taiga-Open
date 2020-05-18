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
              <View style={globalStyles.button}>
                <Button 
                title='Submit' 
                onPress={pressHandler} 
                color='black'
                />
              </View>
          </View>
        </View> 
    )
}
