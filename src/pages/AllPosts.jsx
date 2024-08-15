import React,{useEffect,useState} from 'react'

import {useSelector} from "react-redux"
import service from '../appwrite/config.jsx'
import {Container,PostForm } from '../components/index.js'
import {PostCard} from '../components/index.js'
function AllPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {}, [])
  service.getPosts([]).then((posts) => {
      if (posts) {
          setPosts(posts.documents)
      }
  })
return (
  <div className='w-full py-8'>
      <Container>
          <div className='flex flex-wrap'>
              {posts.map((post) => (
                  <div key={post.$id} className='p-2 w-1/4'>
                      <PostCard {...post} />
                  </div>
              ))}
          </div>
          </Container>
  </div>
)
}

export default AllPosts