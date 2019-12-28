import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const ListItem = (props) => (
    <TouchableNativeFeedback  onPress={props.deleteList} style={styles.TouchableView}>
        <View style={styles.ListItemView}>
            <Text style={styles.ListItem}>{ props.placeName }</Text>
        </View>
    </TouchableNativeFeedback>
);


const styles = StyleSheet.create({
    TouchableView:{
        display:'flex',
        width:'100%'
    },
    ListItemView : {
        width: '100%',
        padding: 15,
        backgroundColor: '#eee',
        marginBottom: 10
    },
    ListItem: {
        color: '#cc0000',
        fontWeight: 'bold'
    },
    active: {
        width: '100%',
        backgroundColor: 'blue',
        color: 'white'
    },
    inactive: {
        width: '100%',
        backgroundColor: '#eee',
        color: '#cc0000'
    }
});

export default ListItem;