import React from "react";
import { ScrollView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  buyCrypto,
  decrementCrypto,
  incrementCrypto,
  unCheckCrypto,
} from "../store/CryptoSlice";
import { Image } from "react-native";

const Home = ({ navigation }) => {
  const crypto = useSelector((state) =>
    state.crypto.filter((element) => element.checked)
  );
  const buyPrice = crypto.reduce(
    (total, crypto) => total + crypto.amount * crypto.price,
    0
  );
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Coins")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Buy coins</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <ScrollView>
            {crypto.map((item) => (
              <View style={styles.itemContainer} key={item.id}>
                <Image source={item.src} style={styles.itemImage} />
                <View>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemCur}>{item.price}$</Text>
                </View>
                <View style={styles.cartButtons}>
                  <TouchableOpacity
                    style={{
                      marginRight: 20,
                      backgroundColor: "orange",
                      borderRadius: 10,
                      height: 25,
                      width: 25,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => dispatch(decrementCrypto(item.id))}
                  >
                    <Text style={{ color: "white" }}>-</Text>
                  </TouchableOpacity>
                  <Text>{item.amount}</Text>

                  <TouchableOpacity
                    style={{
                      marginLeft: 20,
                      backgroundColor: "orange",
                      borderRadius: 10,
                      height: 25,
                      width: 25,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => dispatch(incrementCrypto(item.id))}
                  >
                    <Text style={{ color: "white" }}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => dispatch(unCheckCrypto(item.id))}
                    style={{
                      backgroundColor: "red",
                      padding: 15,
                      opacity: 0.7,
                      borderRadius: 5,
                      marginLeft: 20,
                    }}
                  >
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          {crypto.length ? (
            <View style={styles.header}>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: "white" }}
                onPress={() => dispatch(buyCrypto())}
              >
                <Text style={{ color: "green", fontSize: 24 }}>
                  {buyPrice}$
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footer: {
    backgroundColor: "black",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "orange",
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  itemContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cartButtons: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 50,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemCurrency: {
    fontSize: 14,
  },
});
export default Home;
