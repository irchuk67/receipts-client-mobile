import {StyleSheet, Text, View} from "react-native";
import MyButton from "./components/MyButton";
import ReceiptList from "./components/receiptList";
import {connect} from "react-redux";
import {addNewReceipt, closeAddForm, getAllReceipts, openAddForm} from "./redux/actions";
import {useRef, useState} from "react";
import Form from "./components/form";

const MainWrapper = (props) => {
    const [isListOpened, setIsListOpened] = useState(false);
    const onButtonClick = () => {
        setIsListOpened(!isListOpened)
        props.getAllReceipts().catch(err => console.log(err));
    }
    const onAddButtonClick = () => {
        props.openAddForm()
    }
    const onFormSubmit = (formValues) => {
        props.addNewReceipt(formValues.receiptText);
        props.closeAddForm();
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
            {props.isAddFormOpen && <Form title={'Add new receipt'}
                                          label={'New receipt'}
                                          buttonText={'Create'}
                                          isOpen={props.isOpen}
                                          onFormClose={props.closeAddForm}
                                          onSubmitPress={onFormSubmit}/>}
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
    return{
        receipts: state.receipts,
        isAddFormOpen: state.isAddFormOpen
    }
}
export default connect(mapStateToProps, {getAllReceipts, openAddForm, closeAddForm, addNewReceipt})(MainWrapper);