import React from 'react';
import './TopSection.css'
import logo from '../../../Image/logo/Untitled-8.png'
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";


const componentName = () => {
    return (
        <div className='top-section'>
            <div className='container'>
                <div className='left'>
                    <div className='d-flex'>
                    <Nav.Link as={Link} to="/"><img className='logo-img' src={logo} alt="" /></Nav.Link>

                      
                    </div>
                </div>
                <div className='right'>
                    <div className='d-flex'>
                    <a className='institutional'><i class="fas fa-info-circle me-1"></i> Contact us</a>
                    <a className='institutional'><i class="fas fa-phone-alt  me-1"></i> Call Back</a>
                 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentName;