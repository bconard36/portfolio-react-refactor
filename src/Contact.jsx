/**
 * Contact Form Component
 * Handles sending of contact form submission emails via emailjs
 * Tracks state of form inputs on change/input 
 */

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [referral, setReferral] = useState('');
    const [message, setMessage] = useState('');
    const [otherReferral, setOtherReferral] = useState('');
    const [success, setSuccess] = useState(false);
    const form = useRef();

    /**
     * Handler for sending emails after contact form submission 
     * TemplateID, ServiceID, and publicKey are taken from emailjs
     * First email sent is with contact object data (names, email, message, etc)
     * Second email sent is an auto reply to the user who filled out the contact form 
     * @param {Object} evt - event object for form submission 
     */
    const sendEmail = (evt) => {
        evt.preventDefault();

        emailjs.sendForm('service_vkcmlic', 'template_4jrfcbf', form.current, {
            publicKey: 'IBkJyfLO0mqAw9LqC'
        })
        .then(
            () => {
                emailjs.sendForm('service_vkcmlic', 'template_zxva7ip', form.current, {
                    publicKey: 'IBkJyfLO0mqAw9LqC'
                });
            })
            .then(() => {
                setSuccess(true);
                evt.target.reset();
            })
            .catch((error) => {
                console.log('Failed: ', error.text);
            }
        );
    };

    return ( 
        <>
            <hr />
            <section id="contact">
                <h1>Let's Connect!</h1>
                <div className="contact">
                    <form id="contact-form" onSubmit={sendEmail} ref={form}>
                        <div className="first-name">
                            <label htmlFor="first-name">First Name</label>
                            <input 
                                type="text" 
                                id="first-name" 
                                name="firstName" 
                                required
                                onChange={(evt) => setFirstName(evt.target.value)}
                            />
                        </div>
                        <div className="last-name">
                            <label htmlFor="last-name">Last Name</label>
                            <input 
                                type="text" 
                                id="last-name" 
                                name="lastName" 
                                required
                                onChange={(evt) => setLastName(evt.target.value)}
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                onChange={(evt) => setEmail(evt.target.value)}
                            />    
                        </div>
                        <div className="phone-number">
                            <label htmlFor="phone-number">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone-number" 
                                name="phoneNum" 
                                onChange={(evt) => setPhoneNum(evt.target.value)}
                            />    
                        </div>
                        <div className="referral">
                            <label htmlFor="referral-source">How did you find this website?</label>
                            <select 
                                id="referral-source" 
                                name="referral" 
                                onChange={(evt) => setReferral(evt.target.value)}
                            >
                                <option value="">Select One</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="GitHub">GitHub</option>
                                <option value="Indeed">Indeed</option>
                                <option value="Resume">Resume</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/* Only render the other referral text box if referral is true */}
                        {referral === "Other" && (
                            <div id="referral-container">
                            <label htmlFor="other-referral-source" id="other">Please specify how you found this website:</label>
                            <textarea 
                                id="other-referral-source" 
                                name="otherReferral" 
                                rows="1" 
                                cols="30" 
                                onChange={(evt) => setOtherReferral(evt.target.value)}
                            />
                        </div>
                        )}
                        <div className="message">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                rows="15" 
                                cols="70" 
                                required 
                                onChange={(evt) => setMessage(evt.target.value)}
                            />
                        </div>
                        <div className="button-container">
                            <button id="send-message" type="submit">Send Message</button>
                        </div>
                    </form>
                    { /* Display success message once contact email is sent */ }
                    {success && (
                        <p className="success-message">Message successfully sent. I'll be in touch!</p>
                    )}
                </div>
            </section>
        </>
     );
}
 
export default Contact;