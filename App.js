import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';


class Bttn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      value:''
    }

  }

  render() {
    return (
        <Pressable onPress = {()=>{
          this.setState({
            value : 'X'
          })
        }}
        onLongPress = {
          () => {
            this.setState({
              value : 'O'
            })
          }
        }
        style  = {
          {
            borderWidth: 3,
            height: 100,
            width:100,
            alignItems: 'center',
            justifyContent: 'center',
          }
        }
        >
          <Text style={{fontSize: 60}}>{this.state.value}</Text>
        </Pressable>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tap for X</Text>
      <Text>Long Press for O</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View style={{
        flexDirection: 'row',
      }}>
        <Bttn/>
        <Bttn/>
        <Bttn/>
      </View>
      <View style={{
        flexDirection: 'row',
      }}>
        <Bttn/>
        <Bttn/>
        <Bttn/>
      </View>
      <View style={{
        flexDirection: 'row',
      }}>
        <Bttn/>
        <Bttn/>
        <Bttn/>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    borderWidth: 3,
    height: 100,
    width:100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
