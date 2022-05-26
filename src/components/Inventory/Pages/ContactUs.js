import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import './ContactUs.css';
import logo from '../Images/logo.jpg';
import appstore from '../Images/appstore.png';
import playstore from '../Images/playstore.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactUs() {

const initialValues = {
  name: "",
  email: "",
  message: ""
};

const[formValues, setFormValues] = useState(initialValues);
const[formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
    // console.log(e.target);
    const{ name, value } = e.target;
    setFormValues({...formValues,[name]: value});
    // console.log(formValues);
}

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
}


const validate = (values) => {
  const errors={};
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(!values.name){
    errors.name = "Name is required";
  }
  if(!values.email){
    errors.email = "Email is required";
  }
  else if(!emailPattern.test(values.email)){
    errors.email = "Enter a valid Email"
  }
  if(!values.message){
    errors.message = "Message is required";
  }
  return errors;
}

useEffect(() => {
  // console.log(formErrors);
  if(Object.keys(formErrors).length===0 && isSubmit){
    console.log(formValues);
  }
},[formErrors,formValues,isSubmit]);



return (
    <>
      <div class="bodybg">
        <Navbar />

        <div class="contact">
          <div class="col2">
            <h1>Contact Us </h1>


            <Form >
              <Form.Group className="mb-3">
                <Form.Label class="label"> Name </Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" value={formValues.name} onChange={handleChange}/>
                <span className="text-danger">{ formErrors.name } </span>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label class="label"> Your Email </Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" value={formValues.email} onChange={handleChange}/>
                <span className="text-danger">{ formErrors.email}  </span>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label class="label">Message</Form.Label>
                <Form.Control name="message" placeholder="Leave message" as="textarea" rows={3} value={formValues.message} onChange={handleChange} />
                <span className="text-danger">{ formErrors.message}  </span>
              </Form.Group>

            </Form>
              <Button id="btn" name="button" type="submit" onClick={handleSubmit} >
                Submit
              </Button>

          </div>



        </div>


      </div>
      {/* -------------------------- Footer ---------------------------- */}

      <section class="footer2">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div class="app-logo">
                        <img src={playstore} alt="playstore"/>
                        <img src={appstore} alt="appstore"/>
                    </div>
                </div>
                <div class="footer-col-2">
                    <img src={logo}/>
                    <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Food Inventory Accessible to the Many.
                    </p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p class="copyright">Copyright &copy; 2022 - Daas Inventory</p>
        </div>

    </section>
    </>
  );
}


export default ContactUs;