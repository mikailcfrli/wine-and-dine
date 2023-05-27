/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss';
import Group from '../../../assets/Images/Group.png';

import { Link } from 'react-router-dom';
import location from '../../../assets/Images/location.png';
import logoname from '../../../assets/Images/logo-name.png';
import vector from '../../../assets/Images/Vector.png';

export const Header = () => {
  return (
    <>
      <div className="head">
        <p>
          URGENT DELIVERY IN MOSCOW IS AVAILABLE -<a href="#">DETAILED TERMS AND CONDITIONS</a>
        </p>
      </div>

      <div className="for-header">
        <div className="for-secondheader">
          <div className="logo-side">
            <img src={Group} alt="" className="group" />
            <img src={logoname} alt="" className="logo-name" />
          </div>
          <div className="search-side">
            <input type="search" className="search" />
            <button className="for-search">
              <img src={vector} alt="" className="img-serach" />
            </button>
          </div>
          <div className="personalarea">
            <div className="area1">
              <div className="forregister">
                <Link to={''} className="registeer">
                  Register
                </Link>
              </div>
              <div className="forlogin">
                <Link to={''} className="login">
                  Login
                </Link>
              </div>
            </div>
            <div className="area2">
              <p className="area3">Personal Area</p>
            </div>
          </div>
          <hr />
          <div className="location">
            <div className="up">
              <img src={location} alt="" className="location" />
              <p>Moscow</p>
            </div>
            <div className="down">
              <p className="number">063 658 32 21</p>
            </div>
          </div>
          <hr />
          <div className="for-cart">
            <p className="cart">Cart: 0</p>
            <p className="amount">0 $</p>
          </div>
        </div>
      </div>

      <div className="for-background">
        <div className="container">
          <nav>
            <Link to={'wine'} className="wine">
              Wine
            </Link>
            <Link to={'sparling'} className="wine">
              Sparkling
            </Link>
            <Link to={'whiskey'} className="wine">
              Whiskey
            </Link>
            <Link to={'cognac'} className="wine">
              Cognac
            </Link>
            <Link to={'rom'} className="wine">
              Rom
            </Link>
            <Link to={'vodka'} className="wine">
              Vodka
            </Link>
            <Link to={'cocktails'} className="wine">
              Cocktails
            </Link>
            </nav>
          <hr className="main-hr" />
        </div>
      </div>
    </>
  );
};
