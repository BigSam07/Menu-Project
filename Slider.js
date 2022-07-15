import React, {useState} from "react";

const Data=[
    {img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg", name:"Maria Ferguson", position:"Office manager", quote:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",},
    {img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg", name:"John Doe", position:"Regular guy", quote:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",},
    {img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg", name:"Peter Smith", position:"Product designer", quote:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",},
    {img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg", name:"Susan Andersen", position:"The boss", quote:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",}]

const greaterThan='>'
const lessThan='<'

const Slider=()=>{

const [count, setCount]=useState(0)

setTimeout(()=>{
                if(count<Data.length-1)
                {setCount(count+1)}
                if(count===Data.length-1){setCount(0)}}, 5000)


  const handleNext=()=>{
    if(count<Data.length-1){
    
      setCount(count+1)
    }
    if(count===Data.length-1){(setCount(0))}
  }

  const handlePrevious=()=>{
    if(count>0){
        setCount(count-1)
        
    }
    if(count===0){
        setCount(Data.length-1)
    }
  }

   const SliderDisplay=({img,name,position,quote})=>{

    return(
    <section style={{height:"500px", width:"500px"}}>
        <img alt='' src={img} style={{height:"40%", width:"40%", borderRadius:"50%",}}/>
        <h3>{name}</h3>
        <button className="btn" onClick={handlePrevious} style={{display:"inline", position:"absolute", top:"285px",right:"1300px"}}>{lessThan}</button>
        <h4 style={{display:"inline"}}>{position}</h4>
        <button className="btn" onClick={handleNext} style={{display:"inline", position:"absolute", top:"285px", left:"620px"}}>{greaterThan}</button>
        <p>{quote}</p>
    </section>
    )
}


return( <>
       <SliderDisplay {...Data[count]}/>
       </>
       )
   
}

export default Slider;