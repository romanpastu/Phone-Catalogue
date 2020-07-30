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

// export function loadPhones(){
//   return function action(dispatch) {
//     dispatch({type: "LOAD_PHONES"})

//     const request = axios.get('http://localhost:1234/phones')

//     return request.then(
//       response => dispatch(fetchPhones(response.data))
//     )
//   }
// }