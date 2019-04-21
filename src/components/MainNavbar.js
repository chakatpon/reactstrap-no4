import React from 'react';
import { connect } from 'react-redux';
import { Navbar,
         Container, 
         NavbarBrand, 
         NavbarToggler, 
         Collapse,
         Nav,
         NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { toggleNavbar } from '../actions';

class MainNavbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <Container>
                    <NavbarBrand href="/">Chakatopn Khunthong</NavbarBrand>
                    <NavbarToggler onClick={() => this.props.toggleNavbar(this.props.navOpen)}/>
                    <Collapse isOpen={this.props.navOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink to="/app/home" className="nav-link" activeClassName="active">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/app/about" className="nav-link" activeClassName="active">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/app/services" className="nav-link" activeClassName="active">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/app/blog" className="nav-link" activeClassName="active">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/app/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        navOpen: state.navOpen
    }
}

export default connect(mapStateToProps, { toggleNavbar })(MainNavbar);