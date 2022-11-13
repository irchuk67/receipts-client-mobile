import React, {useEffect, useState} from "react";
import Dialog from "react-native-dialog";
import {Field, reduxForm} from "redux-form";
import MyButton from "./MyButton";
import {Alert, Modal, ScrollView, Text, TextInput, View, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import FormInput from "./formInput";

const Form = (props) => {
    function onFormSubmit(formValues) {
        props.onSubmitPress(formValues);
    }

    return (
        <Modal animationType={'slide'}
               transparent={true}
               visible={props.isOpen}
               onRequestClose={props.onFormClose}
        >
            <View style={styles.modalWrapper}>
                <View style={styles.fields}>
                    <Text style={styles.heading}>{props.title}</Text>
                    <Field name={'receiptText'}
                           component={FormInput}
                           label={props.label}
                    />
                </View>

                <View style={styles.buttons}>
                    <MyButton backgroundColor={'#ABFCCDFF'} onButtonClick={props.handleSubmit(onFormSubmit)}>{props.buttonText}</MyButton>


                    <MyButton backgroundColor={'#E6E6FAFF'}
                              onButtonClick={(event) => {
                                  event.preventDefault();
                                  props.onFormClose()
                              }}>Cancel</MyButton>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    modalWrapper: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 100
    },
    fields: {
        width: Dimensions.get("window").width * 0.75,
    },
    buttons: {
        width: Dimensions.get("window").width * 0.75,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 30,
    },
    heading: {
        fontSize: 20,
        margin: 30,
        textAlign: 'center'
    }
})

export default reduxForm({
    form: 'receiptForm',
    enableReinitialize: true
})(Form);