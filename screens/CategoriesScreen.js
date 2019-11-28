import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id
          });
          // once touched by linking our item id to the new screen with categoryId and itemData
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
          {/* TITLE GOTTEN FROM OUR MODEL. THEN STYLE OUR SINGLE DATA GRID*/}
        </View>
      </TouchableOpacity>
    );
    // FlatList GIVES US A BUILT IN ITEMDATA TO POINT TO OBJECTS
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

// SETTING PAGE TITLE ON NAVIGATION
CategoriesScreen.navigationOptions = {
  headerTitle: "MealCategories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
