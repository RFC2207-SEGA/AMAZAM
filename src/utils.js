const axios = require('axios');
import {API_KEY} from './config/config.js';
export const handleInteractions = (e, currentWidget) => {
  var date = new Date();
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/interactions',
    {
      element: e.target.tagName,
      widget: currentWidget,
      time: date,
    },
    {headers: { Authorization: `${API_KEY}` } }
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err)
  });
};