import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";

import { sampleData } from "../../helper/TopNewsSample";

export default class TopNews extends Component {
  state = {
    loading: true,
    error: false,
    articles: []
  };

  componentDidMount() {
    const { results } = sampleData;
    this.setState({ articles: results });
  }

  keyExtractor = ({ short_url }) => short_url;

  renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={{ flex: 1, padding: 5 }}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList
        data={this.state.articles}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}
