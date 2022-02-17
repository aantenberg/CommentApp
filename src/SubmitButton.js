import React from 'react'

const SubmitButton = ({
  nameInput, setNameInput, post, setPost, updatePosts,
}) => {
  const isDisabled = nameInput === '' || post === ''
  const buttonClicked = () => {
    updatePosts(nameInput, post)
    setNameInput('')
    setPost('')
    document.getElementById('nameInput').value = ''
    document.getElementById('postArea').value = ''
  }
  return isDisabled ? <button type="button" className="btn btn-primary" disabled>Submit</button> : <button type="button" className="btn btn-primary" onClick={() => buttonClicked()}>Submit</button>
}

export default SubmitButton
