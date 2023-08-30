import axios from "axios";

const instance = axios.create({
    baseURL:'...'   //the API {cloud function} URL
});

export default instance;

// import { useEffect } from 'react';
// import instance from './path-to-axios'; 

// // eslint-disable-next-line react-hooks/rules-of-hooks
// useEffect(() => {
//     //generate  the special stripe secret which allows us to charge a customer
//     const getClientSecret = async () => {
//         const responce = await instance({
//             method: 'post',
//             //  Stripe expects the subunit of whatever currency you are using 
//             url: `/payments/create`,
//             // eslint-disable-next-line no-undef
//             data: getBasketTotal(basket) * 100 
//         });
//         setClientSecret(responce.data.clientSecret);
//     }

//     getClientSecret();
// }, [basket])