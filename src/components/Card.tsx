import React from "react";
import { Button, Image } from "react-native";
import { useCartStore } from "../hooks/store";
import { IAlcohol } from "../types/ICommon";
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
        <Label className="text-xl font-bold w-fit text-neutral-800">
          {data.name}
        </Label>

        {data.metaData &&
          data.metaData.map((item, index) => {
            return Object.keys(item).map((key, index) => {
              return (
                <Container key={index}>
                  <Label className="text-md font-bold text-neutral-700">
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
        <Container className="flex flex-row justify-around w-full">
          {items.filter((item) => item.id === data.id).length > 0 && (
            <Button
              title={data.inStock ? "remove" : "Out of Stock"}
              disabled={!data.inStock}
              onPress={() => removeItemFromCart(data)}
            />
          )}
          <Button
            title={data.inStock ? "buy" : "Out of Stock"}
            disabled={!data.inStock}
            onPress={() => addItemToCart(data)}
            //   className="text-sm m-2 px-2 py-1 bg-neutral-800 rounded items-center align-center w-20"
          />
          {/* <Label className="font-medium text-lg text-neutral-100">Grab</Label> */}
          {/* </Button> */}
        </Container>
      </Container>
    </Container>
  );
}
