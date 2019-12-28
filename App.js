/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Button, FlatList, ScrollView} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import CustomTextInput from './src/components/CustomTextInput/CustomTextInput';
import place from './src/components/static/place';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {placeName: '', places:place, deleteIndex: null};
  }
  placeNameHandler = (val) => {
    this.setState({
      placeName: val
    });
  }
  submitPlaceHandler = () => {

    if(this.state.placeName.trim() === ""){
      return
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    },() => {
      this.setState({
        placeName: ''
      })
    })
  }
  setActiveHandler = (activeIndex) => {
    console.log('active handler',activeIndex);
    this.setState({
      activeListIndex: activeIndex
    })
  }
  deleteHandler = (deleteIndex) => {
    console.log('delete handler');
    this.setState(prevState => {
      return {
        places: prevState.places.filter((places,index) => {
          return deleteIndex !== index
        })
      }
    })
  }
  render() {
    const placeName = this.state.places.map((place, index) => (
      <ListItem key={index} keys={index} placeName={place} setActive={() => {
        this.setActiveHandler(index)
      }} deleteList={() => {
        this.deleteHandler(index)
      }}></ListItem>
    ))
    return (
      <>
        <View style={styles.container}> 
          <View style={styles.inputContainer}>
            <CustomTextInput placeholder={'An awesome place to search'}placeName={this.state.placeName} placeNameHandler={this.placeNameHandler}/>
            <Button title="Add" style={styles.placeButton} onPress={this.submitPlaceHandler} />
          </View>
          <ScrollView style={styles.listScroll}>
            <View style={styles.listContainer}>
              {placeName}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:20
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeButton: {
    width: "30%"
  },
  listScroll: {
    width: '100%'
  },
  listContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  placeListText:{
    marginLeft: 10,
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default App;
