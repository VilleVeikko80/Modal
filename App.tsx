import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  const [modalVisible, setModalvisible] = useState(false)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalvisible(!modalVisible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>This is modal...</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalvisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalvisible(true)}>
          <Text style={styles.textStyle}>Show modal message</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
});

