import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React, { useEffect } from "react";
import { Linking, SafeAreaView } from "react-native";
import Login from "./app/login";
import Container from "./src/components/Container";
import { useUserStore } from "./src/hooks/store";
import HomeScreen from "./src/screens/HomeScreen";
import { env } from "./src/utils/config";

export default function App() {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  const { userId, setUserId, setUserName } = useUserStore();
  //   setColorScheme("dark");

  const handleDeepLink = async (url: any) => {
    console.log({ url });
    const waId = url.url.split("=")[1];
    console.log(waId);
    const userInfo = await getUserInfo(waId);
    console.log({ userInfo });
    alert(`welcome ${userInfo.data.userName}` ?? "no user");
    setUserId(waId);
    setUserName(userInfo.data.userName);
  };

  const getUserInfo = async (waId: string) => {
    const response = await fetch("https://kochgs.authlink.me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        clientId: env.ENV_OTP_LESS_ID,
        clientSecret: env.ENV_OTP_LESS_SECRET_KEY,
      },
      body: JSON.stringify({ waId }),
    });
    console.log({ response });
    return response.json();
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
      <SafeAreaView className="flex-1  dark:bg-neutral-900 ">
        <Container className="flex-1 items-center mt-10 justify-center w-full">
          {userId ? <HomeScreen /> : <Login />}
        </Container>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </SafeAreaView>
    </>
  );
}
