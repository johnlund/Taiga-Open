import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    text: {
        marginBottom: 50,
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        padding: 8,
         borderColor: '#ddd',
        // borderBottomWidth: 3,
        // borderBottomColor: 'black',
        marginBottom: 5,
        borderWidth: 3,
        width: 200,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }, 
    button: {
        marginTop: 30,
        color: 'black'
    }
})