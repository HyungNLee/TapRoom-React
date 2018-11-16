import React from 'react';
import PropTypes from 'prop-types';

function RegularBeerList(props) {
  return (
    <div className='list-main'>
      <style jsx>{`
        h2 {
          color: white;
          text-align: center;
          margin 15px;
        }
        .progress-bar {
          width: 100%;
        }
        table, h2 {
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
        
        i {
          color: red;
          margin: 0;
          padding: 0;
        }
        td {
          text-shadow:
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
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
            {props.kegList.map((keg, index) =>
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{keg.name}</td>
                <td>{keg.brand}</td>
                <td>{keg.price}</td>
                <td>{keg.alcoholContent}</td>
                <td>
                  <div className="progress">
                    <span className='progress-value'>{keg.amount} pints</span>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                      aria-valuenow={keg.amount} aria-valuemin="0" aria-valuemax="124" >
                    </div>
                  </div>
                </td>
                <td><button>Sell</button></td>
                <td><button>Edit</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

RegularBeerList.propTypes = {
  kegList: PropTypes.array.isRequired
};

export default RegularBeerList;