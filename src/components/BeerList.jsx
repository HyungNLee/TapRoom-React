import React from 'react';
import HappyHourList from './HappyHourList';
import RegularBeerList from './RegularBeerList';

const masterKegList = [
  {
    title: "Original White Ale",
    brand: "Hoegaarden",
    price: 3.50,
    alcoholContent: .049,
    onSale: false,
    amount: 124
  },
  {
    title: "Summer Honey Wheat",
    brand: "Blue Moon",
    price: 2.75,
    alcoholContent: .052,
    onSale: false,
    amount: 124
  },
  {
    title: "Pale Lager",
    brand: "Bia Hanoi",
    price: 2.5,
    alcoholContent: .042,
    onSale: true,
    amount: 124
  },
  {
    title: "Bad Apple",
    brand: "Two Town Ciderhouse",
    price: 4.25,
    alcoholContent: .105,
    onSale: false,
    amount: 124
  },
  {
    title: "Pale Lager",
    brand: "Heineken",
    price: 1.99,
    alcoholContent: .050,
    onSale: true,
    amount: 124
  }
];

function BeerList() {
  return (
    <div className='beerlist-body'>
      <style jsx>{`

      `}</style>
      <HappyHourList />
      <RegularBeerList />
    </div>
  );
}

export default BeerList;