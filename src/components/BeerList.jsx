import React from 'react';
import HappyHourList from './HappyHourList';
import RegularBeerList from './RegularBeerList';

const masterKegList = [
  {
    name: 'Original White Ale',
    brand: 'Hoegaarden',
    price: 3.50,
    alcoholContent: .049,
    onSale: false,
    amount: 124
  },
  {
    name: 'Summer Honey Wheat',
    brand: 'Blue Moon',
    price: 2.75,
    alcoholContent: .052,
    onSale: false,
    amount: 124
  },
  {
    name: 'Pale Lager',
    brand: 'Bia Hanoi',
    price: 2.5,
    alcoholContent: .042,
    onSale: true,
    amount: 124
  },
  {
    name: 'Bad Apple',
    brand: 'Two Town Ciderhouse',
    price: 4.25,
    alcoholContent: .105,
    onSale: false,
    amount: 124
  },
  {
    name: 'Pale Lager',
    brand: 'Heineken',
    price: 1.99,
    alcoholContent: .050,
    onSale: true,
    amount: 124
  }
];

function happyHourKegList(masterList) {
  let filteredList = [];
  masterList.forEach(keg => {
    if (keg.onSale == true) {
      filteredList.push(keg);
    }
  });
  return filteredList;
}

function BeerList() {
  return (
    <div className='beerlist-body'>
      <style jsx>{`

      `}</style>
      <HappyHourList kegList={happyHourKegList(masterKegList)}/>
      <RegularBeerList kegList={masterKegList}/>
    </div>
  );
}

export default BeerList;