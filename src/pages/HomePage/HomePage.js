import "./Home.css"
import Button from '../../components/Button/Button'
import Spacex1 from '../../assets/images/Spacex1.png';
import Spacex2 from '../../assets/images/Spacex2.png';
import Spacex3 from '../../assets/images/Spacex3.png';
import Spacex4 from '../../assets/images/Spacex4.png';

function HomePage() {
  return (
    <div id="Home_container">
    <div className='ImageOne__Container'>
      <img className="Image__One" src={Spacex1} alt='Rocketimage'/>
      <div className='btn__container'>
       <h1>STARLINK MISSION</h1>
       <Button data="REWATCH"/>
       </div>
    </div>
      <div className='ImageOne__Container'>
       <img className="Image__One" src={Spacex2} alt='Rocketimage'/>
       <div className='btn__container'>
       <h1>SPACEX + T-MOBILE UPDATE</h1>
       <Button data="LEARN MORE"/>
       </div>
     </div>

     <div className='ImageOne__Container'>
      <img className="Image__One" src={Spacex3} alt='Rocketimage'/>   
       <div className='btn__container'>
       <h1>STARSHIP UPDATE</h1>
       <Button data="LEARN MORE"/>
    </div>
</div>

      <div className='ImageOne__Container'>
       <img className="Image__One" src={Spacex4} alt='Rocketimage'/>
       <div className='btn__container'>
       <h1>STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON</h1>
       <Button data="LEARN MORE"/>
       </div>
    </div>
 </div>
  )
}

export default HomePage

