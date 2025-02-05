import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import * as emailjs from '@emailjs/browser';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name.trim() === '');
    setEmailError(email.trim() === '');
    setMessageError(message.trim() === '');

    if (name.trim() && email.trim() && message.trim()) {
      const templateParams = {
        from_name: name,
        reply_to: email,
        message: message,
        to_name: 'Subham Sharma',
      };

      console.log('Sending email with:', templateParams);

      emailjs.send('service_buxj5ng', 'template_yb2u42s', templateParams, 'g_V0Hmq3Rd8OxynMa')
        .then(
          (response: emailjs.EmailJSResponseStatus) => {
            console.log('SUCCESS!', response.status, response.text);
            setName('');
            setEmail('');
            setMessage('');
          },
          (error: Error) => {
            console.log('FAILED...', error);
          }
        );
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={0} className="contact-wrapper">
        <Typography variant="h4" className="contact-title">
          Contact Me 
        </Typography>
        <Typography variant="h6" className="contact-subtext">
          Got a project waiting to be realized? Let's collaborate and make it happen!
        </Typography>
        <Box
          ref={form}
          component="form"
          noValidate
          autoComplete="off"
          className="contact-form"
          onSubmit={sendEmail}
        >
          <div className="form-flex">
            <TextField
              fullWidth
              required
              variant="outlined"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? 'Please enter your name' : ''}
              className="custom-textfield"
              InputLabelProps={{
                shrink: false, // Prevent label from moving up
              }}
            />
            <TextField
              fullWidth
              required
              variant="outlined"
              placeholder="Email / Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? 'Please enter your email or phone number' : ''}
              className="custom-textfield"
              InputLabelProps={{
                shrink: false,
              }}
            />
          </div>
          <TextField
            fullWidth
            required
            id="outlined-multiline-static"
            variant="outlined"
            placeholder="Message"
            multiline
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
            helperText={messageError ? 'Please enter the message' : ''}
            className="custom-textfield multiline-textfield"
            InputLabelProps={{
              shrink: false,
            }}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            className="send-button"
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;
