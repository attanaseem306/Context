'use client'
import { useContext } from 'react';
import { user } from './context_api/Provider'
import './globals.css'

export default function Home() {
  const {login , setLogin} = useContext(user);
  console.log(login);
  return (
    <>
      <div className='flex-wrap flex  justify-evenly'>
        <div className=' rounded-md p-3 mt-5 text-white bg-slate-800'>
          <h1>First Div</h1>
          <h1>First Div</h1>
          <h1>First Div</h1>
        </div>
        <div className=' rounded-md p-3 mt-5 text-white  bg-slate-800' >
          <h1>Second Div</h1>
          <h1>Second Div</h1>
          <h1>Second Div</h1>
        </div>
        <button>{login}</button>
      </div>
    </>
  )
}
