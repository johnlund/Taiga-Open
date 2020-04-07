import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function LoginScreen({navigation}) {

    const pressHandler = () => {
        navigation.navigate('ProjectsScreen')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>User Login</Text>
            <View >
                <View>
                    <TextInput 
                        style = {globalStyles.input}
                        placeholder='Username'
                    />
                    <TextInput 
                        style = {globalStyles.input}
                        placeholder='Password'
                    />
                    <View style={globalStyles.button}>
                        <Button
                            title='Submit'
                            color='rgb(37, 162, 140)'
                            onPress={pressHandler}
                        />
                    </View>
                </View>
            </View> 
        </View> 
    )
}

// const styles = StyleSheet.create({
//     text: {
//         marginTop: 50,
//         fontSize: 35,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     input: {
//         padding: 8,
//         borderBottomWidth: 3,
//         borderBottomColor: 'black',
//         marginBottom: 10,
//         color: 'red'
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//     button: {
//         borderRadius: 25, 
//     }
// })