import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './NavSection.css'
import logo from '../../../Image/logo/Untitled-8.png'



const componentName = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className='logo-img2' src={logo} alt='' /></Navbar.Brand>
                    <Navbar className="justify-content-end end">
                        <Navbar.Text>
                            <div className='d-flex'>
                                <div>
                                    {/* <Nav.Link href="#home"><p className='login-color'><i class="fas fa-lock me-2"></i>Log in</p></Nav.Link> */}

                                </div>
                                {/* <Nav.Link href="#home" className='login-btn ms-3'>Open a Live Account</Nav.Link> */}
                            </div>
                        </Navbar.Text>
                    </Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavDropdown title="Trading" id="basic-nav-dropdown" className='drop-dawn trr'>
                                <div className='drop-dawn-box-2'>
                                    <div className='dp-left'>
                                        <NavDropdown.Item href="#action/3.2"><p className='c2'>Markets</p></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/forex">Forex</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/commodities">Commodities</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/stocks">Stocks</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/indices">Indices</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/account-type">Account Types</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/market-overview">Markets Overview</NavDropdown.Item>
                                    </div>


                                    <div className='dp-left'>
                                        <NavDropdown.Item href=""><p className='c2'>Trading Platforms</p></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/mt4">MT4</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/fix-api">Fix API</NavDropdown.Item>
                                    </div>


                                    <div className='dp-left'>
                                        <NavDropdown.Item href=""><p className='c2'>Trading Conditions</p></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/spreads-swaps-commissions">Spreads, SWAPs and<br /> Commissions</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/funding-withdrawal">Funding & Withdrawal</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/safety">Safety of Funds</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/swap-free-accounts">Swap-Free Accounts</NavDropdown.Item>

                                    </div>
                                    <div className='dp-right'>
                                        <NavDropdown.Item href="#action/3.2"><p className='c2'>Trading Tools</p></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/trading-tools">Tools Overview</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/free-VPS">Free VPS</NavDropdown.Item>
                                    </div>

                                </div>
                            </NavDropdown>


                            <NavDropdown title="Forex Education" id="basic-nav-dropdown" className='drop-dawn'>

                                <div className='drop-dawn-box-r'>
                                    <div className='dp-left'>
                                        <NavDropdown.Item href="#action/3.2"><p className='c2'>Forex Education</p></NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.2">Technical Analysis</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Forex News</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Forex Tips & Strategy</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">MT4 Learning</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">FX Tutorial Video</NavDropdown.Item>

                                    </div>

                                </div>
                            </NavDropdown>





                            <NavDropdown title="About" id="basic-nav-dropdown" className='drop-dawn-1'>
                                <div className='drop-dawn-box-1'>
                                    <div className='dp-left'>
                                        <NavDropdown.Item href="#action/3.2"><p className='c2'>About Us</p></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/about/X-TEN">Mission and Vision</NavDropdown.Item>
                                        <NavDropdown.Item href="/about/advantages">X-TEN Advantages</NavDropdown.Item>

                                    </div>
                                </div>
                            </NavDropdown>






                            <Nav.Link target="_blank" href="" className='drop-dawn'>Promotions</Nav.Link>
                         
                            <Nav.Link target="_blank" href="https://www.m4markets.com/partnerships/introducing-brokers" className='drop-dawn'>Partners</Nav.Link>


                            <NavDropdown title="Support" id="basic-nav-dropdown" className='drop-dawn'>

                                <div className='drop-dawn-box-3'>
                                    <div className='dp-left'>

                                        <NavDropdown.Item href="#action/3.2"><p className='c2'>Support</p></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Call Back</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>


                                    </div>
                                </div>


                            </NavDropdown>



                            <Nav.Link href="#home" className='drop-dawn end mt-5 b'> Contact us</Nav.Link>
                            <Nav.Link href="#home" className='drop-dawn end mt-2 b'> Call Back</Nav.Link>
                            <Nav.Link href="#home" className='nn-b'><p className='login-col'><i class="fas fa-lock me-2"></i>Log in</p></Nav.Link>
                            <Nav.Link href="#home" className='nn-b'><p className='login-col2'>Partner login</p></Nav.Link>
                            <div className='p-i'>

                            </div>


                        </Nav>
                        <Navbar.Collapse className="justify-content-end log">
                            <Navbar.Text>
                                <div className='d-flex'>
                                    <div className='pp'>
                                        <Nav.Link as={Link} to="/register" className='login-btn'><p className=' l2'><i class="fas fa-lock me-2"></i>User login</p></Nav.Link>
                                        <Nav.Link as={Link} to="/login" className='login-btn ms-2'><p className='l2'>Partner login</p></Nav.Link>
                                    </div>
                                    {/* <Nav.Link href="#home" className='login-btn ms-3 in pp ip'></Nav.Link> */}
                                </div>

                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default componentName;