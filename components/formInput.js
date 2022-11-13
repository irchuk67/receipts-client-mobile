import React, {useState} from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'

const FormInput = (props) => {
    const {touched, error} = props.meta;
    const [focus, setFocus] = useState(false);

    const isErrorVisible = () => {
        return touched && error
            ? <Text>{error}</Text>
            : null
    }

    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <View>
                <TextInput
                    {...props}
                    value={props.input.value}
                    onChangeText={props.input.onChange}
                    onFocus={() => setFocus(true)}
                    onBlur={props.input.onBlur}
                    style={focus ? styles.focusInput : styles.input}
                />
            </View>
            {isErrorVisible()}
        </View>
    )
}

const input = {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderBottomColor: '#777',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    fontSize: 14,
    padding: 5
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 10
    },
    input: {...input},
    focusInput: {
        ...input,
        borderBottomColor: '#87fcb6',
        shadowColor: '#ABFCCDFF',
        shadowOpacity: .5,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowRadius: 5,
        elevation: 10
    }
})
export default FormInput