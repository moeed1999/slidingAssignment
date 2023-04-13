import React from 'react'
import './styles.css'

const Team = ({currentPage}) => {
    return (
        <div className='teamContainer'>
            <div className='teamContentContainer'>
            <div style={{
                display:'flex',
                justifyContent:'center'
                }}>
            <div>
                <img src={require('../../assets/images/details.png')}
                alt='details'
                />
            </div>
            <div className={currentPage ? 'teamHeading' : 'displayNothing'}>
                AUDIOVISUAL
            </div>
            <div className={currentPage ? 'cameraImage' : 'displayNothing'}>
                <img src={require('../../assets/images/camera.png')}
                alt='camera'/>
            </div>
            <div 
                className={currentPage ? 'cameraDetails' : 'displayNothing'}
                >
                   <div className='teamDetailsText'>Details</div> 
                   <img 
                   src={require('../../assets/images/plus.png')}
                   style={{
                    width:20,height:20,
                    marginTop:6,opacity:0.3
                }}
                    alt='details'
                   />
                </div>
            </div>

                <div 
                    className={currentPage ? `footerButtonTeam` : 'displayNothing'}
                    >web</div>
            </div>
        </div>
      )
}

export default Team