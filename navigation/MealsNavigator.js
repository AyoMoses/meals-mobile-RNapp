import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    //createStackNav takes two arguments. The first are objects with your screens,the second allow us to configure the navigator defaultNavigationOptions
    Categories: {
      screen: CategoriesScreen
    }, //forms our home screen
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    mode: "modal", //THIS CHANGES THE PAGE TRANSITION FROM BOTTOM TO TO UNLIKE PUSH BUT CHANGE IS ONLY ON IOS
    // initialRouteName: 'Categories' THIS CAN BE USED TO SET THE FIRST SCREEN OF AN APP IF NEED BE
    defaultNavigationOptions: { 
      //THIS TAKES AN OBJECT AND THE STYLES ARE APPLIED TO THE STACK NAVIGATIONS
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
      // headerTint is used to style header text color
    }
  }
);

export default createAppContainer(MealsNavigator);
