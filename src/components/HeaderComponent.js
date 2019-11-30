import React,{Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{


    constructor(props){

        super(props);
        this.state={
            isNavOpen:false
        };
        this.toggleNav=this.toggleNav.bind(this);

    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    render(){
        return(
            <React.Fragment>
            <Navbar dark  expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand className="mr-auto" href="/">
                    <img src="assets/images/logo.png" height="30" width="41" alt="RIstourent COn FUsion"/>
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav  navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className='fa fa-home fa-lg'></span> HOME {" "}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                            <span className='fa fa-info fa-lg'></span> ABOUT US {" "}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <span className='fa fa-list fa-lg'></span> MENU {" "}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                            <span className='fa fa-address-card fa-lg'></span> CONTACT US {" "}
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
             </div>
            </Navbar>
            <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-60">
                        <h1>Ristorent Con Fusion</h1>
                        <p>We take insperation from the world's best cuisions,and create a unique experiance </p>
                    </div>
                </div>
            </div>
            </Jumbotron>
            </React.Fragment>

        );

    }
}

export default Header;