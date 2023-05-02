import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export const unstable_settings = {
  initialRouteName: "home",
};

export default function Layout() {
  return (
    <>
      <SafeAreaView className="flex mt-2 bg-slate-100" />
      <Stack initialRouteName="home" screenOptions={{ headerShown: false }} />
    </>
  );
}
