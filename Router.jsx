import React from "react";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { createTable, fetchData, insertData } from "./database/database";
import { setCryptos } from "./store/CryptoSlice";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./pages/HomeScreen";
import store from "./store/store";
import MarketScreen from "./pages/MarketScreen";
const initialState = {
  crypto: [
    {
      src: require("./assets/img/1.jpg"),
      name: "USDT",
      checked: true,
      amount: 0,
      price: 14123,
    },
    {
      src: require("./assets/img/2.jpg"),
      name: "Bitcoin",
      checked: false,
      amount: 0,
      price: 14123,
    },
    {
      src: require("./assets/img/3.png"),
      name: "BNB",
      checked: false,
      amount: 0,
      price: 14123,
    },
    {
      src: require("./assets/img/4.png"),
      name: "Ethereum",
      checked: false,
      amount: 0,
      price: 14123,
    },
    {
      src: require("./assets/img/5.png"),
      name: "Solana",
      checked: false,
      amount: 0,
      price: 14123,
    },
  ],
};

function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    createTable("crypto");
    for (const item of initialState.crypto) {
      insertData([item.amount, item.src, item.name, item.checked, item.price]);
    }
    fetchData()
      .then((data) => {
        console.log(data);
        dispatch(setCryptos(data));
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleStyle: {
              color: "orange",
              fontSize: 20,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
            gestureEnabled: true,
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        >
          <Stack.Screen name="Market" component={MarketScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
