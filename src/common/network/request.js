import {create} from 'axios';

const API = create({
  timeout: 60000,
});

export const request = (url) =>
  new Promise(async (resolve, reject) => {
    try {
      doGet(url, resolve, reject);
    } catch (error) {
      reject(error);
    }
  });

export const parseResponse = (response) =>
  new Promise((parsedResponse) => {
    if (response && response.status && response.status === 200) {
      parsedResponse({isSuccess: true, response: response});
    } else {
      let message = 'Something went wrong. Please try again later.';
      if (response.data != null && response.data.message) {
        message = response.data.message;
      }
      parsedResponse({isSuccess: false, message: message});
    }
  });

const doGet = (url, resolve, reject, config = {}) => {
  API.get(url, config)
    .then((response) => {
      parseResponse(response)
        .then((parsedResponse) => {
          if (parsedResponse.isSuccess) {
            resolve({response: parsedResponse.response.data});
          } else {
            reject(parsedResponse.message);
          }
        })
        .catch((error) => {
          console.log('failureeeo1', url);
        });
    })
    .catch((error) => {
      console.log('failureeeo2', url, error);
      reject(error);
    });
};
