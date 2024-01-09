import React, {useState} from 'react';
import SinglePaymentMethod from "./SinglePaymentMethod";
import payment_photo from '../../assets/image 46.svg'
import AddEditPaymentModal from "./AddEditPaymentModal";

const PaymentMethod = () => {
    const [payments, setPayments] = useState([
        {
            index: 0,
            card_holder: "Benjamin Bernez",
            card_numbers: "1234 1234 1234 1234",
            card_month: 4,
            card_year: 24,
            cvc: 123,
            payment_image: payment_photo,
            default: true
        },
    ]);

    const [checkedPayment, setCheckedPayment] = useState(payments[0]?.card_numbers);
    const [openModal, setOpenModal] = useState(false);
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState({
        index: 0,
        card_holder: "",
        card_numbers: "",
        card_month: "",
        card_year: "",
        cvc: "",
        payment_image: payment_photo
    })

    const handleCloseModal = () => {
        setOpenModal(false);
        setEdit(false);
        setData({
                index: 0,
                card_holder: "",
                card_numbers: "",
                card_month: "",
                card_year: "",
                cvc: "",
                payment_image: payment_photo
            }
        )
    }

    const addPaymentMethod = (e, data) => {
        e.preventDefault();
        setPayments([...payments, data]);
        setOpenModal(false);
    }

    const onEditPayment = (event, data) => {
        event.stopPropagation();
        setData(data);
        setOpenModal(true);
        setEdit(true);
    }

    const handleEditPayment = (event) => {
        event.preventDefault();
        setPayments(prevState => prevState.map(payment => {
            if (payment.index === data.index) {
                return data;
            } else return payment;
        }));
        setOpenModal(false);
        setEdit(false);
        setData({
                index: 0,
                card_holder: "",
                card_numbers: "",
                card_month: "",
                card_year: "",
                cvc: "",
                payment_image: payment_photo
            }
        )
    }

    const handleDeletePayment = () => {
        setPayments(prevState => prevState.filter(payment => {
            return payment.card_numbers !== data.card_numbers;
        }))
        setOpenModal(false);
        setEdit(false);
        setData({
                index: 0,
                card_holder: "",
                card_numbers: "",
                card_month: "",
                card_year: "",
                cvc: "",
                payment_image: payment_photo
            }
        )
    }
    return (
        <>
            <AddEditPaymentModal open={openModal} handleClose={handleCloseModal} data={data} setData={setData}
                                 handleSubmit={addPaymentMethod} edit={edit} handleEditPayment={handleEditPayment}
                                 payments={payments} handleDeletePayment={handleDeletePayment}/>
            <div className='personal-info'>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" fill="white"/>
                        <path
                            d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z"
                            stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 10H22" stroke="black" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    Payment Method
                </h1>
                <div className='payment-method-selector'>
                    {payments.map(payment =>
                        <SinglePaymentMethod payment={payment} checkedPayment={checkedPayment}
                                             setCheckedPayment={setCheckedPayment} onEditPayment={onEditPayment}/>
                    )}
                </div>
                <button onClick={() => setOpenModal(true)}>
                    Add New Payment Method
                </button>
            </div>
        </>
    );
};

export default PaymentMethod;