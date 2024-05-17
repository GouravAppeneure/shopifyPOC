import React from "react";
import Home from "../screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCart from "../screens/myCart/MyCart";

const AppStack = createNativeStackNavigator();

const options = {
  headerShown: false,
  cardStyle: { backgroundColor: "transparent" },
};

export default () => {
  return (
    <AppStack.Navigator >
      <AppStack.Screen name="Home" component={Home} options={options} />
      <AppStack.Screen name="MyCart" options={{title: 'Cart'}} component={MyCart} />
    </AppStack.Navigator>
  );
};
