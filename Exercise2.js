import React, {useEffect, useState} from 'react'

const TextCount=()=>{

const [value, setValue]=useState(0);

useEffect(()=>{
    document.title=(`WhatsApp (${value})`)
}, [value])



return(
    <>
    <h2>Somebody gon' get they ass kicked</h2>
    <button className='btn' onClick={()=>setValue(value+1)}>Add message</button>
    
    </>
)
}

export default TextCount