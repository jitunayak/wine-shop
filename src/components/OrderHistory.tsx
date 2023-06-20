import { HStack, Label, VStack } from ".";
import { IOrderItem } from "../types";
import { Chip, ChipTypes } from "./Chip";

export const OrderHistory: React.FC<{ item: IOrderItem }> = ({ item }) => {
    return (
        <VStack className="mx-2 my-1 rounded-md p-4 border  border-neutral-200 items-start dark:border-neutral-600">
            <HStack className="w-full items-center p-1 border border-transparent border-b-neutral-200 dark:border-b-neutral-400">
                <Label className="text-base p-1">{item.title}</Label>
                <Label className="text-base p-1">{item.date}</Label>
                <Chip
                    type={item.status as ChipTypes}
                    label={item.status}
                    size="sm"
                ></Chip>
            </HStack>
            <Label className="text-base p-1 mt-2 text-clip">
                {item.items.join(", ")}
            </Label>
        </VStack>
    );
};
