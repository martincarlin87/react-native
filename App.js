import React, { Component } from 'react';
import { 
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.select = this.select.bind(this);
  }

  select(name) {

    const total = this.state.totalClicks;

    this.setState(
      { totalClicks: total + 1 }
    );

    Alert.alert('Pressed! ' + name + (total + 1));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header]}></View>
        <ScrollView>
          <View style={[styles.content]}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            
            <Button
              style={[styles.box]}
              onPress={() => this.select('test')}
              title="Learn More"
              accessibilityLabel="Learn more about this purple button"
            />

            <Button
              style={[styles.box]}
              onPress={() => this.select('test')}
              title="Learn More"
              accessibilityLabel="Learn more about this purple button"
            />

            <Button
              style={[styles.box]}
              onPress={() => this.select('test')}
              title="Learn More"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </ScrollView>
        <View style={[styles.footer]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#03A9F4',
    zIndex: 10
  },
  content: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 70
  },
  footer: {
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#8BC34A'
  },
  button: {
    backgroundColor: '#333',
    marginBottom: 10
  }
});
