import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from "react-native";

class ComponentHome extends Component {
  static navigationOptions = {
      header: null
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../img/bg-main.jpg')} 
          style={{width: '100%', height: '100%'}}
        >
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Gallery')}
            >
              <Text style={styles.buttonText}>Go to the SEARCH</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default ComponentHome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: '100%',
      opacity: 0.8,
      borderColor: '#FFFFFF',
      borderStyle: 'solid',
      borderWidth: 3,
      paddingTop: 20,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 20,
      color: '#FFFFFF',
    }
});