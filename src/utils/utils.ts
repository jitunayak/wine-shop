import * as Haptics from "expo-haptics";

export const vibrate = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
};
