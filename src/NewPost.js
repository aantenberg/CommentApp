import React, { useState } from 'react'
import NameInput from './NameInput'
import PostTextArea from './PostTextArea'
import SubmitButton from './SubmitButton'

const NewPost = ({ updatePosts, isMainPost, defaultText }) => {
  const [nameInput, setNameInput] = useState('')
  const [post, setPost] = useState('')
  return (
    <div className={isMainPost ? 'card depth-1' : 'card depth-2'}>
      {isMainPost ? <h2 style={{ padding: '0 5px' }}>New Post</h2> : <></>}
      <NameInput setInput={setNameInput} />
      <PostTextArea setPost={setPost} defaultText={defaultText} />
      <SubmitButton nameInput={nameInput} setNameInput={setNameInput} post={post} setPost={setPost} updatePosts={updatePosts} />
    </div>
  )
}
export default NewPost
