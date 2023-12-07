import React from "react";
import { Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { checkCrypto } from "../store/CryptoSlice";
import { View } from "react-native";
import { Text } from "react-native";

function Coins() {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={styles.container}>
        {crypto.map((item) => (
          <View style={styles.containerItem} key={item.id}>
            <Image source={item.src} style={styles.imageItem} />
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCur}>{item.price}$</Text>
            </View>
            <TouchableOpacity
              onPress={() => dispatch(checkCrypto(item.id))}
              style={{
                ...styles.addToCartButton,
                backgroundColor: item.checked ? "transparent" : "orange",
              }}
            >
              <Text style={styles.btn}>Buy</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffff",
  },
  btn: {
    fontSize: 18,
    color: "white",
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  imageItem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  addToCartButton: {
    position: "absolute",
    right: 20,
    backgroundColor: "#3498db",
    padding: 15,
    opacity: 0.7,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemCurrency: {
    fontSize: 14,
  },
});
export default Coins;
