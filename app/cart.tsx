import React from "react";
import { Button, View } from "react-native";
import Container from "../src/components/Container";
import Label from "../src/components/Label";
import { useCartStore } from "../src/hooks/store";

export default function cartScreen() {
  const { items } = useCartStore();
  return (
    <View>
      <Label className="text-lg font-medium m-2 text-center">In Bag </Label>
      {[...new Set(items.map((item) => item.id))].map((id) => (
        <Container className="justify-between flex-row m-2 p-4 rounded">
          <Label>{items.find((item) => item.id === id)?.name}</Label>
          <Label>$ {items.find((item) => item.id === id)?.price}</Label>
          <Label>x {items.filter((item) => item.id === id).length}</Label>
        </Container>
      ))}

      <Label className="text-lg font-medium m-2">
        Total: $ {items.reduce((acc, curr) => acc + curr.price, 0)}{" "}
      </Label>
      <Button title="make payment" />
    </View>
  );
}
