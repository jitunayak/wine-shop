import React from "react";
import { View, ViewProps } from "react-native";

export const Container: React.FC<ViewProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <View
            {...props}
            className={`flex bg-white dark:bg-neutral-900 ${className}`}
        >
            {children}
        </View>
    );
};
