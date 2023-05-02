import { Asset } from "expo-asset";
import React from "react";
import { Button, Image } from "react-native";
import { IAlcohol } from "../types/ICommon";
import Container from "./Container";
import Label from "./Label";

export default function Card({ data }: { data: IAlcohol }) {
  const image = Asset.loadAsync("../../assets/alcohols/image1.jpg");

  return (
    <Container className="p-4  my-4 shadow-md flex-row justify-around dark:shadow-stone-300">
      <Image
        source={{ uri: data.image }}
        className={`h-32 w-20 scale-150 mb-2 shadow-md shadow-${data.color}`}
      />
      <Container className="flex items-start w-32 ">
        <Label className="text-xl font-bold w-fit text-neutral-800">
          {data.name}
        </Label>

        {/* <Label className="text-md font-bold text-neutral-700">Volume</Label>
        <Label className="text-md text-neutral-600">{data.volume} ml</Label>

        <Label className="text-md font-bold text-neutral-700">Alcohol</Label>
        <Label className="text-md text-neutral-600">
          {data.alcoholPercentage}%
        </Label> */}

        {data.metaData &&
          data.metaData.map((item, index) => {
            return Object.keys(item).map((key, index) => {
              return (
                <>
                  <Label className="text-md font-bold text-neutral-700">
                    {key}
                  </Label>
                  <Label key={index} className="text-md text-neutral-600">
                    {Object.values(item)[index]}
                  </Label>
                </>
              );
            });
          })}
        <Label className="text-lg font-bold text-neutral-800">
          ₹ {data.price}
        </Label>
        <Button
          title={data.inStock ? "Buy" : "Out of Stock"}
          disabled={!data.inStock}
          //   className="text-sm m-2 px-2 py-1 bg-neutral-800 rounded items-center align-center w-20"
        />
        {/* <Label className="font-medium text-lg text-neutral-100">Grab</Label> */}
        {/* </Button> */}
      </Container>
    </Container>
  );
}
