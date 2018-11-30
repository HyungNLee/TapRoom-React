import React from 'react';
import HappyHourList from './HappyHourList';
import RegularBeerList from './RegularBeerList';
import { v4 } from 'uuid';
import Beer from '../models/Beer';

const masterKegList = {
  [v4()]: new Beer('Original White Ale', 'Hoegaarden', 3.50, .049, true),
  [v4()]: new Beer('Summer Honey Wheat', 'Blue Moon', 2.75, .052, true),
  [v4()]: new Beer('Pale Lager', 'Bia Hanoi', 2.5, .042, false),
  [v4()]: new Beer('Bad Apple', 'Two Town Ciderhoues', 4.25, .105, false),
  [v4()]: new Beer('Pale Lager', 'Heineken', 1.99, .050, false),
};

function BeerList() {
  return (
    <div className='beerlist-body'>
      <style jsx>{`

      `}</style>
      <HappyHourList kegList={masterKegList}/>
      <RegularBeerList kegList={masterKegList}/>
    </div>
  );
}

export default BeerList;