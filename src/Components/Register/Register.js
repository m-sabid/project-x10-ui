import React from 'react';
import './Register.css'
import TopSection from '../Shared/TopSection/TopSection'
import NavSection from '../Shared/NavSection/NavSection'
import From1 from './Form1/Form1'
import { FaCheckDouble } from "react-icons/fa";
import RegisterForm from './RegisterForm/RegisterForm';
import UserLogin from '../PartnerLogin/UserLogin';


const componentName = () => {
    return (
        <div>
            <TopSection />
            <NavSection />

            <div className='container'>
                <div className='regi-left'>
                    <div className='r-top'>
                        <h2>Live Account Registration</h2>
                        <h6>Trade with a trusted global broker, licensed and regulated since 2011.</h6>
                    </div>
                    <div className='r-top'>
                        <h3>Why Traders Choose X-TEN</h3>
                        <h6>Trade with a trusted global broker, licensed and regulated since 2011.</h6>
                    </div>
                    <div className='r-inf d-flex mt-5'>
                        <span className='c-icon me-3'><FaCheckDouble /></span><h5 className='mt-3'> Multi-body regulated</h5>
                    </div>
                    <div className='r-inf d-flex'>
                        <span className='c-icon me-3'><FaCheckDouble /></span><h5 className='mt-3'> Fast execution with an average order speed of 0.03 seconds</h5>
                    </div>
                    <div className='r-inf d-flex'>
                        <span className='c-icon me-3'><FaCheckDouble /></span><h5 className='mt-3'> Tight spreads, no requotes, NDD model</h5>
                    </div>
                    <div className='r-inf d-flex'>
                        <span className='c-icon me-3'><FaCheckDouble /></span><h5 className='mt-3'> Instant deposits and withdrawals via the secure X-TEN Wallet</h5>
                    </div>
                    <div className='r-inf d-flex'>
                        <span className='c-icon me-3'><FaCheckDouble /></span><h5 className='mt-3'> Award-winning research</h5>
                    </div>
                    <div className='r-inf d-flex'>
                        <span className='c-icon me-3'><FaCheckDouble /></span><h5 className='mt-3'> Technologically advanced trading environment</h5>
                    </div>
                    <div className='r-inf d-flex'>
                        <span className='c-icon me-3'><FaCheckDouble /></span><h5 className='mt-3'> Negative balance protection</h5>
                    </div>
                    <div className='r-inf d-flex'>
                        <span className='c-icon me-3'><FaCheckDouble /></span><h5 className='mt-3'> World-class 24/5 customer support</h5>
                    </div>

                </div>
                {/* <RegisterForm/> */}
                <UserLogin/>
            </div>

        </div>
    );
};

export default componentName;