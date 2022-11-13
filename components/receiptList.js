import {FlatList, Text, View, StyleSheet} from "react-native";
import {useCallback, useEffect, useState} from "react";
import {getReceipts} from "../api/receipts";
import ReceiptItem from "./receiptItem";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {connect} from "react-redux";
import {deleteReceiptByID} from "../redux/actions";

const ReceiptList = (props) => {
    const [fontsLoaded] = useFonts({
        'Arialn': require('../assets/fonts/Arialn.otf'),
    });

    const onReceiptDelete = (id) => props.deleteReceiptByID(id).catch(err => log(err));

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    const renderItem = itemData => {
        return <ReceiptItem text={itemData.item.text}
                            onItemDelete={onReceiptDelete}
                            id={itemData.item.id}
        />
    }

    return (
        <View>
            <Text style={styles.Heading}>Receipts list</Text>
            <FlatList alwaysBounceVertical={false}
                      data={props.receipts}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
            />
        </View>
    )
}

const mapStateToProps = state => {
    return{
        receipts: state.receipts
    }
}
export default connect(mapStateToProps, {deleteReceiptByID})(ReceiptList);

const styles = StyleSheet.create({
    Heading: {
        color: 'black',
        fontFamily: 'Arialn',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10
    }

})