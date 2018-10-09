import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    WebView
} from "react-native";
import { Header, SearchBar } from 'react-native-elements';
import HTML from 'react-native-render-html';
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';


class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
      isLoaded: false,
      dataSource: '',
      dataSourceHtml: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const SEARCHLINK = 'https://duckduckgo.com/?t=h_&iar=images&iax=images&ia=images&q='
    const queryLink = SEARCHLINK + this.state.textValue;
    return fetch(
      queryLink, 
      {
        method: 'GET',
        headers: {
          'Content-Type': 'text/xml',
        },
        mode: 'cors',
        credentials: 'include'
      })
      .then((response) => {
        this.setState({
          isLoaded: true,
          dataSource: response,
          dataSourceHtml: response._bodyInit
        }, function() {
          console.log('RESPONSE:');
          console.log(response);
          console.log('RESPONSE._bodyText:');
          console.log(response._bodyText);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeText(value) {
    this.setState({
      textValue: value
    });
  }

  render() {
    if(this.state.isLoaded) {
      return(
        <WebView
          source={{uri: 'https://duckduckgo.com/?t=h_&iar=images&iax=images&ia=images&q=dogs'}}
          style={{flex: 1}} 
        />
       
      )
    }
    return (
      <View style={styles.bg}>
        <SearchBar
          noIcon
          lightTheme
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
          value={this.state.textValue}
          placeholder='Search...' 
        />
      </View>
    );
  }
}
export default Gallery;

const styles = StyleSheet.create({
    
});