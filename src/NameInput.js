import React from 'react'

const NameInput = ({ setInput }) => <input id="nameInput" className="grey-border" placeholder="Name..." onChange={e => setInput(e.target.value)} />

export default NameInput
