import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  // we use this to get all the id with the meal category from the categories screen

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />

      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />

      {/* YOU CAN USE POP() FOR NAVIGATIONS WITHING THE STACK WHICH TAKES YOU BACK TOO */}
    </View>
  );
};

// CODE BELOW IS USED TO SET OUR NAVIGATION OPTIONS. NAVIGATION SHOWS CLICKED CATEGORY ON HEADER
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
