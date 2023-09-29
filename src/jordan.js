import React from 'react'
import img1 from './images/about.jpg'
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
        <h3>Air Jordan <span className="multiple-text">1 Mid SE</span></h3>
        <h1>Zen Master</h1>
        <h3><span className="multiple-text">Minting </span>Now</h3>
        <p>Price: 0.18 ETH Tokens</p>
        <br/>
        <br/>
        <a href="#" className="btn">Mint</a>
      </div>

      <div class="home-img">
        <img src={img1}/>
      </div>

    </section>
  )
}

export default jordan 