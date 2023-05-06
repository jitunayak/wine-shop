import { SimpleLineIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { View } from "moti";
import React from "react";
import { useCartStore, useUserStore } from "../hooks/store";
import Container from "./Container";
import Label from "./Label";
import SearcBar from "./SearcBar";

export default function Header() {
  const { items } = useCartStore();
  const router = useRouter();
  const { setUserId, userName } = useUserStore();

  return (
    <>
      <Container className="flex-row justify-between mx-4 items-center py-2">
        <View className="rounded-full w-10 h-10 justify-center items-center  border border-neutral-400">
          <Link href="profile">
            <SimpleLineIcons name="user" size={20} color="black" />
          </Link>
        </View>
        <Label
          onPress={() => {
            setUserId(null);
          }}
          className="text-neutral-700  text-3xl font-extrabold"
        >
          Royal Glass
        </Label>

        {/* <Label>{userName}</Label> */}
        <Container className="flex-row items-center justify-center px-4 ">
          {items.length > 0 && (
            <Container className="bg-orange-500 rounded-full w-6 h-6 items-center justify-center ">
              <Label className="text-sm text-white font-bold">
                {items.length}
              </Label>
            </Container>
          )}
          <Link href="/cart">
            <SimpleLineIcons name="bag" size={24} color="black" />
          </Link>
        </Container>
      </Container>
      <SearcBar />
    </>
  );
}
