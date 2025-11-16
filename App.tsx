import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from './global'


export default function App() {

  const [modalVisible, setModalvisible] = useState(false)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalvisible(!modalVisible)
          }}>
          <View style={globalStyles.centeredView}>
            <View style={globalStyles.modalView}>
              <Text style={globalStyles.modalText}>This is modal...</Text>
              <Pressable
                style={[globalStyles.button, globalStyles.buttonClose]}
                onPress={() => setModalvisible(!modalVisible)}>
                <Text style={globalStyles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[globalStyles.button, globalStyles.buttonOpen]}
          onPress={() => setModalvisible(true)}>
          <Text style={globalStyles.textStyle}>Show modal message</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


