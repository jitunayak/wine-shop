import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Container from "../src/components/Container";
import Label from "../src/components/Label";
import { useCartStore } from "../src/hooks/store";

export default function cartScreen() {
  const { items } = useCartStore();
  const router = useRouter();

  return (
    <View className="flex-1 py-10 justify-between">
      {/* <Label className="text-lg font-medium m-2 text-center">In Bag </Label> */}

      {items.length === 0 && (
        <Container className="flex-row items-center justify-center">
          <Label className="text-lg font-medium m-2 text-center ">
            Your Cart is Empty
          </Label>
          <Ionicons name="md-trash-bin-outline" size={24} color="black" />
        </Container>
      )}
      <ScrollView className="">
        {[...new Set(items.map((item) => item.id))].map((id) => (
          <Container
            key={id}
            className="justify-between flex-row m-1 p-4 rounded items-center"
          >
            <Label className="font-medium text-base">
              {items.find((item) => item.id === id)?.name}
            </Label>
            <Container className="flex-row items-center">
              <Label> ₹ {items.find((item) => item.id === id)?.price}</Label>
              <Label>x {items.filter((item) => item.id === id).length}</Label>
            </Container>
          </Container>
        ))}
      </ScrollView>

      {/* <Label className="text-lg font-medium m-2">
        Total:  $ {items.reduce((acc, curr) => acc + curr.price, 0)}{" "}
      </Label> */}

      <TouchableOpacity
        onPress={() => {
          router.push("../");
          items.length === 0 ? router.push("/") : router.push("/delivery");
        }}
      >
        <View className="bg-black m-2 h-14 w-fit justify-center items-center  rounded">
          <Label
            className="text-white font-medium text-md
          "
          >
            {items.length === 0
              ? "Go Back"
              : `PAY ₹ ${items.reduce((acc, curr) => acc + curr.price, 0)}`}
          </Label>
        </View>
      </TouchableOpacity>
    </View>
  );
}
