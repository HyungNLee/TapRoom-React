import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <style jsx>{`
        h1 {
          color: white;
          text-align: center;
          margin 10px;
        }
        .homepage-main {
          width: 65%;
          margin: 0 auto;
          margin-top: 7%;
          background: rgba(0, 0, 0, 0.6);
          border: darkgray 1px solid;
          border-radius: 5px;
          color: white;
        }
        img {
          width: 100%;
        }
        p {
          position: relative;
          transform: translate(10%,100%);
          font-size: 28px;
          width: 50%;
          text-shadow:
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
          font-style: italic;
        }
        .btnlink {
          position: relative;
          transform: translate(150%, -500%);
        }
      `}</style>
      <div className='homepage-main'>
        <p>A large selection of quality draft beers on tap.</p>
        <img src='https://mbtskoudsalg.com/images/bar-tap-png.png'/>
        <Link to="/beerlist"><button className='btnlink btn btn-success'>Beer List</button></Link>
      </div>
    </div>
  );
}

export default HomePage;