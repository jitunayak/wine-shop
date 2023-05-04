import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React, { useEffect } from "react";
import { Alert, Linking, SafeAreaView } from "react-native";
import Login from "./app/login";
import Container from "./src/components/Container";
import { useUserStore } from "./src/hooks/store";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  const { userId, setUserId } = useUserStore();
  //   setColorScheme("dark");
  //    <Switch value={colorScheme === "dark"} onValueChange={toggleColorScheme} />;

  const handleDeepLink = async (url: any) => {
    console.log({ url });
    // const searchParams = new URLSearchParams(new URL(url.url).search);
    // const waId = searchParams.get("waId");
    const waId = url.url.split("=")[1];
    // Send the waId to your server and pass the waId in getUserDetail API to retrieve the user detail.
    // Handle the signup/signin process here
    console.log(waId);
    Alert.alert(waId ?? "no user");
    setUserId(waId);
  };

  useEffect(() => {
    const linkingEvent = Linking.addEventListener("url", handleDeepLink);
    console.log({ linkingEvent });
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });
    return () => {
      linkingEvent.remove();
    };
  }, [handleDeepLink]);

  return (
    <>
      <SafeAreaView className="flex" />
      <Container className="flex-1 items-center justify-center w-full">
        {userId ? <HomeScreen /> : <Login />}
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </Container>
    </>
  );
}
