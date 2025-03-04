import React from 'react';
import img from '../assets/images/Macbook-Air-localhost.png';

function Work() {
  return (
    <div className='p-5'>
      <h3>/ Work</h3>

      <div className='d-flex align-items-center align-content-center gap-3'>
        <p>filter :</p>
        <div className='d-flex gap-3'>
          <button className='btn btn-category'>E-commerce</button>
          <button className='btn btn-category'>Chat App</button>
          <button className='btn btn-category'>Admin Dashboard</button>
          <button className='btn btn-category'>E-learning Platform</button>
          <button className='btn btn-category'>landing-page</button>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-3 mt-5'>
        <div className='card w-25'>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">E-commerce</h5>
            <p className="card-text">🛍️ A React e-commerce platform for seamless shopping, featuring intuitive navigation, product browsing, and secure transactions.</p>
            <a href="#" className="btn btn-resume">View</a>
          </div>
        </div>
        <div className='card w-25'>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">E-commerce</h5>
            <p className="card-text">🛍️ A React e-commerce platform for seamless shopping, featuring intuitive navigation, product browsing, and secure transactions.</p>
            <a href="#" className="btn btn-resume">View</a>
          </div>
        </div>
        <div className='card w-25'>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">E-commerce</h5>
            <p className="card-text">🛍️ A React e-commerce platform for seamless shopping, featuring intuitive navigation, product browsing, and secure transactions.</p>
            <a href="#" className="btn btn-resume">View</a>
          </div>
        </div>
        <div className='card w-25'>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">E-commerce</h5>
            <p className="card-text">🛍️ A React e-commerce platform for seamless shopping, featuring intuitive navigation, product browsing, and secure transactions.</p>
            <a href="#" className="btn btn-resume">View</a>
          </div>
        </div>
        
        <div className='card w-25'>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">E-commerce</h5>
            <p className="card-text">🛍️ A React e-commerce platform for seamless shopping, featuring intuitive navigation, product browsing, and secure transactions.</p>
            <a href="#" className="btn btn-resume">View</a>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Work