import { useState } from 'react'

import './App.css'

function App() {
  
  const [rollCount,setRollCount]= useState(0);
  const [score,setScore]=useState(0);
  const [remRoll,setRemRoll]=useState(3);
 const [buttonText,setButtonText]= useState('Roll..');

 const [position,setPosition]= useState();

 const positionResult=(score)=>{
      if(score>500){
       return "You are superstar!"
      }

      if(score>450)
      {
        return "You are elite!"
      }

      if(score>400)
      {
        return "You are amazing!";
      }
      if(score>350){
        return "You are awesome!";
      }

      if(score>300){
       return "You are Winner!";
      }

      if(score<300)
      {
        return "You lose the game!";
      }
     
 }
  const rollIncrement=()=>{
    if(rollCount==3)
    {
      setRollCount(0);
      setButtonText('Play Again');
      setPosition(positionResult(score));
      alert('Game over!');
      return
    }

    if(remRoll<=0 )
    {
       setScore(0);
       
       setRemRoll(3);
       setButtonText('Start Rolling..');
       setPosition('Processing');
       return;
    }

    setButtonText('Roll..');
    
    setScore(Math.floor(Math.random()*200)+score);
    setRemRoll(remRoll-1);
    setRollCount(rollCount+1);
    console.log(score,remRoll,rollCount);
  }

  return (
    <>
      <h1>Hi this is Random Number Game</h1>
      <p>3 Chance you have to roll the number if total number is more than 300 You survived otherwise you killed</p>
      <button onClick={rollIncrement}>{buttonText}</button>
      
      <p>Roll Done:{rollCount}</p>
      <p>Remaining Roll:{remRoll}</p>
      <p>Total Score:{score} </p>
      <p>Your Position:{position}</p>
    </>
  )
}

export default App
