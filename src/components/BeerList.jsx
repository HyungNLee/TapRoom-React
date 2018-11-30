import React from 'react';
import HappyHourList from './HappyHourList';
import RegularBeerList from './RegularBeerList';
import { v4 } from 'uuid';
import Beer from '../models/Beer';

const masterKegList = {
  [v4()]: new Beer('Original White Ale', 'Hoegaarden', 3.50, .049),
  [v4()]: new Beer('Summer Honey Wheat', 'Blue Moon', 2.75, .052),
  [v4()]: new Beer('Pale Lager', 'Bia Hanoi', 2.5, .042),
  [v4()]: new Beer('Bad Apple', 'Two Town Ciderhoues', 4.25, .105),
  [v4()]: new Beer('Pale Lager', 'Heineken', 1.99, .050),
  [v4()]: new Beer(''),
};

function happyHourKegList(masterList) {
  let filteredList = {};
  for (let key in masterList) {
    if (masterList[key].onSale == true) {
      filteredList = Object.assign({}, filteredList, {
        key: masterList[key]
      })
      filteredList.push(keg);
    }
  };
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