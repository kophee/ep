import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
} from "react-native";

export default class App extends Component {
  
  // called when the instance is created <App />
  constructor() {
    super();
    this.state = {
      animOpacity: new Animated.Value(0),
      slideDownValue: new Animated.Value(0),
      pressed: false,
    };
    this.animation = this.animation.bind(this);
  }
  
  animation = () => {
    if (this.state.pressed == false) {
      Animated.parallel([
        Animated.timing(this.state.animOpacity, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.spring(this.state.slideDownValue, {
          toValue: 1,
          useNativeDriver: true,
        })
      ])
     .start();
     
    } else {
      Animated.parallel([
        Animated.timing(this.state.animOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(this.state.slideDownValue, {
          toValue: 0,
          useNativeDriver: true,
        })
      ])
      // run after animation finishes
      .start();
    }

    // Toggles the press state
    this.setState({
      pressed: !this.state.pressed,
    });
  }

  render() {
   let { slideDownValue } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View style={{
          transform: [{
          translateY: slideDownValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 250],
          })}],
          height: 200,
          width: 300,
          backgroundColor: "skyblue",
          justifyContent: "center",
          opacity: this.state.animOpacity}}>
        </Animated.View>
        <View style={styles.containerSize}>
          <Text onPress={this.animation}>Button</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },

  containerSize: {
    borderRadius: 20,
    height: 50,
    width: 100,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'cyan',
  }
});