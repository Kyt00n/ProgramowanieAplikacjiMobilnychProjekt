import React from 'react';
import { View, StyleSheet } from 'react-native';

const ThemedView = ({ children, style, theme }) => {
  const themedStyle = theme === 'dark' ? styles.dark : styles.light;

  return (
    <View style={[themedStyle, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  light: {
    backgroundColor: '#FFFFFF',
  },
  dark: {
    backgroundColor: '#000000',
  },
});

export default ThemedView;