import React, {useState} from 'react';

// Storage
const Data=[{name:"Bertie Yates", age:'29'}, {name:"Hester Hogan", age:'32'},
{name:"Larry Little", age:'36'},{name:"Sean Walsh", age:'34'},
  {name:"Lola Gardner", age:'29'},]

// Rendering


const Birthday=()=>{
  
  const [item, setItem]=useState(Data)
return<>
       
       {item.map((item)=><Birthdays {...item}/>) }
             
        <button className='btn' style={{marginBottom:'50px'}} onClick={()=>setTimeout(()=>setItem([]), 3000)}>Clear</button></>
        }





//Set-up
const Birthdays=({name, age})=>
<div className="item">
<h1>{name}</h1>
<h1>{age}</h1>
</div>





export default Birthday