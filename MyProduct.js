import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addProductsToMyCart } from "./redux/MyCartSlice";

import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import MyCart from "./MyCart";

const MyProduct = () => {
  const myProducts = useSelector((state) => state.product);
  const myCartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const getCoins = () => {
    let totalSum = 0;

    myCartItems.map((item) => {
      totalSum += item.qty * item.price;
    });
    return +totalSum;
  };

  return (
    <View style={{ backgroundColor: "#f4f4f4", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            height: 60,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            marginTop: 50,
            borderColor: "black",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "orange",
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            Crypto
          </Text>
        </View>

        <ScrollView>
          <View style={{ paddingHorizontal: 10 }}>
            {myProducts.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: "100%",
                    height: 120,
                    backgroundColor: "#fff",
                    alignSelf: "center",
                    marginTop: 10,
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View style={{ padding: 20 }}>
                    <Image
                      source={item.image}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 20,
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{ fontSize: 20, fontWeight: 700, color: "#000" }}
                    >
                      {item.name.substring(0.2)}
                    </Text>
                    <Text style={{ fontSize: 24, color: "green" }}>
                      {item.price}₴
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.qty == 0 ? null : (
                      <TouchableOpacity
                        style={{
                          backgroundColor: "orange",
                          borderRadius: 10,
                          height: 25,
                          width: 25,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "white" }}>-</Text>
                      </TouchableOpacity>
                    )}

                    {item.qty == 0 ? null : (
                      <Text
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 24,
                          marginHorizontal: 15,
                        }}
                      >
                        {item.qty}
                      </Text>
                    )}
                    {item.qty == 0 ? null : (
                      <TouchableOpacity
                        style={{
                          backgroundColor: "orange",
                          borderRadius: 10,
                          height: 25,
                          width: 25,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "white" }}>+</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      style={{
                        backgroundColor: "orange",
                        borderRadius: 10,
                        height: 50,
                        width: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 20,
                      }}
                      onPress={() => {
                        dispatch(addProductsToMyCart(item));
                      }}
                    >
                      <Text style={{ padding: 10, color: "white" }}>Buy</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      {myCartItems.length > 0 ? (
        <View
          style={{
            width: "100%",
            height: 60,
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 26,

                color: "green",
              }}
            >
              {getCoins()}₴
            </Text>
          </View>

          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "70%",
                height: "75%",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "orange",
              }}
              onPress={() => setVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity onPress={() => setVisible(false)}>
          <AntDesign
            name="close"
            size={24}
            style={{ position: "absolute", right: 10, top: 10 }}
          ></AntDesign>
        </TouchableOpacity>
        <MyCart />
      </Modal>
    </View>
  );
};
export default MyProduct;
