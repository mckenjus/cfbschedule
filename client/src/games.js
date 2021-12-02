import axios from 'axios';
import { useState, useEffect } from 'react';

// import logo from './logo.svg';
import './games.css';


function Games() {
  
  const [gameData, setGameData ] = useState([])
  useEffect(() => {

    },[])
    // console.log(gameData)
    

    const handleSubmit = () => {
      const games = []
      let option = Option.value
      axios.get("/games", option)
        .then(response => response.json())
        .then(function (result) {
          result.forEach((res,index)=> {
            games.push(
              <div class="cards">
                <p>Week {res.week}</p>
                <div class="card-description">
                  <p>{res.home_team}-</p>
                <p class="score">{res.home_points}</p>
                  </div>
                  <div class="card-description">
                <p>{res.away_team}-</p>
                <p class="score">{res.away_points}</p>
                  </div>
                <p class = "venue">This game was played at: {res.venue}</p>
              </div>
            )
            console.log(res)
          })
          setGameData(games)
        })
        .catch(error => console.log('error', error));
      
    }
  return (
    <div className="App">
      <header className="App-header">
        <select name="week" id="week">
          <option value="1">Week 1</option>
          <option value="2">Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
          <option value="5">Week 5</option>
          <option value="6">Week 6</option>
          <option value="7">Week 7</option>
          <option value="8">Week 8</option>
          <option value="9">Week 9</option>
          <option value="10">Week 10</option>
          <option value="11">Week 11</option>
          <option value="12">Week 12</option>
        </select>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
         <button onClick={handleSubmit}>Submit</button>
         <div>{gameData}</div>
      </header>
    </div>
  );
}





export default Games;