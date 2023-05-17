import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { countBy, reduce, uniqBy } from "lodash";
import React from "react";
import { Image, ScrollView } from "react-native";
import RazorpayCheckout, { CheckoutOptions } from "react-native-razorpay";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Address from "../src/components/Address";
import { Button } from "../src/components/Button";
import Container from "../src/components/Container";
import { HStack } from "../src/components/HStack";
import Label from "../src/components/Label";
import { useCartStore } from "../src/hooks/store";
import { env } from "../src/utils/config";

export default function cartScreen() {
  const { items, removeAllItems } = useCartStore();
  const router = useRouter();
  const width = useSharedValue(10);

  const rStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 5000,
        easing: Easing.linear,
      }),
    };
  }, []);
  const getTotalBillAmount = () => {
    const priceInRupees = reduce(items, (acc, curr) => acc + curr.price, 0);
    return priceInRupees;
  };

  const getTotalBillAmountForPayment = () => {
    return getTotalBillAmount() * 100;
  };

  async function handlePayment() {
    {
      if (items.length === 0) {
        router.push("/");
        return;
      }
      var options: CheckoutOptions = {
        description: "Shopping from Wine Shop",
        image: "https://i.imgur.com/3g7nmJC.png",
        currency: "INR",
        key: env.ENV_RAZORPAY_API_KEY,
        amount: getTotalBillAmountForPayment(),
        order_id: "",
        name: "Wine Shop",
        prefill: {
          email: "jitunayak715@gmail.com",
          contact: "911234567890",
          name: "Jitu Nayak",
        },
        theme: { color: "#0e5a14" },
      };
      RazorpayCheckout.open(options)
        .then((data) => {
          router.push("../");
          router.push("/delivery");
          removeAllItems();
        })
        .catch((error) => {
          alert(`Error: ${error.description}`);
        });
    }
  }

  if (items.length === 0) {
    return (
      <Container className="h-full">
        <HStack className="m-2 px-2 rounded bg-neutral-50 dark:bg-black">
          <Label className="text-lg font-medium m-2 text-center text-neutral-500 ">
            Your Cart is Empty
          </Label>
          <Ionicons name="md-trash-bin-outline" size={24} color="gray" />
        </HStack>
      </Container>
    );
  }
  return (
    <Container className="flex-1 py-10 justify-between">
      <ScrollView className="m-4 rounded-md border border-neutral-200 dark:border-neutral-600">
        {uniqBy(items, "id").map((item, index) => (
          <HStack
            key={index}
            className="p-2 border-b border-neutral-100 dark:border-neutral-600"
          >
            <Image
              source={{ uri: item.image }}
              className="w-12 h-12 aspect-square"
              style={{
                resizeMode: "contain",
              }}
            />
            <Label>{item.name}</Label>
            <HStack>
              <Label>₹ {item.price}</Label>
              <Label>x {countBy(items, "id")[item.id]}</Label>
            </HStack>
          </HStack>
        ))}
      </ScrollView>
      <Address />
      <Button
        className="m-2 bg-green-600 shadow-lg dark:bg-green-800"
        onPress={() => handlePayment()}
      >
        {/* <Button
          className="m-2 bg-green-600 shadow-lg"
          onPress={() => {
            withTiming(width.value, {
              duration: 5000,
              easing: Easing.inOut(Easing.ease),
            });
          }}
        >
          <Animated.View
            className="h-12 bg-green-600 w-full"
            style={[
              {
                width: width.value,
              },
              rStyle,
            ]}
          >
            <Label>Overlap</Label>
          </Animated.View>
        </Button> */}

        <HStack className="m-2 px-2 dark:bg-green-800">
          <Label className="text-md font-medium text-white">
            {items.length} items |
          </Label>
          <Label className="text-md font-bold text-white">
            {items.length === 0 ? "Go Back" : `PAY ₹ ${getTotalBillAmount()}`}
          </Label>
        </HStack>
      </Button>
    </Container>
  );
}
