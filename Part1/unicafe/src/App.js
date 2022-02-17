import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}> {text} </button>
}


const Statistic = ({text, value}) => {
  return ( 
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}


const StatisticLine = ({good, neutral, bad}) => {
  const total = good + neutral + bad 
  if (total > 0){
    return (
      <> 
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text = "Good" value = {good}/>
          <Statistic text = "Neutral" value = {neutral}/>
          <Statistic text = "Bad" value = {bad}/>
          <Statistic text = "All" value = {total}/>
          <Statistic text = "Average" value = {(good - bad) / total}/>
          <Statistic text = "Positive" value = {good * 100 / total + "%"}/>
        </tbody>
      </table>
      </>
    )
  }
  else 
    return <p>No Feedback Given</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => { setGood(good + 1) }
  const addNeutral = () => { setNeutral(neutral + 1) }
  const addBad = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick = {addGood} text = "Good"/>
      <Button handleClick = {addNeutral} text = "Neutral"/>
      <Button handleClick = {addBad} text = "Bad"/>
      <StatisticLine good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App