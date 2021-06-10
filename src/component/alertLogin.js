import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
export const alertLogin = (content) => {
  return (
    <View style={styles.content}>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: 150,
    height: 150,
  },
});
