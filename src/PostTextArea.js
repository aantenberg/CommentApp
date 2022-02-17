import React from 'react'

const PostTextArea = ({ setPost, defaultText }) => <textarea id="postArea" className="grey-border" rows="4" placeholder="Write a new post..." onChange={e => setPost(e.target.value)} defaultValue={defaultText} />

export default PostTextArea
