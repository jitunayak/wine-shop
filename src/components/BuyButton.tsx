import { TouchableOpacity, View } from "react-native";
import Label from "./Label";

export function BuyButton({ data, ...props }: any) {
  return (
    <TouchableOpacity {...props}>
      <View className="bg-neutral-800  justify-center items-center px-4 py-[1px] rounded mt-2 ">
        <Label
          className="text-white text-base
          "
        >
          GRAB
        </Label>
      </View>
    </TouchableOpacity>
  );
}
