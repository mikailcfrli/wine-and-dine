import "./Footer.scss";
import insta from'../../../../src/assets/insta.png'
import tg from '../../../assets/tg.png'
import vector2 from '../../../assets/Vector 2.png'
import facebook from '../../../assets/facebook.png'
export const Footer = () => {
    return (
      <div className="container1">
<div className="container">
    <div className="left1">
<h1 className="h1">S U B S C R I B E T O E M A I L   N E W S L E T T E R</h1>
<div className="label">
<label className="email" htmlFor="email">E M A I L</label>
<input className="label" type="text" id="email" name="email" placeholder=""/></div> 

<div ><button className="send">S E N D</button></div>
<div className="images">
<a href="#"><img className="facebook" src={facebook}/></a>
<a href="#" > <img className="insta" src={insta}/></a>
<a href="#" > <img className="tg" src={tg}/></a>

</div>
    </div>
    <div className="right1">
        <img className="right" src={vector2}/>

    </div>

</div>

   

<div className="container-2">
    
   <nav className="nav-end1" >
<h1 className="h1-nav">Shop</h1>
<ul  className="ul-nav">History</ul>
<ul  className="ul-nav">Michel</ul>
<ul  className="ul-nav">Values</ul>
<ul  className="ul-nav">Biodynamics</ul>
<h1 className="h1-nav2">2021  winemill</h1>
   </nav>
   <nav className="nav-end1" >
<h1 className="h1-nav">Shop</h1>
<ul  className="ul-nav">All Wines</ul>
<ul  className="ul-nav">Single vineyard selection</ul>
<h1 className="h1-nav3">Privacy police </h1>
   </nav>
   <nav className="nav-end1" >
<h1 className="h1-nav">The Wines</h1>
<ul  className="ul-nav" >Hermitage in 3D</ul>
<ul  className="ul-nav">The soul of M. CHAPOUTIER</ul>
   </nav>
   <nav className="nav-end1" >
<h1 className="h1-nav">Wine Tourism</h1>
<ul  className="ul-nav">Wine tasting services and visits</ul>
<ul  className="ul-nav">Bike ride</ul>
   </nav>
    </div>




</div>
    );
}