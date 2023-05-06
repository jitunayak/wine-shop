import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export const unstable_settings = {
  initialRouteName: "/",
};

export default function Layout() {
  return (
    <>
      <SafeAreaView className="flex mt-2 " />
      <Stack
        initialRouteName="/"
        screenOptions={{
          headerShown: false,
          //   headerTitle: "Royal Glass",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //     fontSize: 32,
          //     color: "#373333",
          //   },
          //   headerStyle: {},
          //   headerSearchBarOptions: {
          //     placeholder: "Search",
          //   },
        }}
      >
        <Stack.Screen
          name="cart"
          options={{
            presentation: "formSheet",
            headerShown: true,
            headerTitle: "Cart",
          }}
        />
        <Stack.Screen
          name="delivery"
          options={{
            headerShown: true,
            headerTitle: "Delivery",
          }}
        />
        <Stack.Screen
          name="profile"
          options={{ presentation: "modal", headerShown: true }}
        />
      </Stack>
    </>
  );
}
