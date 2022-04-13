import React from 'react';
import './Footer.css'
import flogo from '../../../Image/logo-top-fx-footer.svg'
import { Nav } from 'react-bootstrap';

const componentName = () => {
    return (
        <div className='footer-section'>
            <div className='footer'>
                <div className='f'>
                    <img src={flogo} alt='' />
                    <p className='f-info '>We have been providing
                        liquidity solutions to brokers and other investment firms since 2010.
                    </p>
                    <h6 className='mt-5'>Contact us:</h6>
                    <p className='f-info'>CT House, Unit 8, Office No 8H, Providence Mahe Seychelles</p>
                    <p className='f-info'>T: +2484671987</p>
                    <p className='f-info2'>E: support@topfx.com.sc</p>
                    <div className='d-flex mt-5'>
                        <i class="fab fa-facebook-f f-icon fb"></i>
                        <i class="fab fa-instagram f-icon ms-4 ins"></i>
                        <i class="fab fa-linkedin-in f-icon ms-4 l-in"></i>
                    </div>
                </div>
                <div className='f2'>
                    <h6>About</h6>
                    <Nav.Link href="#home" className='f-info-l'><p >Regulations & Licences</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >10 Years Timeline</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Contact us</p></Nav.Link>

                </div>
                <div className='f3'>
                    <h6>Trading</h6>
                    <Nav.Link href="#home" className='f-info-l mt-3'><p >Range of Marketse</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Forex</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Indices</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Shares</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Metals</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Cryptos</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Energies</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >ETFs</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Account Types</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Deposits</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Withdrawals</p></Nav.Link>
                </div>
                <div className='f3'>
                    <h6>Platforms</h6>
                    <Nav.Link href="#home" className='f-info-l mt-3'><p >cTrader</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >MT4</p></Nav.Link>
                </div>
                <div className='f'>
                    <h6>Copy trading</h6>
                    <Nav.Link href="#home" className='f-info-l mt-3'><p >How to Copy trade with TopFX</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >For copiers</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >For strategy providers</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >MT4 PAMM accounts</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l mt-1'><p >Introducing Brokers</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l  mt-1'><p >Legal</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Dividend Adjustments</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Legal Documents</p></Nav.Link>
                    <Nav.Link href="#home" className='f-info-l'><p >Market Holidays</p></Nav.Link>
                </div>

            </div>


            <div className=" footer-p">
                <p><span className='p-black'>Risk and warning:</span> CFDs are perplexing instruments and accompany a high danger of losing cash quickly because of influence. A high number of retail financial traders records losing money while trading CFDs with this broker. You ought to consider whether you see how CFDs work and regardless of whether you can stand to face the high challenge of losing your money.</p>
            </div>
            <p className='copy'><small >All rights reserved. © 2022 X-TEN</small></p>
        </div>
    );
};

export default componentName;