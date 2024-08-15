import React,{useState,useEffect} from 'react'
import service from '../appwrite/config'
import {Container,PostCard} from '../components/index.js'

function Home(){
  const [posts,setPosts]=React.useState([])
  useEffect(()=>{
    service.getPosts().then((res)=>{
      if(res){
        setPosts(res.documents)
      }
    })
  },[])
  if(posts.length===0){
    return (
      <main>
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
        </main>
    )
  }
  return (
    <main>
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
      </main>
  )
 
}

export default Home