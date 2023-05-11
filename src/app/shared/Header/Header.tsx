import "./Header.scss";
import Group from "../../../assets/Images/Group.png";
import logoname from "../../../assets/Images/logo-name.png";
import vector from "../../../assets/Images/Vector.png";
import location from "../../../assets/Images/location.png";
import specialwrite from "../../../assets/Images/Special Offer.png";
import arrow from "../../../assets/Images/Arrow 1.png";
import arrow2 from "../../../assets/Images/Arrow 2.png";

export const Header = () => {
  return (
    <>
      <div className="head">
        <p>
          URGENT DELIVERY IN MOSCOW IS AVAILABLE -
          <a href="#">DETAILED TERMS AND CONDITIONS</a>
        </p>
      </div>

      <div className="for-header">
        <div className="for-secondheader">
          <div className="logo-side">
            <img src={Group} className="group" />
            <img src={logoname} className="logo-name" />
          </div>
          <div className="search-side">
            <input type="search" className="search" />
            <button className="for-search">
              <img src={vector} className="img-serach" />
            </button>
          </div>
          <div className="personalarea">
            <div className="area1">
              <div className="forregister">
                <a href="#" className="register">
                  Register
                </a>
              </div>
              <div className="forlogin">
                <a href="#" className="login">
                  Login
                </a>
              </div>
            </div>
            <div className="area2">
              <p className="area3">Personal Area</p>
            </div>
          </div>
          <hr />
          <div className="location">
            <div className="up">
              <img src={location} className="location" />
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
          <div className="wines">
            <a href="#" className="wine">
              Wine
            </a>
            <a href="#" className="wine">
              Sparkling
            </a>
            <a href="#" className="wine">
              Whiskey
            </a>
            <a href="#" className="wine">
              Cognac
            </a>
            <a href="#" className="wine">
              Armagnac
            </a>
            <a href="#" className="wine">
              Rom
            </a>
            <a href="#" className="wine">
              Vodka
            </a>
            <a href="#" className="wine">
              Liqueur
            </a>
            <a href="#" className="wine">
              Cocktails
            </a>
            <a href="#" className="wine">
              Delicacy
            </a>
          </div>
          <hr className="main-hr" />
          <div className="picture-carusel">
            <div className="background-first">
              <div className="for-2writes">
                <div className="empty">
                  <button className="button-arrow">
                    <img src={arrow} className="left-arrow" />
                  </button>
                </div>
                <div className="second-div">
                  <div className="for-image">
                    <img src={specialwrite} className="special-write" />
                  </div>

                  <p className="background-p">
                    PICHON LONGUEVILLE
                    <br /> COSMETESSE DE LALANDE{" "}
                  </p>
                  <a href="#" className="for-order">
                    ORDER WINE
                  </a>
                </div>
                <div className="empty">
                  <button className="button-arrow">
                    <img src={arrow2} className="arrow2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="for-picturesss">
            <button className="for-foto1">
              <div className="div-for-foto">
                <p className="p1-for-foto">ON THE TERRITORY OF BORDEAUX</p>
                <p className="p2-for-foto">WINE BRANDING</p>
              </div>
            </button>
            <button className="for-foto2">
              <div className="div-for-foto">
                <p className="p1-for-foto">WHAT MAKES US SPECIAL?</p>
                <p className="p2-for-foto">INTERVIEW WITH A SOMMELIE</p>
              </div>
            </button>
            <button className="for-foto3">
              <div className="div-for-foto">
                <p className="p1-for-foto">WITH INTERESTING INGREDIENTS</p>
                <p className="p2-for-foto">SIGNATURE COCKTAILS</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
