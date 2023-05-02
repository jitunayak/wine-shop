import React from "react";
import { View, ViewProps } from "react-native";

export default function Container({
  children,
  className,
  ...props
}: ViewProps) {
  return (
    <View {...props} className={`flex bg-white dark:bg-slate-800 ${className}`}>
      {children}
    </View>
  );
}
