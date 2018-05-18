import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

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
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        
        <Button
          onPress={() => this.select('test')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

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
});
