import React, { useState } from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";
import Container from "../components/Container";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import { VStack } from "../components/VStack";
import { productList } from "./mockData";
export default function HomeScreen() {
  const [categories, setCategories] = useState(
    [...new Set(productList.map((item) => item.category))].sort()
  );

  const [currentSelectedCategory, setCurrentSelectedCategory] = useState(
    categories[0]
  );
  return (
    <Container className="justify-start flex-1 ">
      <Header />
      <VStack className="items-stretch w-full ">
        <Tabs
          list={categories}
          currentSelectedCategory={currentSelectedCategory}
          setCurrentSelectedCategory={setCurrentSelectedCategory}
        />
        <FlatList
          data={productList.filter(
            (item) => item.category === currentSelectedCategory
          )}
          className=""
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card data={item} />}
        />
      </VStack>
    </Container>
  );
}
