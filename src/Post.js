import NewPost from './NewPost'
import Voter from './Voter'
import React,{useState} from 'react'

const Post = ({username, post, depth}) => {
    const [isReplying, setIsReplying] = useState(false)
    const [replies, setReplies] = useState([])
    const updateReplies = (nameInput, post) => {
        const updated = replies.concat({name: nameInput, text: post, depth: depth + 1})
        setIsReplying(false)
        setReplies(updated)
    }
        return <div className={`card depth-${depth >= 2 ? 2 : 1}`}>
        <table>
            <tbody>
            <tr>
                <td style={{width: "95%"}}>
                    <h5 className="username">{username}</h5>
                    <div style={{padding: "10px"}}>{post}</div>
                </td>
                <td style={{width: "5%"}}>
                    <Voter />
                </td>
            </tr>
            </tbody>
        </table>
        {depth < 3 ? <button id="reply-btn" className="btn btn-light" onClick={() => setIsReplying(!isReplying)}>Reply</button> : <></>}
        {isReplying ? <NewPost updatePosts={updateReplies} isMainPost={false} defaultText={`@${username} `}/> : <></>}
        {replies.map(post => <Post key={replies.indexOf(post)} username={post.name} post={post.text} depth={post.depth}/>)}
    </div>
}

export default Post