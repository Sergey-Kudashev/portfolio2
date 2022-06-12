import React, { useContext } from 'react'
import { Context } from '..'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'


const NavBar = observer( () => {
    const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <NavLink style={{color:'white', textDecoration:'none'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
    {user.isAuth ?
        <Nav className="ml-auto">
            <Button variant='outline-light' style={{boxShadow:'none'}}>Admin panel</Button>
            <Button variant='outline-light' style={{boxShadow:'none', marginLeft:'16px'}} onClick={() => user.setIsAuth(false)}>Log out</Button>
        </Nav>
        :
        <Nav className="ml-auto">
            <Button variant='outline-light' style={{boxShadow:'none'}} onClick={() => user.setIsAuth(true)}>Authorization</Button>
        </Nav>
}
    </Container>
  </Navbar>
  )
})

export default NavBar