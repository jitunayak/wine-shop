import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React from "react";
import { SafeAreaView } from "react-native";
import Container from "./src/components/Container";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  //   setColorScheme("dark");
  //    <Switch value={colorScheme === "dark"} onValueChange={toggleColorScheme} />;

  return (
    <>
      <SafeAreaView className="flex mt-2 bg-slate-100" />
      <Container className="flex-1 items-center justify-center w-full bg-slate-100">
        <HomeScreen />
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </Container>
    </>
  );
}
