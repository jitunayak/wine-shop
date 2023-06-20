import React, { useCallback, useRef, useState } from "react";
import { Animated } from "react-native";

import { Header } from "react-native/Libraries/NewAppScreen";
import { Container, Tabs, VStack } from "../components";
import Card from "../components/Card";
import { productList } from "./mockData";

export default function HomeScreen() {
    const [categories, setCategories] = useState(
        [...new Set(productList.map((item) => item.category))].sort()
    );

    const [currentSelectedCategory, setCurrentSelectedCategory] = useState(
        categories[0]
    );
    const scrollA = useRef(new Animated.Value(0)).current;

    return (
        <Container className="justify-between flex-1">
            <VStack className="items-stretch w-full ">
                <Animated.View
                    className="flex w-full"
                    style={{
                        transform: [
                            {
                                translateY: scrollA.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: [0, -150],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    }}
                >
                    <Header />
                    <Tabs
                        list={categories}
                        currentSelectedCategory={currentSelectedCategory}
                        setCurrentSelectedCategory={setCurrentSelectedCategory}
                    />
                </Animated.View>
                <Animated.FlatList
                    data={useCallback(
                        () =>
                            productList.filter(
                                (item) => item.category === currentSelectedCategory
                            ),
                        [currentSelectedCategory]
                    )()}
                    className=""
                    style={{
                        transform: [
                            {
                                translateY: scrollA.interpolate({
                                    inputRange: [0, 400],
                                    outputRange: [0, -150],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                        { useNativeDriver: false }
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Card data={item} />}
                />
            </VStack>
        </Container>
    );
}
