import {StyleSheet, Text, View} from "react-native";
import MyButton from "./components/MyButton";
import ReceiptList from "./components/receiptList";
import {connect} from "react-redux";
import {addNewReceipt, closeAddForm, getAllReceipts, openAddForm, closeUpdateForm} from "./redux/actions";
import {useRef, useState} from "react";
import Form from "./components/form";
import AddReceipt from "./components/addReceipt";
import UpdateReceipt from "./components/updateReceipt";

const MainWrapper = (props) => {
    const [isListOpened, setIsListOpened] = useState(false);
    const onButtonClick = () => {
        setIsListOpened(!isListOpened)
        props.getAllReceipts().catch(err => console.log(err));
    }
    const onAddButtonClick = () => {
        props.openAddForm()
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.buttons}>
                    <MyButton onButtonClick={onButtonClick} backgroundColor={'#ABFCCDFF'}>
                        <Text style={[styles.buttonText]}>
                            {isListOpened ? 'hide receipts' : 'show all receipts'}

                        </Text>
                    </MyButton>
                    <MyButton onButtonClick={onAddButtonClick} backgroundColor={'#ff93d8'}>
                        <Text style={[styles.buttonText]}>
                            add new receipt

                        </Text>
                    </MyButton>
                </View>

                {isListOpened && <ReceiptList/>}

            </View>
            {props.isAddFormOpen && <AddReceipt/>}
            {props.isUpdateFormOpen && <UpdateReceipt/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15
    },


    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const mapStateToProps = state => {
    return {
        receipts: state.receipts,
        isAddFormOpen: state.isAddFormOpen,
        isUpdateFormOpen: state.isUpdateFormOpen
    }
}
export default connect(mapStateToProps, {
    getAllReceipts,
    openAddForm,
    closeAddForm,
    addNewReceipt,
    closeUpdateForm
})(MainWrapper);