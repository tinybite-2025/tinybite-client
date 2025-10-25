import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text>온보딩</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10121F',
  },
});