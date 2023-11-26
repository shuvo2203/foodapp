import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';

function Header() {

    const user ={
        name:"john"
    }

    const cart={
        totlaCount:10
    }

    const logout=()=>{

    }

  return (
    <header className='header'>
        <div className='container'>
            <Link to='/' className='logo'>FoodShop</Link>
            <nav>
                <ul>
                    {
                        user? 
                        <li className='menu_container'>
                            <Link to='/profile'>{user.name}</Link>
                            <div className='menu'>
                                <Link to='/profile' >Profile</Link>
                                <Link to='/orders'>Orders</Link>
                                <a onClick={logout}>Logout</a>
                            </div>
                        </li>
                        :
                        <Link to='/login'>Login</Link>
                    }
                    <li>
                        <Link to='/cart'>Cart
                            {cart.totlaCount > 0 && <span className='cart_count'>{cart.totlaCount}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header