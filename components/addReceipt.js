import Form from "./form";
import {connect} from "react-redux";
import {closeAddForm, addNewReceipt} from "../redux/actions";

const AddReceipt = (props) => {
    const onAddFormSubmit = (formValues) => {
        props.addNewReceipt(formValues.receiptText);
        props.closeAddForm();
    }

    return(
        <Form title={'Add new receipt'}
              label={'New receipt'}
              buttonText={'Create'}
              isOpen={props.isAddFormOpen}
              onFormClose={props.closeAddForm}
              onSubmitPress={onAddFormSubmit}/>
    )
}

const mapStateToProps = state => {
    return{
        isAddFormOpen: state.isAddFormOpen
    }
}
export default connect(mapStateToProps, {closeAddForm, addNewReceipt})(AddReceipt);