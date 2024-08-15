import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {Header,Footer} from './components/index.js'
import {logout,login} from './store/authSlice.js'
import { Outlet } from 'react-router-dom'

import './App.css'

export default function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if (userData){
        dispatch(login({userData}))
        
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  
    
     return !loading ? (
       <main>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400 '>
        <div className='w-full block'>
          <Header/>
          {/* Todo-Outlet  */}
          <main>
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
        </main>
     ) :(null)
      
    
  
}
