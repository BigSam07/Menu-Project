import React, {useState} from "react";

const Data=[
    {name:"Buttermilk Pancakes", img:"https://react-projects-5-menu.netlify.app/images/item-1.jpeg", info:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed", price:"$15", category:"breakfast"},
    {name:"Diner Double", img:"https://react-projects-5-menu.netlify.app/images/item-2.jpeg", info:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats", price:"$15", category:"lunch"},
    {name:"Godzilla Milkshake", img:"https://react-projects-5-menu.netlify.app/images/item-3.jpeg", info:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral", price:"$15", category:"shakes"},
    {name:"Country Delight", img:"https://react-projects-5-menu.netlify.app/images/item-4.jpeg", info:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,", price:"$15", category:"breakfast"},
    {name:"Egg Attack", img:"https://react-projects-5-menu.netlify.app/images/item-5.jpeg", info:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up", price:"$15", category:"lunch"},
    {name:"Oreo Dream", img:"https://react-projects-5-menu.netlify.app/images/item-6.jpeg", info:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday", price:"$15", category:"shakes"},
    {name:"Bacon Overflow", img:"https://react-projects-5-menu.netlify.app/images/item-7.jpeg", info:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird", price:"$15", category:"breakfast"},
    {name:"American Classic", img:"https://react-projects-5-menu.netlify.app/images/item-8.jpeg", info:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut", price:"$15", category:"lunch"},
    {name:"Quarantine Buddy", img:"https://react-projects-5-menu.netlify.app/images/item-9.jpeg", info:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing", price:"$15", category:"shakes"},
]

const Menu=()=>{

const [array, setArray]=useState(Data);

const MenuItem=({name,img,info,price, category})=>{
    return( <div style={{background:"green", width:"30%", height:"30%"}}>
        <img alt="" src={img} style={{height:"200px", width:"100%", float:"left"}}/>
        <h4 style={{}}>{name}</h4>
        <h5 style={{}}>{price}</h5>
        <p style={{}}>{info}</p>
            </div>
    )
}
    return(<section >
       <button className="btn" onClick={()=>setArray(Data)}>All</button>
       <button className="btn" onClick={()=>setArray(Data.filter((item)=>item.category==='breakfast'))}>Show breakfast</button>
       <button className="btn" onClick={()=>setArray(Data.filter((item)=>item.category==='lunch'))}>Show lunch</button>
       <button className="btn" onClick={()=>setArray(Data.filter((item)=>item.category==='shakes'))}>Show shakes</button>
      <div style={{marginTop:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap"}}>{array.map((item)=><MenuItem {...item}/>)}</div>
           </section>
    )
}
export default Menu