import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import Container from "./Container";
import Label from "./Label";
import SearcBar from "./SearcBar";

export default function Header() {
  return (
    <>
      <Container className="flex-row items-center justify-between mx-4 bg-slate-100">
        <Label className="text-2xl font-bold text-center text-black">
          Royal Glass
        </Label>
        <Container className="flex-row items-center justify-center px-4 bg-slate-100">
          <Container className="bg-orange-500 rounded-full w-6 h-6 items-center justify-center ">
            <Label className="text-sm text-white font-bold">12</Label>
          </Container>
          <SimpleLineIcons name="bag" size={24} color="black" />
        </Container>
      </Container>
      <SearcBar />
    </>
  );
}
