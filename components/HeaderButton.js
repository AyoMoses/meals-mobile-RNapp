import React from "react";
import { Platform } from 'react-native';
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
  // remember to forward the {...props} IconComponent else it will not work, set a standard font size to scale across devices
};

export default CustomHeaderButton;
