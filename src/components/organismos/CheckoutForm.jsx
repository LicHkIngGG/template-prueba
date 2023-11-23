import React from 'react';
import BackButton from '../atomos/BackButton';
import AddressForm from '../moleculas/AddressForm';
import OrderSummary from '../moleculas/OrderSummary';
import PaymentButton from '../atomos/PaymentButton';
import MetodoPago from '../atomos/MetodoPago'; 
import "./styles/CheckoutForm.css";

function CheckoutForm() {
  return (
    <div className="checkout-form">
      <BackButton />
      <div className='subtitulo'>
      <p>Añadir Dirección</p>
      </div>
      <AddressForm />
      <OrderSummary />
      <MetodoPago/>
      <PaymentButton />
    
    </div>
  );
}

export default CheckoutForm;
