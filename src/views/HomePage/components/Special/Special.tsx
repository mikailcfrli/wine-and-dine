import './Special.scss';
import { Link } from 'react-router-dom';
import arrow from '../../../../assets/Images/Arrow 1.png';
import arrow2 from '../../../../assets/Images/Arrow 2.png';
import specialwrite from '../../../../assets/Images/Special Offer.png';
export const Special = () => {
  return (
    <>
      <div className="container">
        <div className="picture-carusel">
          <div className="background-first">
            <div className="for-2writes">
              <div className="empty">
                <button className="button-arrow">
                  <img src={arrow} alt="" className="left-arrow" />
                </button>
              </div>
              <div className="second-div">
                <div className="for-image">
                  <img src={specialwrite} alt="" className="special-write" />
                </div>

                <p className="background-p">
                  PICHON LONGUEVILLE
                  <br />
                </p>
                <Link to={''} className="for-order">
                  ORDER WINE
                </Link>
              </div>
              <div className="empty">
                <button className="button-arrow">
                  <img src={arrow2} alt="" className="arrow2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="for-picturesss">
          <div className="for-foto1">
            <div className="div-for-foto">
              <p className="p1-for-foto">ON THE TERRITORY OF BORDEAUX</p>
              <p className="p2-for-foto">WINE BRANDING</p>
            </div>
          </div>
          <div className="for-foto2">
            <div className="div-for-foto">
              <p className="p1-for-foto">WHAT MAKES US SPECIAL?</p>
              <p className="p2-for-foto">INTERVIEW WITH A SOMMELIE</p>
            </div>
          </div>
          <div className="for-foto3">
            <div className="div-for-foto">
              <p className="p1-for-foto">WITH INTERESTING INGREDIENTS</p>
              <p className="p2-for-foto">SIGNATURE COCKTAILS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
