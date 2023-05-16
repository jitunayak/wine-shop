import { SimpleLineIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { MotiText, MotiView } from "moti";
import { useColorScheme } from "nativewind";
import React from "react";
import { Image } from "react-native";
import { useCartStore, useUserStore } from "../hooks/store";
import Container from "./Container";
import Label from "./Label";
import SearcBar from "./SearcBar";

export default function Header() {
  const { items } = useCartStore();
  const router = useRouter();
  const { setUserId, userName } = useUserStore();
  const { colorScheme } = useColorScheme();

  return (
    <MotiView
      from={{ translateY: -50, opacity: 0.2 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <MotiView className="flex-row justify-between mx-4 items-center py-2">
        {userName ? (
          <Link href="profile">
            <Image
              source={{
                uri: "https://jitunayak.vercel.app/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F35754866%3Fv%3D4&w=256&q=75",
              }}
              className="rounded-full w-10 h-10"
            />
          </Link>
        ) : (
          <MotiView className="rounded-full w-10 h-10 justify-center items-center  border border-neutral-400">
            <Link href="profile">
              <SimpleLineIcons
                name="user"
                size={20}
                color={colorScheme === "dark" ? "white" : "pink"}
              />
            </Link>
          </MotiView>
        )}

        <MotiText
          onPress={() => {
            setUserId(null);
          }}
          className="text-neutral-700  text-3xl font-extrabold dark:text-neutral-200"
        >
          Royal Glass
        </MotiText>

        {/* <Label>{userName}</Label> */}
        <Container className="flex-row items-center justify-center px-4 dark:bg-neutral-900">
          {items.length > 0 && (
            <Container className="bg-orange-500 rounded-full w-6 h-6 items-center justify-center ">
              <Label className="text-sm text-white font-bold">
                {items.length}
              </Label>
            </Container>
          )}
          <Link href="/cart">
            <SimpleLineIcons
              name="bag"
              size={24}
              color={colorScheme === "dark" ? "gray" : "black"}
            />
          </Link>
        </Container>
      </MotiView>
      <SearcBar />
    </MotiView>
  );
}
