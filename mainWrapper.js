import {StyleSheet, Text, View} from "react-native";
import MyButton from "./components/MyButton";
import ReceiptList from "./components/receiptList";
import {connect} from "react-redux";
import {getAllReceipts} from "./redux/actions";
import {useRef, useState} from "react";

const MainWrapper = (props) => {
    const [isListOpened, setIsListOpened] = useState(false);
    const onButtonClick = () => {
        setIsListOpened(!isListOpened)
        props.getAllReceipts().catch(err => console.log(err));
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <MyButton onButtonClick={onButtonClick} backgroundColor={'#ABFCCDFF'}>
                    <Text style={[styles.buttonText]}>
                        {isListOpened ? 'hide receipts' : 'show all receipts'}

                    </Text>
                </MyButton>
                <MyButton onButtonClick={onButtonClick} backgroundColor={'#ff93d8'}>
                    <Text style={[styles.buttonText]}>
                        add new receipt

                    </Text>
                </MyButton>
            </View>

            {isListOpened && <ReceiptList/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15
    },

    buttonText: {
        textTransform: "capitalize",
        textAlign: "center"
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const mapStateToProps = state => {
    return{
        receipts: state.receipts
    }
}
export default connect(mapStateToProps, {getAllReceipts})(MainWrapper);