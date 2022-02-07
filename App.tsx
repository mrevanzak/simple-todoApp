import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import { MemoizeTodoItem, TodoItem } from "./components/TodoItem";
import { Todo } from "./Interface";

export default function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, setTodos] = useState([
    { key: "1", text: "Learn React Native" },
    { key: "2", text: "Learn React" },
    { key: "3", text: "Learn TypeScript" },
    { key: "4", text: "Learn Redux" },
    { key: "5", text: "Learn GraphQL" },
    { key: "6", text: "Learn Apollo" },
    { key: "7", text: "Learn Next.js" },
    { key: "8", text: "Learn React Hooks" },
    { key: "9", text: "Learn React Native Hooks" },
    { key: "10", text: "Learn React Native Navigation" },
    { key: "11", text: "Learn React Native Animations" },
  ]);

  const pressHandler = (key: string): void => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text: string): void => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <MemoizeTodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  content: {
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    backgroundColor: "#f8f8f2",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
    paddingVertical: 25,
  },
  container: {
    flex: 1,
    backgroundColor: "#282a36",
    color: "white",
  },
  list: {
    flexBasis: "auto",
    flexShrink: 1,
    flexGrow: 0,
  },
});
