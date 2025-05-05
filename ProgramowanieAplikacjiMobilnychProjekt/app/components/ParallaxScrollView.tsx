import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

interface ParallaxScrollViewProps {
  headerBackgroundColor: { light: string; dark: string };
  headerImage: React.ReactNode;
  children: React.ReactNode;
}

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  headerBackgroundColor,
  headerImage,
  children,
}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      stickyHeaderIndices={[0]}
      style={[styles.container, { backgroundColor: headerBackgroundColor.light }]}
    >
      <View style={styles.header}>
        {headerImage}
      </View>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default ParallaxScrollView;