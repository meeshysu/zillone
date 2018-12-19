import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/listings.json`)
    .then((res) => {
      const listings = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          // making so where you can do a foreach loop with result of the data
          // your setting the id as a key value, cause when you get the stuff back from fb
          // you are setting an id.
          listings.push(res.data[key]);
          // building it out so you can add the id and pushing it into the listing
        });
      }
      resolve(listings);
    })
    .catch((error) => {
      reject(error);
    });
});

const deleteListing = listingId => axios.delete(`${firebaseUrl}/listings/${listingId}.json`);

const postRequest = listing => axios.post(`${firebaseUrl}/listings.json`, listing);

export default {
  getRequest,
  deleteListing,
  postRequest,
};
