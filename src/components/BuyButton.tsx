import { TouchableOpacity, View } from "react-native";
import Label from "./Label";

export function BuyButton({ data, ...props }: any) {
  return (
    <TouchableOpacity {...props}>
      <View className="bg-orange-600  justify-center items-center px-4 py-0 mt-2 rounded">
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
