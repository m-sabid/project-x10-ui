import React from 'react';
import { Nav } from 'react-bootstrap';
import './Banner.css'

const componentName = () => {
    return (
        <div className='banner'>
            <div className='h-banner container'>
                <div className='h-banner-left'>
                    <p className='h-b-p'>With XTEN, you can be your best trader.</p>
                    <h1 className='h-b-h'>Raw Spreads Starts<br /> At 0.0 pips</h1>
                    <div className='h-b-b'>
                        <Nav.Link href="#home" className='h-b-ac'>Open a Live Account</Nav.Link>
                        <Nav.Link href="#home" className='h-b-ac2 ms-3'>Try Free Demo</Nav.Link>
                    </div>
                </div>
                <div className='h-banner-right'>
                    <iframe src="https://fxpricing.com/fx-widget/ticker-quote-widget.php?id=1,2,3,5,14,20&border=show&click_target=blank&theme=dark&tm-cr=212529&hr-cr=FFFFFF13&by-cr=28A745&sl-cr=DC3545&lang=en&font=Arial, sans-serif" className='i-widget'></iframe>
                </div>
            </div>
            <div className='h-b-bottom'>
                <div className='h-b-b-g'>
                    <div>
                        <p className='b-b-p1'>0.0</p>
                        <p className='b-b-p2'>Pip Spreads*</p>
                    </div>

                    <div>
                        <p className='b-b-p1'>1:500 </p>
                        <p className='b-b-p2'>Leverage</p>
                    </div>

                    <div>
                        <p className='b-b-p1'>0.01</p>
                        <p className='b-b-p2'>Micro Lot Trading</p>
                    </div>

                    <div>
                        <p className='b-b-p1'>+1780</p>
                        <p className='b-b-p2'>Tradable Instruments</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default componentName;