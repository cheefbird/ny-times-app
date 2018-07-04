import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./src/reducers";
import TopNews from "./src/screens/TopNews";

export default class App extends React.Component {
  render() {
    const store = createStore(
      reducers,
      composeWithDevTools(applyMiddleware(ReduxThunk))
    );

    return (
      <Provider store={store}>
        <TopNews />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
