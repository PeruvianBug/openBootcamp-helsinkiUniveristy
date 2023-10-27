import { useState } from 'react'

const Button = ({handleClick,text}) => (<button onClick={handleClick}> {text} </button>)
const StatisticsLine = ({text,value}) => (<div><p>{text} {value}</p></div>)

const Statistics = ({good,neutral,bad}) => {

  const  totalClicks = good+neutral+bad;
   
       return totalClicks>0 ?(        
        <table>
        <tbody>
        <tr><td><StatisticsLine text="good" value ={good} /></td></tr>
        <tr><td><StatisticsLine text="neutral" value ={neutral} /></td></tr>
        <tr><td><StatisticsLine text="bad" value ={bad} /></td></tr>
        <tr><td><StatisticsLine text="All" value ={totalClicks} /></td></tr>
        <tr><td><StatisticsLine text="Average" value ={(good-bad)/totalClicks} /></td></tr>
        <tr><td><StatisticsLine text="Positive" value ={((good)*100)/totalClicks} /></td></tr>
        </tbody>
        </table>       
    ) : (<p>"No feedback given"</p>)    
  }  
const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button   handleClick = {() =>{setGood(good+1)}}    text="good" />
      <Button   handleClick = {() =>{setNeutral(neutral+1)}}  text="neutral"  />
      <Button   handleClick = {() =>{setBad(bad+1)}}   text="bad"  />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />     
    </div>
  )
}

export default App