import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <div className='mainContainer fixedTopPosition'>
      <img 
      src={require('../../assets/images/logo.png')}
      style={{opacity:0.5}}
      />
      <div className='headerListContainer'>
        <div className='headerListItem'>Home</div>
        <div className='headerListItem'>Team</div>
        <div className='headerListItem'>Services</div>
      </div>
    </div>
  )
}

export default Header