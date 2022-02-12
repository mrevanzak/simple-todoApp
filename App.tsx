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
import { MemoizeTodoItem } from "./components/TodoItem";
import { Todo } from "./Interface";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

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
