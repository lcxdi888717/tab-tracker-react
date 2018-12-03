import axios from "axios";

export const tryRegister = (url, payload) => {
  axios
    .post(url, payload)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
};
