import React from 'react';
import {IconButton, Modal} from "@mui/material";
import CityInput from "../CItyInput";
import './AddEditPaymentModal.scss'

const AddEditPaymentModal = ({open, handleClose, payments, data, setData, handleSubmit, edit, handleEditPayment, handleDeletePayment}) => {

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]: value, index:payments.length})
    }

    const formatCreditCardNumber = (value) => {
        // Remove non-numeric characters
        const cleanedValue = value.replace(/\D/g, '');

        // Add spaces every 4th character
        return cleanedValue.replace(/(\d{4})/g, '$1 ').trim();
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        // Update the input value with the formatted result
        event.target.value = formatCreditCardNumber(inputValue);

        setData({...data, card_numbers: event.target.value})
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <form className='modal-payment' onSubmit={(e) => handleSubmit(e, data)}>
                <div className='top-part'>
                    <h1>Add Payment Method</h1>
                    <IconButton onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                            <path d="M27.9961 12.5L11.9961 28.5005" stroke="#979797" stroke-width="1.28573"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9961 12.5L27.9961 28.5005" stroke="#979797" stroke-width="1.28573"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </IconButton>
                </div>
                <div className='payment-method-info'>
                    <CityInput name="card_holder" value={data.card_holder} onChange={handleChange}
                               label='Cardholder Name'/>
                    <CityInput label='Card Number' value={data.card_numbers} onChange={handleInputChange}
                               inputProps={{
                                   maxLength: 19
                               }}
                    />
                    <div className='row'>
                        <CityInput name="card_month" value={data.card_month} onChange={handleChange} label='Month'
                                   type="number"/>
                        <CityInput name="card_year" value={data.card_year} onChange={handleChange} label='Year'
                                   type="number"/>
                        <CityInput name="cvc" value={data.cvc} onChange={handleChange} label='CVC (Security code)'
                                   type="number"/>
                    </div>
                </div>
                <div className='buttons'>
                    {edit ? <>
                        <button onClick={handleEditPayment}>Save Changes</button>
                        <button className='delete' onClick={handleDeletePayment}>Delete Payment Method</button>
                    </> : <>
                        <button type="submit">Add Payment Method</button>
                        <button className='white' onClick={handleClose}>Cancel</button>
                    </>
                    }
                </div>
            </form>
        </Modal>
    );
};

export default AddEditPaymentModal;