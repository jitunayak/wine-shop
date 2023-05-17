import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native";

export const unstable_settings = {
  initialRouteName: "/",
};

export default function Layout() {
  const { colorScheme } = useColorScheme();
  return (
    <>
      <SafeAreaView className="flex -mt-16" />
      <Stack
        initialRouteName="/"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#323232" : "green",
          },

          //   headerTitle: "Royal Glass",
          headerTitleStyle: {
            // fontWeight: "bold",
            // fontSize: 32,
            color: colorScheme === "dark" ? "#a6a6a6" : "white",
          },
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
