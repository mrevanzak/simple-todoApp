import React from "react";
import { Button, TextInput, View } from "react-native";
import { useState } from "react";

interface Props {
  submitHandler(text: string): void;
}

export default function AddTodo({ submitHandler }: Props) {
  const [text, setText] = useState("");

  const changeHandler = (text: string) => {
    setText(text);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText("");
  };

  return (
    <View
      style={{
        marginBottom: 5,
        flexBasis: "auto",
        flexShrink: 1,
        flexGrow: 0,
      }}
    >
      <TextInput
        placeholder="What do you want to do today? ..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button title="add todo" color="#bd93f9" onPress={pressHandler} />
    </View>
  );
}
