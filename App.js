import React from "react";
import { StyleSheet, View } from "react-native";

import TopNews from "./src/screens/TopNews";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopNews />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
