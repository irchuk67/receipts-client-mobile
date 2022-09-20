import {Text, View, StyleSheet} from "react-native";

const ReceiptItem = ({text}) => {
    return(
        <View style={styles.receiptItem}>
            <Text>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    receiptItem: {
        backgroundColor: '#E6E6FAFF',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    }
})

export default ReceiptItem;