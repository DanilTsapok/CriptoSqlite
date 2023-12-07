import { StyleSheet } from "react-native";

import { Provider } from "react-redux";
import store from "./store/store";
import Router from "./Router";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
