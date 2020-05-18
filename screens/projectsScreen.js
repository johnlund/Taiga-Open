import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { SearchBar } from 'react-native-elements';

export default function ProjectsScreen() {
    return (
        <View>
            <SearchBar />
            <Text style={styles.text}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 50,
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
});