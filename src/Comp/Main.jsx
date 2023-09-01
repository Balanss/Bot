import React , {useEffect,useState} from 'react'
import Functions from './Functions'
import { auth, fs,db } from '../Firebase'
import {collection,deleteDoc,doc,updateDoc} from "firebase/firestore";

export default function Main() {
const [name,setName] = useState([])
const[middle,setMiddle] = useState([])





  return (
    <div className='w-1/2'>

<Functions name={name} setName={setName} setMiddle={setMiddle} />

<section className='mt-10 mb-10 ml-5 text-white drop-shadow-xl ' >
{name.map((x,id) => (
<h1 className='text-6xl  drop-shadow-xl' key={id}> Hello, {x.Name === 0 ? '':x.Name} </h1> 
))}
</section>

<br/>
<hr className='w-[50vw] border-yellow-500 border-b-4'/>

<section className='mt-10 mb-10 ml-5 text-white drop-shadow-xl'>
 {middle.map((x,id) => (

<div key={id} className='text-2xl'>
<li className=' drop-shadow-xl'>{x.Name} </li>

<li className=' drop-shadow-xl'>{x.Location}</li>

<li className=' drop-shadow-xl'>{x.description}</li>



</div>


))}   
</section>



    </div>
  )
}
