import React, { useState } from 'react'

const Voter = () => {
  const [voteCount, setVoteCount] = useState(0)
  return (
    <>
      <button id="vote-arrow" type="button" className="btn" onClick={() => setVoteCount(voteCount + 1)}>▲</button>
      <div id="votes">{voteCount}</div>
      <button id="vote-arrow" type="button" className="btn" onClick={() => setVoteCount(voteCount - 1)}>▼</button>
    </>
  )
}

export default Voter
