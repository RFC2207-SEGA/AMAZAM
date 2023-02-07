import axios from 'axios';
const { API_KEY } = process.env.API_KEY

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
  .catch((err) => {
    console.log(err)
  });
};