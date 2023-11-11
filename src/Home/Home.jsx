import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
       <div className='container1'>
        <h3 style={{ fontSize: "25px", color: "blue", borderBottom: "2px solid whitesmoke" }}>Calculator</h3>
       <Link to='/Calculator'> <button className='btn'>Calculator</button></Link>
        </div>
        <div className='container1'>
        <h3 style={{ fontSize: "25px", color: "blue", borderBottom: "2px solid whitesmoke" }}>Slider</h3>
      <Link to='/Slider'> <button className='btn'>Slider</button></Link>
        </div>
        </div>
  )
}

export default Home
