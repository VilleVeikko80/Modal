import { StyleSheet } from 'react-native';
import React from 'react';


const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // tumma läpinäkyvä tausta
    },

    modalView: {
        width: '80%',               // Leveys suhteessa näyttöön
        maxWidth: 400,              // Estää liian suuren modalin
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 45,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,         // Miten paljon varjo siirtyy vaakasuunnassa --> ios
            height: 5,       // Miten paljon varjo siirtyy pystysuunnassa --> ios 
        },
        shadowOpacity: 0.45,
        shadowRadius: 8,
        elevation: 12,       // Androidin oma varjon ja syvyyden säätöominaisuus
    },
    button: {
        borderRadius: 5,
        padding: 12,
        elevation: 5,
        marginTop: 30,
    },
    buttonOpen: {
        backgroundColor: '#0936ccff',
    },
    buttonClose: {
        backgroundColor: '#f80404ff',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 30,
        textAlign: 'center',
    },
})


export default globalStyles;