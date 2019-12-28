import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Section = () => {
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          Section 1
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    color: 'red',
  },
  sectionText: {
    fontSize: 20,
    alignItems: 'center'
  },
});
export default Section;
