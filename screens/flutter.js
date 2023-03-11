import React from 'react';
import { PayWithFlutterwave } from 'flutterwave-react-native';
import {flutter} from "@env"

const generateTransactionRef = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `flw_tx_ref_${result}`;
};

const handleOnRedirect = (data) => {
  console.log(data);
};

const PaymentScreen = () => {
  return (
    <PayWithFlutterwave
      onRedirect={handleOnRedirect}
      options={{
        tx_ref: generateTransactionRef(10),
        authorization: `${flutter}`,
        customer: {
          'email': "flutterloans.biz@gmail.com",
          'phonenumber': '08012345678',
          'name': 'Takeshi Kovacs'
        },
        amount: 2000,
        currency: 'NGN',
        payment_options: 'card'
      }}
    />
  );
};

export default PaymentScreen;