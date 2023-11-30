import { FlatList, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";

import { StyleSheet, Text, View } from "react-native";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
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
