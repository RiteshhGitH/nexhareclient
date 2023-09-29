import React from 'react'
import img1 from './images/car.jpg'
import {Link} from "react-router-dom"
const car = () => {
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
            <h3>Vintage <span class="multiple-text">Cars</span></h3>
            <h1>Roadster</h1>
            <h3><span class="multiple-text">Minting </span>Now</h3>
            <p>Price: 0.80 ETH Tokens</p>
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

export default car
