import React from 'react';
import { Link } from 'react-router-dom';
{/* <Link to="/newticket">Create Ticket</Link> */}

function Header() {
  return (
    <div>
      <style jsx>{`
        h1 {
          color: white;
          text-align: center;
        }
        .title {
          margin 10px;
          text-align: center;
        }
      `}</style>
      <div className="title">
        <h1>Welcome to the Tap Room</h1>
        <Link to="/"><button className='btn btn-info'>Home</button></Link>
      </div>
    </div>
  );
}

export default Header;