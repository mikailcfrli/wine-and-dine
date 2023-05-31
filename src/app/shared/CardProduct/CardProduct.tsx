import './CardProduct.scss';
import background from './black-background.png';
interface CardProductProps {
  price: number;
  title: string;
  image: string;
  flag: string;
  year: number;
  size: number;
  country: string;
  factory: string;
}
export const CardProduct = (props: CardProductProps) => {
  return (
    <div className="product-card">
      <div className="black-frame">
        <img src={background} alt="nooo" />
        <img className="glass" src={props.image} alt="" />
      </div>
      <p className="title-text">{props.title}</p>
      <span className="year-size">
        {props.year} / {props.size} l
      </span>
      <div className="origin-div">
        <img src={props.flag} alt="" />
        <span className="origin">
          {' '}
          {props.country} / {props.factory}
        </span>
      </div>
      <div className="product-card-flex">
        <div>
          <p className="brown-text">PRICE FOR 1</p>
          <p className="price-text">{props.price} $</p>
        </div>
        <button className="card-button">TO CARD</button>
      </div>
    </div>
  );
};
