import React,{useEffect,useState} from 'react'

import service from '../appwrite/config.jsx'
import {Container,PostForm } from '../components/index.js'
import {useNavigate,useParams } from 'react-router-dom'

import {useDispatch} from 'react-redux'
function EditPost(){
  const [post,setPost]=useState(null)
  const {slug} =useParams()
  const navigate=useNavigate()
  useEffect(()=>{
    if(slug){
      service.getPost(slug).then((post)=>{
        if(post) setPost(post)
        else navigate('/')
      })
    }
  },[slug,navigate])
  return post ?  (
    <main>
      <div className='py-8'>
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    </main>
  ):null
}

export default EditPost