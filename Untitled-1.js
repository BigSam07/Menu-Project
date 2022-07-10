/*    
return(
    <div style={{backgroundColor:"white", margin:"auto", height:"500px", width:"500px"}}>
         <img src={img} alt="" style={{height:"200px", width:"200px", borderRadius:"50%", marginTop:"10px"}}/>
         <h2>{name}</h2>
         <p style={{color:"var(--clr-primary-5)"}}>{position.toUpperCase()}</p>
         <p>{quote}</p>
         <button className="btn" onClick={()=>count>0?setCount(count-1):setCount(Data.length-1)}>Prev</button>
        <button className="btn" onClick={()=>count<Data.length-1?setCount(count +1):setCount(0)}>Next</button>
    </div>
    )
}


    return(
        <Review {...Data[count]}/>
    )
}*/