import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const HelloWave = () => {
  const waveAnimation = new Animated.Value(0);

  const startWaveAnimation = () => {
    waveAnimation.setValue(0);
    Animated.loop(
      Animated.timing(waveAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  };

  React.useEffect(() => {
    startWaveAnimation();
  }, []);

  const waveStyle = {
    transform: [
      {
        translateY: waveAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 10],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wave, waveStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 50,
  },
  wave: {
    width: '100%',
    height: '100%',
    backgroundColor: '#A1CEDC',
    borderRadius: 50,
  },
});

export default HelloWave;