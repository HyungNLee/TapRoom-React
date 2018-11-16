import React from 'react';
import PropTypes from 'prop-types';

// Color the progress bar. Doesn't work right now because I need to figure out how to dynamically change the CSS values using a function for progress bar width.
function progressBarClass(selectedKeg) {
  let bar =  document.getElementById('');
  if (selectedKeg.amount <= 10) {
    return 'bg-danger';
  } else if (selectedKeg.amount <= 25) {
    return 'bg-warning';
  } else if (selectedKeg.amount <= 99) {
    return 'bg-success';
  } else if (selectedKeg.amount <= 124) {
    return 'bg-primary';
  }
}

function HappyHourKeg(props) {
  return (
    <div className='keg-main'>
      <style jsx>{`
      .progress-bar {
        width: 100%;
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
          <button className="btn card-link">Sell Pint</button>
          <button className="btn">Edit Keg</button>
        </div>
      </div>
    </div>
  );
}

HappyHourKeg.propTypes = {
  keg: PropTypes.object.isRequired
};

export default HappyHourKeg;