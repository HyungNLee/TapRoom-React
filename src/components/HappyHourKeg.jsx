import React from 'react';
import PropTypes from 'prop-types';

function HappyHourKeg(props) {
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
    <div className='keg-main'>
      <style jsx>{`
      .progress-bar {
        width: ${props.keg.amount / 124 * 100}%;
        background-color: ${progressBarColor(props.keg.amount)};
      }
      .card {
        margin: 25px;
        background: rgba(0, 0, 0, 0.55);
        border: darkgray 1px solid;
        padding: 2%;
        width: 18rem;
      }
      
      ul, li {
        background: rgba(0, 0, 90, 0.15);
        padding: 2%;  
        color: white;
        text-align: center;
      }
      
      .vertical {
        margin-top: -210px;
        margin-bottom: 150px;
        /* display: inline-block; */
        width: 100%;
        height: 40px;
        -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
        transform: rotate(-90deg);
      }
      .vertical {
        box-shadow: inset 0px 4px 6px #ccc;
      }
      .progress-bar {
        box-shadow: inset 0px 4px 6px rgba(100,100,100,0.6);
      }
      
      .progress {
        position:relative;
        background-color: black;
      }
      .progress-value {
        position:absolute;
        left:0;
        height: 100%;
        width:100%;
        text-align:center;
        z-index:2;
        color:white;
        font-weight: bold;
        font-size: 20px;
        /* Safari */
        -webkit-transform: rotate(90deg);
        /* Firefox */
        -moz-transform: rotate(90deg);
        /* IE */
        -ms-transform: rotate(90deg);
        /* Opera */
        -o-transform: rotate(90deg);
        float: left;
        text-shadow:
          -1px -1px 0 #000,  
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000;
      }
      .btn {
        margin: 3px;
      }
      h5 {
        color: white;
        text-align: center;
      }
    `}</style>
      <div className="card">

        <div>
          <img className="card-img-top" src="http://www.stickpng.com/assets/images/595e5a8070308b1a215b70cc.png" alt="keg picture" />
          <div className="progress vertical">
            <span className='progress-value'>{props.keg.amount}</span>
            <div id="prog-bar" className='progress-bar progress-bar-striped progress-bar-animated' role="progressbar" aria-valuenow={props.keg.amount} aria-valuemin="0" aria-valuemax="124">
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.keg.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Brand: {props.keg.brand}</li>
          <li className="list-group-item">Price: {props.keg.price}</li>
          <li className="list-group-item">AC%: {props.keg.alcoholContent}</li>
          <li className="list-group-item">Pints: {props.keg.amount}</li>
        </ul>
        <div className="card-body">
          <button onClick={handleSellKeg} className="btn btn-primary">Sell Pint</button>
          <button className="btn btn-success">Edit Keg</button>
        </div>
      </div>
    </div>
  );
}

HappyHourKeg.propTypes = {
  keg: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onEditKegAmount: PropTypes.func.isRequired
};

export default HappyHourKeg;