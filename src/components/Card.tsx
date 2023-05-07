import { Ionicons } from "@expo/vector-icons";
import { MotiImage, MotiText } from "moti";
import React, { memo } from "react";
import { View } from "react-native";
import { useCartStore } from "../hooks/store";
import { IAlcohol } from "../types/ICommon";
import { vibrate } from "../utils/utils";
import { Button } from "./Button";
import Container from "./Container";
import Label from "./Label";

function Card({ data }: { data: IAlcohol }) {
  const { addItem, removeItem, items } = useCartStore();

  function addItemToCart(item: IAlcohol) {
    vibrate();
    addItem(item);
  }

  function removeItemFromCart(item: IAlcohol) {
    vibrate();
    removeItem(item);
  }

  const itemsAddedInCart = items.filter((item) => item.id === data.id).length;
  const isItemAddedInCart = itemsAddedInCart > 0;

  return (
    <Container className="p-4 rounded-lg m-4 shadow flex-row justify-around bg-white dark:shadow-stone-300">
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
          {isItemAddedInCart ? (
            <Container className="absolute flex flex-row justify-around border border-neutral-300 rounded-md mt-2 bottom-1 right-1">
              <View className=" gap-4 w-30 items-center">
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
                  {itemsAddedInCart}
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
                <Container className="absolute flex flex-row justify-around border border-transparent rounded-md bottom-1 right-1">
                  <Button
                    className="py-[1] border bg-white border-neutral-300"
                    title="GRAB"
                    onPress={() => {
                      addItemToCart(data);
                    }}
                  />
                </Container>
              )}
            </>
          )}
        </Container>
      </Container>
    </Container>
  );
}

export default memo(Card);
