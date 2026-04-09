import React from 'react';
//import './contact.css';
import { TextField, Button } from '@mui/material';

const ContactUs = () => {
  return (
    <section id="contact" style={{ width: '100%',height:"100%",marginBottom:"-2rem", padding: '4rem 2rem', boxSizing: 'border-box' }}>
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
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            We are here to help
          </h2>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6',marginBottom: '1.5rem' }}>
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
          <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <TextField label="Name" variant="outlined" fullWidth required />
            <TextField label="Email" type="email" variant="outlined" fullWidth required />
            <TextField label="Phone Number" type="tel" variant="outlined" fullWidth />
            <TextField
              label="Comment"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              required
            />
           {/* <Button variant="contained" 
            style={{ backgroundColor: "#fff6bd",
            color: 'black',}}
             size="large">
              Submit
            </Button>
      */}


            <button 
             
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