import {Pressable, Text, StyleSheet} from "react-native";
import {useState} from "react";

const MyButton = (props) => {
    return (
        <Pressable onPress={props.onButtonClick} style={[styles.button, {backgroundColor: props.backgroundColor}]}>
                {props.children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "40%",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },

})

export default MyButton;