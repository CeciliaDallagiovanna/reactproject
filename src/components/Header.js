import {
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem 
} from 'reactstrap';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark className='primary' sticky='top' expand='md' >
            <NavbarBrand className='ms-5' href='/'>
                <h1 className='ms-4'>Let's Run</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                </Nav>                    
            </Collapse>
            
        </Navbar>
    );
};

export default Header;