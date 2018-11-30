import React from 'react';
import PropTypes from 'prop-types';
import HappyHourKeg from './HappyHourKeg';

function HappyHourList(props) {

  function happyHourKegList() {
    let filteredList = {};
    for (let key in props.kegList) {
      if (props.kegList[key].onSale == true) {
        filteredList = Object.assign({}, filteredList, {
          [key]: props.kegList[key]
        });
      }
    }
    return filteredList;
  }

  let filteredList = happyHourKegList(props.kegList);

  return (
    <div className='happyhour-main'>
      <style jsx>{`
        h2 {
          color: white;
          text-align: center;
          margin 15px;
        }
      `}</style>
      <h2>Happy Hour Kegs</h2>
      <div className="row">
        {Object.keys(filteredList).map(key =>
          <HappyHourKeg keg={filteredList[key]}
            key={key}
            id={key} 
            onEditKegAmount={props.onEditKegAmount}
          />
        )};
      </div>
    </div >
  );
}

HappyHourList.propTypes = {
  kegList: PropTypes.object.isRequired,
  onEditKegAmount: PropTypes.func.isRequired
};

export default HappyHourList;