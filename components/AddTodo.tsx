import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
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
            <TouchableOpacity
                style={{
                    borderRadius: 5,
                    padding: 10,
                    marginVertical: 5,
                    backgroundColor: "#bd93f9",
                }}
                onPress={pressHandler}
            >
                <Text style={{ color: "white", textAlign: "center" }}>
                    ADD TODO
                </Text>
            </TouchableOpacity>
        </View>
    );
}
