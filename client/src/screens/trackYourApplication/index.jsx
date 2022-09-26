import React,{useState} from 'react'
import { styles } from './styles'

import TrackOtpPopup from './components/otpPopup';

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TrackYourApplication() {

    const mediaQuery = window.matchMedia("(max-width: 550px)");

    const [open, setOpen] = useState(false)

  return (
    <>
    <TrackOtpPopup open={open} setOpen={setOpen}/>
    <Container maxWidth="xl" sx={styles.container}>
    <Paper sx={styles.paper} variant="outlined">
          <img
            style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
            src={require("../../assets/image/logo.png")}
            alt=""
            srcset=""
          />
          <Typography sx={styles.textLogo}>Bulk Generation System</Typography>
          <Typography sx={styles.loginText}>Track Your Application</Typography>
          <TextField
            id="username"
            type="text"
            label="Enter Application No."
            placeholder="Application No."
            // value={creds.username || ""}
            // onChange={handleChange}
            sx={styles.inputField}
          />
          <Button
            variant="contained"
            sx={styles.submitBtn}
            onClick={() => {
                setOpen(true)
            }}
          >
            Submit
          </Button>
          </Paper>
    </Container>
    </>
  )
}
