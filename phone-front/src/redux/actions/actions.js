import axios from 'axios';

 export function loadPhones() {
   return (dispatch) => axios.get('http://localhost:1234/phones').then((res) => {
     dispatch(fetchPhones(res.data));
   });
 }

 export function fetchPhones(phones) {
   return {
    type: 'LOAD_PHONES',
     phones,
   };
 }

