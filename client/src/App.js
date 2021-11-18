import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
  const [gameData, setGameData ] = useState([])
  useEffect(() => {
    // const games = []
    // fetch("/games")
    //   .then(response => response.json())
    //   .then(function (result) {
    //     result.forEach((res,index)=> {
    //       games.push(
    //         <div class="cards">
    //           <p>Week {res.week}</p>
    //           <div class="card-description">
    //             <p>{res.home_team}-</p>
    //           <p class="score">{res.home_points}</p>
    //             </div>
    //             <div class="card-description">
    //           <p>{res.away_team}-</p>
    //           <p class="score">{res.away_points}</p>
    //             </div>
    //           <p class = "venue">This game was played at: {res.venue}</p>
    //         </div>
    //       )
    //       console.log(res)
    //     })
    //     setGameData(games)
    //   })
    //   .catch(error => console.log('error', error));
      
    },[])
    console.log(gameData)
    

    const handleSubmit = () => {
      const games = []
      fetch("/games")
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
        <img src={logo} className="App-logo" alt="logo" />
         <div>{gameData}</div>
         <button onClick={handleSubmit}>Submit</button>
      </header>
    </div>
  );
}





export default App;
