import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';


export const Header = () => {

 const getdata = useSelector((state)=>state.cartreducer.carts);
 console.log(getdata);

  return (
    
    <>
      <Navbar className='bg-dark variant-dark' style={{ height: 70 }}>
        <Container>
          <Link to='/' className='text-light'>
            <h2>Shopping cart</h2>
          </Link>
          <Link to='/cart'>
            <Badge badgeContent={getdata.length} color="primary">
              <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25 }}></i>
            </Badge>

          </Link>
        </Container>
      </Navbar>
      
    </>

  )
}


export default Header
