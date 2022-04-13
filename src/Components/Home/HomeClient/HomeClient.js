import React from 'react';
import './HomeClient.css'
import trust from '../../../Image/logo-trustpilot.png' 
import fpa from '../../../Image/fpa.png' 
import google from '../../../Image/logo-google.png' 
import aw1 from '../../../Image/company/award-worldfinance-2018b.svg' 
import aw2 from '../../../Image/company/award-e-fxb.svg' 
import aw3 from '../../../Image/company/award-gbmb.svg' 
import aw4 from '../../../Image/company/award-wf-2018b.svg' 
import aw5 from '../../../Image/company/award-cfib.svg' 
import aw6 from '../../../Image/company/award-bpp-2017b.svg' 
import aw7 from '../../../Image/company/award-fmlsb.svg' 
import aw8 from '../../../Image/company/europeanb.svg' 

const componentName = () => {
    return (
        <div>
            <div className='hc-title'>
                <h2>Our clients' feedback speaks the truth</h2>
            </div>

            <div className='hc-grid'>
                <div className='hc-card i'>
                    <img className='hc-img' src={trust} alt=''/>
                    <h1 className='mt-3'>4.7</h1>
                </div>
                <div className='hc-card l'>
                    <img className='hc-img2' src={fpa} alt=''/>
                    <h1 className='mt-3'>4.7</h1>
                </div>
                <div className='hc-card i'>
                    <img className='hc-img' src={google} alt=''/>
                    <h1 className='mt-3'>4.7</h1>
                </div>
              
            </div>

            <div className='hc-title'>
                <h2>Our Awards</h2>
            </div>

            <div className='mt-5 container aw-grid'>
                    <img className='aw-img' src={aw1} alt=''/>
                    <img className='aw-img' src={aw2} alt=''/>
                    <img className='aw-img' src={aw3} alt=''/>
                    <img className='aw-img' src={aw4} alt=''/>
                    <img className='aw-img' src={aw5} alt=''/>
                    <img className='aw-img' src={aw6} alt=''/>
                    <img className='aw-img' src={aw7} alt=''/>
                    <img className='aw-img' src={aw8} alt=''/>
            </div>
        </div>
    );
};

export default componentName;