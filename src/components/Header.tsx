import { SimpleLineIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { useCartStore } from "../hooks/store";
import Container from "./Container";
import Label from "./Label";
import SearcBar from "./SearcBar";

export default function Header() {
  const { items } = useCartStore();

  return (
    <>
      <Container className="flex-row items-center justify-between mx-4 bg-slate-100">
        <Label className="text-2xl font-bold text-center text-black">
          Royal Glass
        </Label>
        <Container className="flex-row items-center justify-center px-4 bg-slate-100">
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
