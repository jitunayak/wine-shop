import { SimpleLineIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { useCartStore, useUserStore } from "../hooks/store";
import Container from "./Container";
import Label from "./Label";
import SearcBar from "./SearcBar";

export default function Header() {
  const { items } = useCartStore();
  const { userId, setUserId, userName } = useUserStore();

  return (
    <>
      <Container className="flex-row items-center justify-between mx-4">
        <Label
          onPress={() => {
            setUserId(null);
          }}
          className="text-xl my-4 font-medium text-center text-neutral-700"
        >
          Royal Glass ({userName})
        </Label>
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
