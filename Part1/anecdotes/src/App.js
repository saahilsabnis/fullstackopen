import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick = {handleClick}>{text}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const max = anecdotes.length - 1
  const changeAnecdote = () => { setSelected(Math.floor(Math.random() * (max - 0 + 1)) + 0) }

  const incrementVote = () => {
    // Make a copy of votes array, increment at the required position and then set new state
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVoted = () => {
    let maxVal = 0
    let maxIndex = 0

    const compare = (val, ind) => {
      if(val > maxVal){
        maxVal = val
        maxIndex = ind
      }
    }
    votes.forEach(compare)
    return maxIndex
  }

  let best = maxVoted()

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button handleClick = {changeAnecdote} text = "Next Anecdote"/>
        <Button handleClick = {incrementVote} text = "Vote"/>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[best]}</p>
        <p>Votes: {votes[best]}</p>
      </div>
    </div>
  )
}

export default App