import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import "./Form1.css";
import { Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Form2 from '../Form2/Form2'

// Functions
const getData = () => {
  const data = localStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

// main Component
const Form1 = () => {

  //   user input info
  const [users, setUsers] = useState(getData());

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  function handleLoginSubmit(e) {
    e.preventDefault();
    //   object
    let user = { firstName, lastName, userEmail, userPassword, country, phone };
    setUsers([...users, user]);

    // All empty
    setFirstName("");
    setLastName("");
    setUserEmail("");
    setUserPassword("");
    setCountry("");
    setPhone("");
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="login">
      <div className="container h">
        {
          <form onSubmit={handleLoginSubmit} className="login-form">
            <h3 className="pt-1 color">Instant Registration</h3>

            <br />
            <input
              className="login-input mt-4"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First Name"
            />
            <br />
            <input
              className="login-input mt-4"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Last Name"
            />
            <br />
            <input
              className="login-input mt-4"
              type="email"
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              placeholder="Email Address"
            />
            <br />
            <input
              className="login-input mt-4"
              type="password"
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
              placeholder="your Password"
            />
            <br />
            {/* <input className="login-input mt-4" type="password" name="password2" onChange={handleOnChange} placeholder="Re-Type your Password" />
                <br /> */}
            <select
              class="form-select mt-4"
              aria-label="Default select example"
              name="Country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            >
              <option selected>Country</option>
              <option>Andorra</option>
              <option>United Arab Emirates</option>
              <option>Afghanistan</option>
              <option>Antigua and Barbuda</option>
              <option>Anguilla</option>
              <option>Albania</option>
              <option>Armenia</option>
              <option>Angola</option>
              <option>Antarctica</option>
              <option>Argentina</option>
              <option>American Samoa</option>
              <option>Austria</option>
              <option>Australia</option>
              <option>Aruba</option>
              <option>Alland Islands</option>
              <option>Azerbaijan</option>
              <option>Bosnia and Herzegovina</option>
              <option>Barbados</option>
              <option>Bangladesh</option>
              <option>Belgium</option>
              <option>Burkina Faso</option>
              <option>Bulgaria</option>
              <option>Bahrain</option>
              <option>Burundi</option>
              <option>Benin</option>
              <option>Saint Barthelemy</option>
              <option>Bermuda</option>
              <option>Brunei Darussalam</option>
              <option>Bolivia</option>
              <option>Brazil</option>
              <option>Bahamas</option>
              <option>Bhutan</option>
              <option>Bouvet Island</option>
              <option>Botswana</option>
              <option>Belarus</option>
              <option>Belize</option>
              <option>Canada</option>
              <option>Cocos (Keeling) Islands</option>
              <option>Congo</option>
              <option>Central African Republic</option>
              <option>Switzerland</option>
              <option>Cote d'Ivoire</option>
              <option>Cook Islands</option>
              <option>Chile</option>
              <option>Cameroon</option>
              <option>China</option>
              <option>Colombia</option>
              <option>Costa Rica</option>
              <option>Cuba</option>
              <option>Cape Verde</option>
              <option>Curacao</option>
              <option>Christmas Island</option>
              <option>Cyprus</option>
              <option>Czech Republic</option>
              <option>Germany</option>
              <option>Djibouti</option>
              <option>Denmark</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>Algeria</option>
              <option>Ecuador</option>
              <option>Estonia</option>
              <option>Egypt</option>
              <option>Western Sahara</option>
              <option>Eritrea</option>
              <option>Spain</option>
              <option>Ethiopia</option>
              <option>Finland</option>
              <option>Fiji</option>
              <option>Falkland Islands (Malvinas)</option>
              <option>Micronesia</option>
              <option>Faroe Islands</option>
              <option>France</option>
              <option>Gabon</option>
              <option>United Kingdom</option>
              <option>Grenada</option>
              <option>Georgia</option>
              <option>French Guiana</option>
              <option>Guernsey</option>
              <option>Ghana</option>
              <option>Gibraltar</option>
              <option>Greenland</option>
              <option>Gambia</option>
              <option>Guinea</option>
              <option>Guadeloupe</option>
              <option>Equatorial Guinea</option>
              <option>Greece</option>
              <option>South Georgia and the South Sandwich Islands</option>
              <option>Guatemala</option>
              <option>Guam</option>
              <option>Guinea-Bissau</option>
              <option>Guyana</option>
              <option>Hong Kong</option>
              <option>Heard Island and McDonald Islands</option>
              <option>Honduras</option>
              <option>Croatia</option>
              <option>Haiti</option>
              <option>Hungary</option>
              <option>Indonesia</option>
              <option>Ireland</option>
              <option>Isle of Man</option>
              <option>India</option>
              <option>British Indian Ocean Territory</option>
              <option>Iraq</option>
              <option>Iran</option>
              <option>Iceland</option>
              <option>Italy</option>
              <option>Jersey</option>
              <option>Jamaica</option>
              <option>Jordan</option>
              <option>Japan</option>
              <option>Kenya</option>
              <option>Kyrgyzstan</option>
              <option>Cambodia</option>
              <option>Kiribati</option>
              <option>Comoros</option>
              <option>Saint Kitts and Nevis</option>
              <option>South Korea</option>
              <option>North Korea</option>
              <option>Kuwait</option>
              <option>Cayman Islands</option>
              <option>Kazakhstan</option>
              <option>Lao People's Democratic Republic</option>
              <option>Lebanon</option>
              <option>Saint Lucia</option>
              <option>Liechtenstein</option>
              <option>Sri Lanka</option>
              <option>Liberia</option>
              <option>Lesotho</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Latvia</option>
              <option>Libya</option>
              <option>Morocco</option>
              <option>Monaco</option>
              <option>Moldova</option>
              <option>Montenegro</option>
              <option>Saint Martin (French part)</option>
              <option>Madagascar</option>
              <option>Macedonia</option>
              <option>Mali</option>
              <option>Myanmar</option>
              <option>Mongolia</option>
              <option>Macao</option>
              <option>Northern Mariana Islands</option>
              <option>Martinique</option>
              <option>Mauritania</option>
              <option>Montserrat</option>
              <option>Malta</option>
              <option>Mauritius</option>
              <option>Maldives</option>
              <option>Malawi</option>
              <option>Mexico</option>
              <option>Malaysia</option>
              <option>Mozambique</option>
              <option>Namibia</option>
              <option>New Caledonia</option>
              <option>Niger</option>
              <option>Norfolk Island</option>
              <option>Nigeria</option>
              <option>Nicaragua</option>
              <option>Netherlands</option>
              <option>Norway</option>
              <option>Nepal</option>
              <option>Nauru</option>
              <option>Niue</option>
              <option>New Zealand</option>
              <option>Oman</option>
              <option>Panama</option>
              <option>Peru</option>
              <option>French Polynesia</option>
              <option>Papua New Guinea</option>
              <option>Philippines</option>
              <option>Pakistan</option>
              <option>Poland</option>
              <option>Saint Pierre and Miquelon</option>
              <option>Pitcairn</option>
              <option>Puerto Rico</option>
              <option>Palestine</option>
              <option>Portugal</option>
              <option>Palau</option>
              <option>Paraguay</option>
              <option>Qatar</option>
              <option>Reunion</option>
              <option>Romania</option>
              <option>Serbia</option>
              <option>Russian Federation</option>
              <option>Rwanda</option>
              <option>Saudi Arabia</option>
              <option>Solomon Islands</option>
              <option>Seychelles</option>
              <option>Sudan</option>
              <option>Sweden</option>
              <option>Singapore</option>
              <option>Saint Helena</option>
              <option>Slovenia</option>
              <option>Svalbard and Jan Mayen</option>
              <option>Slovakia</option>
              <option>Sierra Leone</option>
              <option>San Marino</option>
              <option>Senegal</option>
              <option>Somalia</option>
              <option>Suriname</option>
              <option>South Sudan</option>
              <option>Sao Tome and Principe</option>
              <option>El Salvador</option>
              <option>Sint Maarten (Dutch part)</option>
              <option>Syrian Arab Republic</option>
              <option>Swaziland</option>
              <option>Turks and Caicos Islands</option>
              <option>Chad</option>
              <option>Togo</option>
              <option>Thailand</option>
              <option>Tajikistan</option>
              <option>Tokelau</option>
              <option>Timor-Leste</option>
              <option>Turkmenistan</option>
              <option>Tunisia</option>
              <option>Tonga</option>
              <option>Turkey</option>
              <option>Trinidad and Tobago</option>
              <option>Tuvalu</option>
              <option>Taiwan, Province of China</option>
              <option>United Republic of Tanzania</option>
              <option>Ukraine</option>
              <option>Uganda</option>
              <option>United States</option>
              <option>Uruguay</option>
              <option>Holy See (Vatican City State)</option>
              <option>Saint Vincent and the Grenadines</option>
              <option>Venezuela</option>
              <option>British Virgin Islands</option>
              <option>US Virgin Islands</option>
              <option>Vietnam</option>
              <option>Vanuatu</option>
              <option>Wallis and Futuna</option>
              <option>Samoa</option>
              <option>Kosovo</option>
              <option>Yemen</option>
              <option>Mayotte</option>
              <option>South Africa</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>
            {/* <input className="login-input mt-4" type="text" name="country" onChange={handleOnChange} placeholder="Country"/> */}
            <br />
            <p className="mt-3 small">
              Based on your selected country, please note that your trading
              account will be under Orbex Global Limited a company registered in
              Mauritius
            </p>
            <input
              className="login-input mt-1"
              type="text"
              name="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone Number"
            />
            <br />
            <div className="mt-4">
              <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
            </div>
            <div class="form-check mt-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                I agree to Terms & Conditions
              </label>
            </div>
            <Button
              className="login-input mt-3 btn"
              type="submit"
              value="Submit"
            >
              Register
            </Button>
          </form>
        }
      </div>
    </div>
  );
};

export default Form1;
