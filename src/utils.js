const axios = require('axios');


export const handleInteractions = (e, currentWidget) => {
  // const { API_KEY } = process.env.API_KEY
  console.log('process.env.API_KEY:', process.env.API_KEY)
  console.log('process.env.REACT_APP_API_KEY:', process.env.REACT_APP_API_KEY)
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