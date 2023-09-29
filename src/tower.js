import React from 'react'
import img2 from './images/nyx-towers.jpg'
import {Link} from "react-router-dom"
const jordan = () => {
  const backbr = {
    position: 'absolute',
    top: '50px',
    left: '50px',
  };
    
  return (
    <section className="home" id="home">
      <div style={backbr}>
      {/* <a href="#" className="btn">Back</a> */}
        <Link to="/" className="btn"> Back </Link>
      </div>
      <div className="home-content">
      <h3>Real <span class="multiple-text">Estate</span></h3>
            <h1>NXY Towers</h1>
            <h3><span class="multiple-text">Minting </span>Now</h3>
            <p>Price: 0.99 ETH Tokens</p>
        <br/>
        <br/>
        <a href="#" className="btn">Mint</a>
      </div>

      <div class="home-img">
        <img src={img2}/>
      </div>

    </section>
  )
}

export default jordan 


