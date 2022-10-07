import { useState } from "react";
import "../Navbar/Navbar.css"
import  {Outlet} from "react-router-dom"
import {Link} from "react-router-dom"
import SpacexLogo from '../SpacexLogo/SpacexLogo'
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';



function Navbar() {

const [close_Nav,  open_Nav] = useState(false)
  return (
    <>
      <div className='Navbar'>
      <Link to="/">
      <SpacexLogo/>
      </Link>

      <div id={!close_Nav ? "hidden": ""} className="Navlinks__Container">  
      <div className='closeIcon' onClick={()=>{open_Nav(false)}}>
      <CloseIcon />
      </div>

      <div className='Navlinks__Sectionone'>
      <a href='#closed' className='link'>falcon 9</a>     
      <a href='#closed' className='link'>falcon heavy</a>   
      <a href='#closed' className='link'>dragon</a>   
      <a href='#closed' className='link'>starship</a>   
      <a href='#closed' className='link'>human spaceflight</a> 
      <a href='#closed' className='link'>rideshare</a>   
      <a href='#closed' className='link'>starlink</a>         
      </div> 
      
      <div className="Navlinks__SectionTwo">
      <a href='#closed' className='link'>mission</a>     
      <a href='#closed' className='link'>lunches</a>   
      <a href='#closed' className='link'>careers</a>   
      <a href='#closed' className='link'>updates</a> 
      <a href="#closed" className='link'>Shop</a> 
      </div> 
    </div>
    
    <div className='menuIcon' onClick={()=>{open_Nav(true)}}>
    <MenuIcon  />
    </div>
   </div>
<Outlet />
</>
)
}

export default Navbar

