const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});
app.get('/games' , async (req,res)=>{
    let response = await axios.get('https://api.collegefootballdata.com/games?year=2021&seasonType=regular', {
      headers: {
        'Authorization': `Bearer lZC7yJIMJJifhXs0mBy5BM82tnrItKf8gXEIIVbMHzky2oR50TWcQAl0ZWC+VH4+`,
       
      }
    })
    .then((res) => {
      console.log(res.data);
     
      // let games = []
      // my_array = Object.entries(res.data).map(entry => {});

      return res.data;
    })
    .catch((error) => {
        console.error(error)
    })
    console.log(response)
  return res.json(response)

 })
 app.get('/teams' , async (req,res)=>{
  let response = await axios.get('https://api.collegefootballdata.com/games?year=2021&week=11&seasonType=regular', {
    headers: {
      'Authorization': `Bearer mKFbtgfkLiQNzqV/Skn5exPHkYLtoNiM9464DvI5pr4xFRmwQ9gZHBRjDPEKFsw3`
    }
  })
  .then((res) => {
   
    let games = []
    my_array = Object.entries(res.data).map(entry => {});

    return games
  })
  .catch((error) => {
      console.error(error)
  })
return res.json(response)

})
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
