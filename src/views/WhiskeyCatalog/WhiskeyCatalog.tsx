import './WhiskeyCatalog.scss';
import { CardProduct2 } from './CardProduct2/CardProduct2';
import { Carousel } from '../../app/shared/Crousel/Carousel';
export const WhiskeyCatalog = () => {
  const products = [
    {
      id: 1,
      price: 1150,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: './assets/products/whiskey1.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 2,
      price: 1300,
      title: 'LES GREFFIEUX',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/whiskey2.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 3,
      price: 1580,
      title: 'LEMEAL GREFFIEUX',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/whiskey3.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 4,
      price: 1345,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: './assets/products/whiskey4.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 5,
      price: 1300,
      title: 'LES GREFFIEUX',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/whiskey4.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 6,
      price: 1705,
      title: 'LEMEAL GREFFIEUX',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/whiskey7.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 7,
      price: 1154,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/whiskey6.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 8,
      price: 4565,
      title: 'LES GREFFIEUX',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/whiskey3.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 9,
      price: 1145,
      title: 'LEMEAL GREFFIEUX',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/whiskey1.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
  ];
  return (
    <>
      <Carousel />
      <div className="grid-box">
        {products.map((product) => (
          <CardProduct2
            key={`product-${product.id}`}
            price={product.price}
            title={product.title}
            flag={product.flag}
            image={product.image}
            year={product.year}
            size={product.size}
            country={product.country}
            factory={product.factory}
          />
        ))}
      </div>
    </>
  );
};




