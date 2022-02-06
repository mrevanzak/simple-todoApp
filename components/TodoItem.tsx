import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Todo } from "../Interface";

interface Props {
  item: Todo;
  pressHandler(key: string): void;
}

export function TodoItem({ pressHandler, item }: Props) {
  const colors = [
    "#ff79c6",
    "#bd93f9",
    "#8be9fd",
    "#f1fa8c",
    "#50fa7b",
    "#ff5555",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View
        style={{
          backgroundColor: randomColor,
          borderRadius: 5,
          padding: 10,
          marginVertical: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#282a36" }}>{item.text}</Text>
        <Ionicons name="checkmark-done-sharp" size={24} color="#282a36" />
      </View>
    </TouchableOpacity>
  );
}

function todoPropsAreEqual(prevProps: Props, nextProps: Props) {
  return prevProps.item.key === nextProps.item.key;
}

export const MemoizeTodoItem = React.memo(TodoItem, todoPropsAreEqual);
