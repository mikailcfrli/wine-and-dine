import './HomePage.scss';
import { CardProduct } from '../../app/shared/CardProduct/CardProduct';
import { Special } from './components/Special/Special';

export const HomePage = () => {
  const products = [
    {
      id: 1,
      price: 1125,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: './assets/products/product1.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 2,
      price: 1125,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/product2.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 3,
      price: 1125,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/product3.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 4,
      price: 1125,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: './assets/products/product1.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 5,
      price: 1125,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/product2.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 6,
      price: 1125,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/product3.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 7,
      price: 1125,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/product3.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 8,
      price: 1125,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/product3.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
    {
      id: 9,
      price: 1125,
      title: 'L’ERMITE HERMITAGE',
      flag: '/assets/products/flag-france.png',
      image: '/assets/products/product3.png',
      year: 2009,
      size: 0.75,
      country: 'FRANCE',
      factory: 'M.CHAPOUTIER',
    },
  ];
  return (
    <>
      <Special />
      <div className="grid-box">
        {products.map((product) => (
          <CardProduct
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
