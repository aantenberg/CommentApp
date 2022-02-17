import React, { useState } from 'react'
import NewPost from './NewPost'
import Voter from './Voter'

const Post = ({ username, post, depth }) => {
  const [isReplying, setIsReplying] = useState(false)
  const [replies, setReplies] = useState([])
  const updateReplies = (nameInput, text) => {
    const updated = replies.concat({ name: nameInput, text, depth: depth + 1 })
    setIsReplying(false)
    setReplies(updated)
  }
  return (
    <div className={`card depth-${depth >= 2 ? 2 : 1}`}>
      <table>
        <tbody>
          <tr>
            <td style={{ width: '95%' }}>
              <h5 className="username">{username}</h5>
              <div style={{ padding: '10px' }}>{post}</div>
            </td>
            <td style={{ width: '5%' }}>
              <Voter />
            </td>
          </tr>
        </tbody>
      </table>
      {depth < 3 ? <button type="button" id="reply-btn" className="btn btn-light" onClick={() => setIsReplying(!isReplying)}>Reply</button> : <></>}
      {isReplying ? <NewPost updatePosts={updateReplies} isMainPost={false} defaultText={`@${username} `} /> : <></>}
      {replies.map(reply => <Post key={replies.indexOf(reply)} username={reply.name} post={reply.text} depth={reply.depth} />)}
    </div>
  )
}

export default Post
