import React, {useState} from "react"


export default function Main() {
    
    const [lightMode, setLightMode ] = React.useState(false) 
    
    /*function changeImage() {
        alert('You clicked me!')
        let displayImage = document.getElementById('img1')
        if(displayImage.match('./lightcover.png')){
            displayImage = './darkcover.png'
        }
        else{
            displayImage = './lightcover1.png'
        }}*/
    return (
    
    <div className="HeroSPageV2">
        <div className="Card">
            <div className="TextAnimation">
                <div className="Text">
                  <div className="HiIMMichelle">Hi! I’m Michelle! </div>
                  <div className="AProductDesigner" ><span >a</span><span> </span><span>Product Designer<br/></span></div>
                  <div className="BodyText">creating digital experiences that simplify, uplift, and nurture human connection.</div>
                </div>
                <img className="Furniture" id="img1" 
                onClick={() => setLightMode(prevMode => !prevMode)}
                src={require(lightMode ? "./lightcover.png" : "./darkcover.png")} style={{cursor: 'url(cursor.png), auto'}}/>
        </div>
    <div className="FeaturedProjects">Featured Projects</div>
  </div>
</div>

)}