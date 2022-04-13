import React from 'react';
import { Nav } from 'react-bootstrap';
import './ChoiceAccount.css'

const componentName = () => {
    return (
        <div>
            <div className='ca-title mt-5'>
                <h1>Choose your account type</h1>
            </div>

            <div className='d-flex container mt-5'>
                <div className='b-1'>
                    <div className='cac-top'>
                        <p className='cac-p'>Account Type</p>
                        <h1 className='cac-title'>
                            RAW
                        </h1>
                    </div>
                    <div className='p-4'>
                        <div className='cac-item'>
                            <p className='cac-ip'>Currency</p>
                            <h5>USD, EUR</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Spread from</p>
                            <h5>0.0 pips</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Leverage</p>
                            <h5>Up to 1:500</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Commision</p>
                            <h5>$2.75 per side per lot</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Trading Platform</p>
                            <h5>cTrader or MT4</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Liquidity</p>
                            <h5>TopFX</h5>
                        </div>
                    </div>
                    <div>
                        <Nav.Link href="#home" className='cac-btn'>START TRADING</Nav.Link>
                    </div>
                </div>
                <div className='b-2'>
                    <div className='cac-top2'>
                        <p className='cac-p'>Account Type</p>
                        <h1 className='cac-title'>
                            ZERO
                        </h1>
                    </div>
                    <div className='p-4'>
                        <div className='cac-item'>
                            <p className='cac-ip'>Currency</p>
                            <h5>USD, EUR</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Spread from</p>
                            <h5>0.0 pips</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Leverage</p>
                            <h5> 1:500</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Commision</p>
                            <h5>ZERO</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Trading Platform</p>
                            <h5>cTrader or MT4</h5>
                        </div>
                        <div className='cac-item mt-3'>
                            <p className='cac-ip'>Liquidity</p>
                            <h5>TopFX</h5>
                        </div>
                    </div>
                    <div>
                        <Nav.Link href="#home" className='cac-btn'>START TRADING</Nav.Link>
                    </div>
                </div>
            </div>





            <div className='d-flex dn'>

                <div className='cac-top'>
                    <p className='cac-p'>Open a RAW<br/> Account</p>
                </div>
                <div className='cac-top2'>
                    <p className='cac-p'>Open a ZERO <br/> Account</p>
                </div>
            </div>
            <Nav.Link href="#home" className='cac-btn2'>Learn more<i class="fas fa-chevron-right ms-2 ai"></i></Nav.Link>
        </div>
    );
};

export default componentName;