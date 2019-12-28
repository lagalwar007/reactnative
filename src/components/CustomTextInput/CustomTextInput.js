import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const CustomTextInput = (props) => (
    <View>
        <TextInput
        style={styles.placeInput}
        placeholder={props.placeholder}
        value={props.placeName}
        onChangeText={props.placeNameHandler} />
    </View>
);

const styles = StyleSheet.create({
    placeInput: {
        width: "70%"
    }
})

export default CustomTextInput;