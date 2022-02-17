import React, { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'

const App = () => {
  const [posts, setPosts] = useState([])
  const updatePosts = (nameInput, post) => {
    const updated = posts.concat({ name: nameInput, text: post, depth: 1 })
    setPosts(updated)
  }
  return (
    <>
      <h1 style={{ textAlign: 'center', padding: '20px 0 20px 0' }}>🎉 CIS 197 Community 🎉</h1>
      <NewPost updatePosts={updatePosts} isMainPost />
      {posts.map(post => <Post key={posts.indexOf(post)} username={post.name} post={post.text} depth={post.depth} />)}
    </>
  )
}

export default App
