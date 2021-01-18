import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
    return (
        <MDBNavbar color="unique-color-dark" dark expand>
            <MDBNavbarBrand>
                <strong className="white-text">Parler Data Leak</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/parler-map">Map</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/about">About</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                {/* <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="twitter" />
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav> */}
            </MDBCollapse>
        </MDBNavbar>
        );
    }
}

export default NavbarPage;