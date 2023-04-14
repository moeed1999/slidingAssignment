import React from 'react'
import './styles.css'

const Services = ({currentPage}) => {
    const dummyProfiles = ['General Manager', 'Production Manager', 'Senior Front-end Developer', 'General Manager']
    return (
      <div className={
        currentPage === 1 ? 'servicesContainer' : currentPage === 0 ?'FadedContainerService' : 'servicesContainerScrolledUp'
        }>
          <div className={currentPage !== 1 && 'displayNothing'}>
              <div className={currentPage === 1 && `servicesText`}>
              <div className='servicesHeading'>WHO <u>WE</u> ARE?</div>
              <div className='servicesDescription'>SYMODD creative Agency / we are a digital creative agency specialized in digital creation. Our main strength is in giving hands to brands express themselves in emotions and digital modern ways.
              <br/>
              We struggle to bring up innovation and growth hacking ideology to create the ultimate digital experience to organizations by putting our hands together with our customers to develop their marketing and communication skills and overcome any impediments that may occur at anytime, at the same time, we make sure that all the process doesnt affect or lessen their DNA in any way.            
              </div>
              </div>
              <div className={`card`}>
                    {dummyProfiles.map((elem,index)=>{
                        return(
                            <div className={ currentPage === 1 && `cardItem transition${index+1}`}>
                        <img 
                        src={require('../../assets/images/dummyImage.png')}
                        alt='profile'
                        />
                        <div className='cardHeading'>SALIM <br/> ES-SBANE</div>
                        <div className='cardSubHeading'>{elem}</div>
                        </div>
                        )
                    })}
              </div>
          </div>
          <div 
          className={currentPage === 1 ? `footerButton` : 'displayNothing'}
          >What we do ?</div>
          
      </div>
    )
}

export default Services