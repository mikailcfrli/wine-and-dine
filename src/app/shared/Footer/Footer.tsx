import "./Footer.scss";
import insta from'../../../../src/assets/insta.png'
import tg from '../../../assets/tg.png'
import vector2 from '../../../assets/Vector 2.png'
import facebook from '../../../assets/facebook.png'
export const Footer = () => {
    return (
      
<div className="container">
    <div className="left1">
<h1 className="h1">SUBSCRIBE TO EMAIL NEWSLETTER</h1>
<div className="label">
<label className="email" htmlFor="email">Email</label>
<input type="text" id="email" name="email" placeholder=""/> 
<button className="send">Send</button>
<div className="images">
<a href="#"><img className="facebook" src={facebook}/></a>
<img className="insta" src={insta}/>
<img className="tg" src={tg}/>
</div>
</div>
    </div>
    <div className="right1">
        <img className="right" src={vector2}/>

    </div>
</div>
   
    );
}