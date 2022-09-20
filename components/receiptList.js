import {FlatList, Text, View, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {getReceipts} from "../api/receipts";
import ReceiptItem from "./receiptItem";

const ReceiptList = index => {
    const [receipts, setReceipts] = useState([]);
    useEffect(() => {
            getReceipts().then(res => {
                setReceipts(res.data);
            }).catch(err => {
                console.log(err)
            });
        }, []
    )
    const renderItem = itemData => {
        return <ReceiptItem text={itemData.item.text}/>
    }

    return (
        <View>
            <Text style={styles.HeadingGoogle || styles.HeadingIOS}>Receipts list</Text>
            <FlatList alwaysBounceVertical={false}
                      data={receipts}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ReceiptList;

const styles = StyleSheet.create({
    HeadingGoogle: {
        color: 'black',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10
    },
    HeadingIOS: {
        color: 'black',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 30
    }

})