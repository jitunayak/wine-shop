import { Ionicons } from "@expo/vector-icons";
import { MotiImage, MotiText } from "moti";
import React from "react";
import { View } from "react-native";
import { useCartStore } from "../hooks/store";
import { IAlcohol } from "../types/ICommon";
import { vibrate } from "../utils/utils";
import { Button } from "./Button";
import Container from "./Container";
import Label from "./Label";

export default function Card({ data }: { data: IAlcohol }) {
  const { addItem, removeItem, items } = useCartStore();

  function addItemToCart(item: IAlcohol) {
    vibrate();
    addItem(item);
  }

  function removeItemFromCart(item: IAlcohol) {
    vibrate();
    removeItem(item);
  }

  return (
    <Container className="p-4 my-4 shadow-md flex-row justify-around bg-white dark:shadow-stone-300">
      <MotiImage
        from={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ type: "timing" }}
        source={{ uri: data.image }}
        className={`h-32 w-20 scale-150 mb-2  shadow-orange-300 ml-4`}
      />
      <Container className="flex items-start ml-4 ">
        <Label
          className="text-lg font-medium w-fit text-neutral-800 line-clamp-1"
          numberOfLines={1}
        >
          {data.name}
        </Label>

        {data.metaData &&
          data.metaData.map((item, index) => {
            return Object.keys(item).map((key, index) => {
              return (
                <Container key={index}>
                  <Label className="text-md font-medium text-neutral-400">
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
          ₹ {data.price}
        </Label>
        <Container className="flex flex-row justify-center w-full items-center">
          {items.filter((item) => item.id === data.id).length > 0 ? (
            <Container className="flex flex-row justify-around border border-neutral-400 rounded-md mt-2">
              <View className="flex flex-row gap-4 w-fit items-center">
                <Ionicons
                  onPress={() => removeItemFromCart(data)}
                  name="remove-circle"
                  size={30}
                  color="gray"
                />
                <MotiText
                  from={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring" }}
                  className="text-md font-bold text-neutral-800"
                >
                  {items.filter((item) => item.id === data.id).length}
                </MotiText>
                <Ionicons
                  onPress={() => addItemToCart(data)}
                  name="add-circle-sharp"
                  size={30}
                  color="black"
                />
              </View>
            </Container>
          ) : (
            <>
              {!data.inStock ? (
                <Label className="text-md font-bold text-red-500">
                  Out of Stock
                </Label>
              ) : (
                <Button
                  className="py-[1] border bg-white border-neutral-300"
                  title="GRAB"
                  onPress={() => {
                    addItemToCart(data);
                  }}
                />
              )}
            </>
          )}
        </Container>
      </Container>
    </Container>
  );
}
