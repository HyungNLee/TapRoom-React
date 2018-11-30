import React from 'react';
import PropTypes from 'prop-types';

function RegularBeerEntry(props) {
  function progressBarColor(amount) {
    if (amount <= 10) {
      return 'red';
    } else if (amount <= 25) {
      return 'orange';
    } else if (amount <= 99) {
      return 'yellow';
    } else if (amount <= 124) {
      return 'green';
    }
  }

  function handleSellKeg() {
    let newAmount = props.keg.amount - 1;
    props.onEditKegAmount(props.id, newAmount);
  }

  return (
    <tr>
      <style jsx>{`
        .progress-bar {
          width: ${props.keg.amount * 124 / 100}%;
          background-color: ${progressBarColor(props.keg.amount)}
        }
        tr {
          color: white;
          text-align: center;
       }
      
        .progress {
          position:relative;
          background-color: black;    
        }
        .progress-value {
          position:absolute;
          left:0;
          width:100%;
          text-align:center;
          z-index:2;
          color:white;
          font-weight: bold;
        }
        td {
          text-shadow:
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
        }
      `}</style>
      <th scope="row">{props.index}</th>
      <td>{props.keg.name}</td>
      <td>{props.keg.brand}</td>
      <td>{props.keg.price}</td>
      <td>{props.keg.alcoholContent}</td>
      <td>
        <div className="progress">
          <span className='progress-value'>{props.keg.amount} pints</span>
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
            aria-valuenow={props.keg.amount} aria-valuemin="0" aria-valuemax="124" >
          </div>
        </div>
      </td>
      <td><button onClick={handleSellKeg} className='btn btn-primary'>Sell</button></td>
      <td><button className='btn btn-success'>Edit</button></td>
    </tr>
  );
}

RegularBeerEntry.propTypes = {
  keg: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onEditKegAmount: PropTypes.func.isRequired
}

export default RegularBeerEntry;