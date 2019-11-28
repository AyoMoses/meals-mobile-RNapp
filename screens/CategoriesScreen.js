import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = itemData => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
      {/* TITLE GOTTEN FROM OUR MODEL. THEN STYLE OUR SINGLE DATA GRID*/}
    </View>
  );
  // FlatList GIVES US A BUILT IN ITEMDATA TO POINT TO OBJECTS
};

const CategoriesScreen = props => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
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
