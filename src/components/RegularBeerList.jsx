import React from 'react';
import PropTypes from 'prop-types';
import RegularBeerEntry from './RegularBeerEntry';

function RegularBeerList(props) {
  let index = 0;
  function returnNewIndex() {
    index++;
    return index;
  }

  function regularBeerListFilter() {
    let filteredList = {};
    for (let key in props.kegList) {
      if (props.kegList[key].onSale == false) {
        filteredList = Object.assign({}, filteredList, {
          [key]: props.kegList[key]
        });
      }
    }
    return filteredList;
  }

  let filteredList = regularBeerListFilter(props.kegList);

  return (
    <div className='list-main'>
      <style jsx>{`
        h2 {
          color: white;
          text-align: center;
          margin 15px;
        }
      `}</style>
      <h2>Kegs On Tap</h2>
      <div>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">AL%</th>
              <th scope='col'>Remaining</th>
              <th scope='col'>Sell</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(filteredList).map(key =>
              <RegularBeerEntry 
                keg={filteredList[key]}
                key={key}
                index={returnNewIndex()}
              />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

RegularBeerList.propTypes = {
  kegList: PropTypes.object.isRequired
};

export default RegularBeerList;