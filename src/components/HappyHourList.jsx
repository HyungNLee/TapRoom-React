import React from 'react';
import PropTypes from 'prop-types';
import HappyHourKeg from './HappyHourKeg';

function HappyHourList(props) {
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
        {props.kegList.map((keg, index) =>
          <HappyHourKeg keg={keg}
          key={index} />
          )};
      </div>
    </div >
  );
}

HappyHourList.propTypes = {
  kegList: PropTypes.array.isRequired
}

export default HappyHourList;