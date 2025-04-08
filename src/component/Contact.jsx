import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Alert,
  Snackbar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnimatedPage from "./AnimatedPages";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm("service_2jnoi0t", "template_j4019wv", form.current, {
        publicKey: "ZdK1kJkE9oZf456QO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setOpenSnackbar(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <AnimatedPage>
      <Box
        id="contact"
        sx={{
          py: 12,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 1 }}>
          Get In Touch
        </Typography>
        <Box
          sx={{
            width: "100px",
            height: "2px",
            bgcolor: "red",
            mx: "auto",
            mt: 0,
            mb: 4,
            borderRadius: 1,
          }}
        />
        <Grid container spacing={6} sx={{ px: { xs: 2, md: 4 } }}>
          <Grid item xs={12} md={6}>
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                type="email"
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                multiline
                rows={6}
                error={!!errors.message}
                helperText={errors.message}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 3, px: 4, py: 1.5 }}
              >
                Send Message
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                Feel free to reach out for collaborations, job opportunities, or
                just a friendly hello!
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <EmailIcon sx={{ mr: 2, fontSize: "2rem" }} />
                <Typography variant="h6">sagar97stha@gmail.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <LinkedInIcon sx={{ mr: 2, fontSize: "2rem" }} />
                <Link
                  href="https://www.linkedin.com/in/sagar-shrestha-003525358/"
                  target="_blank"
                  variant="h6"
                  underline="hover"
                  sx={{ color: "text.primary" }}
                >
                  LinkedIn Profile
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <GitHubIcon sx={{ mr: 2, fontSize: "2rem" }} />
                <Link
                  href="https://github.com/Sagar33Stha"
                  target="_blank"
                  variant="h6"
                  underline="hover"
                  sx={{ color: "text.primary" }}
                >
                  GitHub Profile
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your message has been sent successfully!
          </Alert>
        </Snackbar>
      </Box>
    </AnimatedPage>
  );
};

export default Contact;
