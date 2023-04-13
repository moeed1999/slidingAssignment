import React from 'react'
import './styles.css'

const Home = ({currentPage}) => {
  return (
    <div className='container'>
        <div className='contentContainer'>
            <div className={ currentPage ? `mainText` : 'displayNothing' }>
            <span className='boldText'>symodd</span> is an Agadir based <br/> <span className='boldText'>digital</span> & <span className='boldText'>audiovisual production </span> <br/>agency
            </div>
            <div className='playIcon'>
                <img src={require('../../assets/images/play.png')}
                alt='play'
                />
            </div>
            <div className={ currentPage ? `scrollDownHome` : 'displayNothing' }>
                <img src={require('../../assets/images/scrolldown.png')}
                alt='scroll'
                />
            </div>
        </div>
        
    </div>
  )
}

export default Home