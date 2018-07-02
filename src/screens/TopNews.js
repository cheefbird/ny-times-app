import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";

import { sampleData } from "../../helper/TopNewsSample";
import StandardArticle from "../components/StandardArticle";

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
      <View style={styles.listItem}>
        <StandardArticle />
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList
        data={this.state.articles}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        style={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 60,
    borderTopColor: "#f2f2f2",
    borderTopWidth: 1
  },
  listItem: {
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1,
    flex: 1,
    padding: 8
  }
});
