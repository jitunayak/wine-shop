import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import { useCartStore } from "../hooks/store";
import { IAlcohol } from "../types/ICommon";
import { BuyButton } from "./BuyButton";
import Container from "./Container";
import Label from "./Label";

export default function Card({ data }: { data: IAlcohol }) {
  const { addItem, removeItem, items } = useCartStore();

  function addItemToCart(item: IAlcohol) {
    addItem(item);
    return item;
  }

  function removeItemFromCart(item: IAlcohol) {
    removeItem(item);
    return item;
  }

  return (
    <Container className="p-4  my-4 shadow-md flex-row justify-around dark:shadow-stone-300">
      <Image
        source={{ uri: data.image }}
        className={`h-32 w-20 scale-150 mb-2 shadow-md shadow-orange-300`}
      />
      <Container className="flex items-start w-32 ">
        <Label className="text-xl font-medium w-fit text-neutral-800">
          {data.name}
        </Label>

        {data.metaData &&
          data.metaData.map((item, index) => {
            return Object.keys(item).map((key, index) => {
              return (
                <Container key={index}>
                  <Label className="text-md font-medium text-neutral-800">
                    {key}
                  </Label>
                  <Label key={index} className="text-md text-neutral-600">
                    {Object.values(item)[index]}
                  </Label>
                </Container>
              );
            });
          })}
        <Label className="text-lg font-bold text-neutral-800">
          $ {data.price}
        </Label>
        <Container className="flex flex-row justify-center w-full items-center">
          {items.filter((item) => item.id === data.id).length > 0 ? (
            <Container className="flex flex-row justify-around w-full ">
              <Ionicons
                onPress={() => removeItemFromCart(data)}
                name="remove-circle"
                size={30}
                color="gray"
              />
              <Label className="text-md font-bold text-neutral-800">
                {items.filter((item) => item.id === data.id).length}
              </Label>
              <Ionicons
                onPress={() => addItemToCart(data)}
                name="add-circle-sharp"
                size={30}
                color="black"
              />
            </Container>
          ) : !data.inStock ? (
            <Label className="text-md font-bold text-red-500">
              Out of Stock
            </Label>
          ) : (
            <BuyButton
              onPress={() => addItemToCart(data)}
              data={data}
            ></BuyButton>
          )}
        </Container>
      </Container>
    </Container>
  );
}
