import React, { useState } from 'react';
//import './contact.css';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const ContactUs = () => {


  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    comment: '',
  });

  const handleChange = (field) => (e) => {
    setUser({ ...user, [field]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailHTML = `
      <h2>New Contact Message</h2>

      <p>${user.comment}</p>

      <br/>

      <p>
      User Details:<br/>
        Name: ${user.name} <br/>
        Email: ${user.email} <br/>
        Phone: ${user.phoneNumber}
      </p>
    `;

    try {
      const response = await axios.post(
        "https://nurturer-sendgrid-backend.vercel.app/send-email",
        {
          to: 'nealluslabs@gmail.com',
          subject: "New Message From Contact Page!",
          htmlMessage: emailHTML,
          name: user.name,
          userEmail: user.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("CONTACTS PAGE RESPONSE IS=====>", response.data);
    } catch (error) {
      console.error("CONTACTS PAGE ERROR=====>", error);
    }
  };





  return (
    <section id="contact" style={{ width: '100%',height:"100vh",marginBottom:"0rem", padding: '10rem 2rem', boxSizing: 'border-box' }}>
      <div className="contact-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '2rem'
      }}>

        {/* Left Column */}
        <div className="contact-left" style={{
          flex: '1 1 400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem',color:"#5A5A5A" }}>
            We are here to help
          </h2>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6',marginBottom: '1.5rem',color:"#5A5A5A" }}>
           We’d love to hear from you. Whether you have a question, feedback, or just want
            to connect, send us a message and we’ll respond shortly.
          </p>

        
        </div>

        {/* Right Column */}
        <div className="contact-right" style={{
          flex: '1 1 400px',
          padding: '2rem',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <form onSubmit={handleSubmit}  className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <TextField
             label="Name"
             fullWidth
             required
             value={user.name}
             onChange={handleChange('name')}
           />
         
           <TextField
             label="Email"
             type="email"
             fullWidth
             required
             value={user.email}
             onChange={handleChange('email')}
           />
         
           <TextField
             label="Phone Number"
             type="tel"
             fullWidth
             value={user.phoneNumber}
             onChange={handleChange('phoneNumber')}
           />
         
           <TextField
             label="Comment"
             multiline
             rows={6}
             fullWidth
             required
             value={user.comment}
             onChange={handleChange('comment')}
           />
      


            <button 
             type="submit"
          style={{ 
            width:"10rem",
            margin:"0 auto",
            border:"0.5px solid #f0f0f0",
            backgroundColor: "#fff6bd",
            color: 'black',
            padding: '10px 20px',
            borderRadius: '8px',
            textTransform: 'none', 
            '&:hover': {
              background: 'linear-gradient(to right, #5c0fb8, #a734ff)',
            },
          }}
        >
           Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;