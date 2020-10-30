import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TopTab } from "../navigation/TopTab";
const MessageScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <TopTab />
    </NavigationContainer>
  );
};

export default MessageScreen;
