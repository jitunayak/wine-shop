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
          headerTitleStyle: {},
          headerStyle: {},
        }}
      >
        <Stack.Screen
          name="cart"
          options={{ headerShown: true, headerTitle: "Cart" }}
        />
        <Stack.Screen
          name="delivery"
          options={{
            headerShown: true,
            headerTitle: "Delivery",
            headerShadowVisible: true,
            headerBackTitleVisible: false,
          }}
        />
      </Stack>
    </>
  );
}
