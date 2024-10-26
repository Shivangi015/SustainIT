import React, {useState} from 'react'
import './navbar.css'
import { IoIosCart } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [menu, SetMenu] = useState("home");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src='' alt=''/>
        <p>SustainIT</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>SetMenu("home")}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>: <></>}</li>
        <li onClick={()=>SetMenu("eco store")}><Link style={{textDecoration: 'none'}} to='/ecoStore' >Eco Store</Link>{menu==="eco store"? <hr/>: <></>}</li>
        <li onClick={()=>SetMenu("second hand")}><Link style={{textDecoration: 'none'}} to='/secondHand' >Second Hand Store</Link>{menu==="second hand"? <hr/>: <></>}</li>
       
      </ul>
      <div className='login'>
        <Link style={{textDecoration: 'none', color:'black'}} to='/login'><button>Login</button></Link>
        <IoIosSearch size={30}/>
        <FaRegUser size={25}/>
        <Link style={{textDecoration: 'none'}} to='/cart'><IoIosCart size={30}/></Link>
        <div className='cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar