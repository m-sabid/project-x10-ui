import React from 'react';
import './Form1.css'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CountryField from '../CountyField/CountryField';
import NumberField from '../NumberField/NumberField';
import ReCAPTCHA from "react-google-recaptcha";



const componentName = () => {




    return (

        <div>
            <div>

                <div>

                </div>

                <React.Fragment>
                    <h2 className='regis' gutterBottom>
                        Instant Registration
                    </h2>
                    <Grid spacing={24}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="middleName"
                                name="middleName"
                                label="Middle name"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                type="password"
                                id="password"
                                name="password"
                                label="User Password"
                                fullWidth
                            
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                type="password"
                                id="retype password"
                                name="retype password"
                                label="Conform Password"
                                fullWidth
                        
                            />
                        </Grid>




                        <Grid item xs={12} sm={12}>

                            <div className='mt-4'>
                                <CountryField />

                            </div>
                        </Grid>
                        <p className='small'>Based on your selected country, please note that your trading account will be under Orbex Global Limited a company registered in Mauritius</p>
                        <Grid item xs={12} sm={12}>

                            <div className='mt-3'>
                                <NumberField />
                            </div>
                        </Grid>


                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox color="blue" name="saveAddress" value="yes" />
                                }
                                label="I agree to Terms & Condition"
                            />
                        </Grid>
                        <div className='mt-4'>
                            <Grid item xs={12}>
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

                                />
                            </Grid>
                        </div>

                    </Grid>
                </React.Fragment>
            </div>
        </div>

    );
};

export default componentName;