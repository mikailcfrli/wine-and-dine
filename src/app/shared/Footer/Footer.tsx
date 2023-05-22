import './Footer.scss';
import { Link } from 'react-router-dom';
import facebook from '../../../assets/facebook.png';
import insta from '../../../../src/assets/insta.png';
import tg from '../../../assets/tg.png';
import vector2 from '../../../assets/Vector 2.png';
export const Footer = () => {
  return (
    <div className="container">
      <div className="container1">
        <div className="left1">
          <h1 className="h1">SUBSCRIBE TO EMAIL NEWSLETTER</h1>
          <div className="label">
            <label className="email" htmlFor="email">
              E M A I L
            </label>
            <div>
              <input className="label" type="text" id="email" name="email" placeholder="" />
            </div>
          </div>

          <div>
            <button className="send">S E N D</button>
          </div>
          <div className="images">
          <Link to={''}>
            {' '}
              <img className="facebook" src={facebook} alt="" />
              </Link>
            <Link to={''}>
            {' '}
              <img className="insta" src={insta} alt="" />
              </Link>
              <Link to={''}>
            {' '}
              <img className="tg" src={tg} alt="" />
              </Link>
          </div>
        </div>
        <div className="right1">
          <img className="right" src={vector2} alt="" />
        </div>
      </div>

      <div className="container-2">
        <nav className="nav-end1">
          <p className="p1-nav">Shop</p>
          <Link to={''}>
            {' '}
            <ul className="ul-nav">History</ul>
          </Link>
          <Link to={''}>
            {' '}
            <ul className="ul-nav">Michel</ul>
          </Link>
          <Link to={''}>
            {' '}
            <ul className="ul-nav">Values</ul>
          </Link>
          <Link to={''}>
            {' '}
            <ul className="ul-nav">Biodynamics</ul>
          </Link>
          <Link to={''}>
            {' '}
            <p className="p1-nav2">2021 winemill</p>
          </Link>
        </nav>
        <nav className="nav-end1">
          <p className="p1-nav">Shop</p>
          <Link to={''}>
            {' '}
            <ul className="ul-nav">All Wines</ul>
          </Link>
          <Link to={''}>
            <ul className="ul-nav">Single vineyard selection</ul>
          </Link>
          <Link to={''}>
            {' '}
            <p className="p1-nav3">Privacy police </p>
          </Link>
        </nav>
        <nav className="nav-end1">
          <p className="p1-nav">The Wines</p>
          <Link to={''}>
            {' '}
            <ul className="ul-nav">Hermitage in 3D</ul>
          </Link>
          <Link to={''}>
            {' '}
            <ul className="ul-nav">The soul of M. CHAPOUTIER</ul>
          </Link>
        </nav>
        <nav className="nav-end1">
          <p className="p1-nav">Wine Tourism</p>
          <Link to={''}>
            <ul className="ul-nav">Wine tasting services and visits</ul>
          </Link>
          <Link to={''}>
            <ul className="ul-nav">Bike ride</ul>
          </Link>
        </nav>
      </div>
    </div>
  );
};
