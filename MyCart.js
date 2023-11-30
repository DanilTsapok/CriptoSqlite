import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductsToMyCart,
  deleteItem,
  removeMyCartItem,
} from "./redux/MyCartSlice";

const MyCart = () => {
  const myCartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
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
            Cart
          </Text>
        </View>

        <ScrollView>
          <View style={{ paddingHorizontal: 10 }}>
            {myCartItems.map((item, index) => {
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
                      {item.name}
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
                        onPress={() => {
                          if (item.qty > 1) {
                            dispatch(removeMyCartItem(item));
                          } else {
                            dispatch(deleteItem(item.id));
                          }
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
                        onPress={() => {
                          dispatch(addProductsToMyCart(item));
                        }}
                      >
                        <Text style={{ color: "white" }}>+</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MyCart;
