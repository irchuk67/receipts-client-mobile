import Form from "./form";
import {connect} from "react-redux";
import {closeUpdateForm, editReceipt} from "../redux/actions";

const UpdateReceipt = props => {
    const onUpdateFormSubmit = (formValues) => {
        console.log(formValues);
        props.editReceipt(props.id, formValues.receiptText);
        props.closeUpdateForm();
    }
    return(
        <Form title={'Update receipt'}
              label={'Updated receipt text'}
              buttonText={'Update'}
              isOpen={props.isUpdateFormOpen}
              onFormClose={props.closeUpdateForm}
              onSubmitPress={onUpdateFormSubmit}
              id={props.id}
              initialValues={{receiptText: props.text}}
        />
    )
}

const mapStateToProps = state => {
    return{
        isUpdateFormOpen: state.isUpdateFormOpen.isOpen,
        id:  state.isUpdateFormOpen.id,
        text: state.isUpdateFormOpen.text
    }
}

export default connect(mapStateToProps, {closeUpdateForm, editReceipt})(UpdateReceipt)