import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import BillList from './src/BillList';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.text}> My Bills </Text>
        <BillList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'System',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    backgroundColor: '#e6e7e9',
  },
});
