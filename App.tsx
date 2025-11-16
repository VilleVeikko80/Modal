import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from './global'
import * as ExpoScreenOrientation from 'expo-screen-orientation';


export default function App() {

  type OrientationType = 'portrait' | 'landscape'

  const [orientation, setOrientation] = useState<OrientationType>('portrait');
  const [modalVisible, setModalVisible] = useState(false);

  // 1) alkutila
  useEffect(() => {
    (async () => {
      const cur = await ExpoScreenOrientation.getOrientationAsync();
      setOrientation(
        cur === ExpoScreenOrientation.Orientation.PORTRAIT_UP ||
          cur === ExpoScreenOrientation.Orientation.PORTRAIT_DOWN
          ? 'portrait'
          : 'landscape'
      );
    })();
  }, []);


  // 2) Kuuntelija
  useEffect(() => {
    const sub = ExpoScreenOrientation.addOrientationChangeListener((e) => {
      const o = e.orientationInfo.orientation;
      if (
        o === ExpoScreenOrientation.Orientation.PORTRAIT_UP ||
        o === ExpoScreenOrientation.Orientation.PORTRAIT_DOWN
      ) setOrientation('portrait');
      else if (
        o === ExpoScreenOrientation.Orientation.LANDSCAPE_LEFT ||
        o === ExpoScreenOrientation.Orientation.LANDSCAPE_RIGHT
      ) setOrientation('landscape');
    });
    return () => ExpoScreenOrientation.removeOrientationChangeListener(sub);
  }, []);

  // 3) Testinapit
  const lockPortrait = async () =>
    ExpoScreenOrientation.lockAsync(ExpoScreenOrientation.OrientationLock.PORTRAIT);
  const lockLandscape = async () =>
    ExpoScreenOrientation.lockAsync(ExpoScreenOrientation.OrientationLock.LANDSCAPE);
  const unlockAll = async () => ExpoScreenOrientation.unlockAsync();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />

        <Text style={{ marginBottom: 12 }}>
          Current orientation: <Text style={{ fontWeight: 'bold' }}>{orientation}</Text>
        </Text>

        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
          <Pressable
            onPress={lockPortrait}
            style={({ pressed }) => [
              globalStyles.button,
              globalStyles.buttonOpen,
              pressed && { opacity: 0.7, transform: [{ scale: 0.97 }] }
            ]}
          >
            <Text style={globalStyles.textStyle}>Lock portrait</Text>
          </Pressable>

          <Pressable
            onPress={lockLandscape}
            style={({ pressed }) => [
              globalStyles.button,
              globalStyles.buttonOpen,
              pressed && { opacity: 0.7, transform: [{ scale: 0.97 }] }
            ]}
          >
            <Text style={globalStyles.textStyle}>Lock landscape</Text>
          </Pressable>

          <Pressable
            onPress={unlockAll}
            style={({ pressed }) => [
              globalStyles.button,
              globalStyles.buttonClose,
              pressed && { opacity: 0.7, transform: [{ scale: 0.97 }] }
            ]}
          >
            <Text style={globalStyles.textStyle}>Unlock</Text>
          </Pressable>
        </View>

        <Pressable
          style={[globalStyles.button, globalStyles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={globalStyles.textStyle}>Show modal message</Text>
        </Pressable>

        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={globalStyles.centeredView}>
            <View style={globalStyles.modalView}>
              <Text style={globalStyles.modalText}>
                This is modal... ({orientation})
              </Text>
              <Pressable
                style={[globalStyles.button, globalStyles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={globalStyles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


