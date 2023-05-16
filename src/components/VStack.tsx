import React from "react";
import { View, ViewProps } from "react-native";

interface Props extends ViewProps {}
export const VStack: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <View
      className={`flex items-center justify-between dark:bg-neutral-800 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};
