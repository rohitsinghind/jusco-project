import React,{useState} from 'react'
import axios from "axios";
import { styles } from './styles'

import TrackOtpPopup from './components/otpPopup';

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TrackYourApplication(props) {

    const mediaQuery = window.matchMedia("(max-width: 550px)");

    const [open, setOpen] = useState(false)

    const [id, setId] = useState("")

    const handleChange = (key) => {
      key.preventDefault();
      setId(key.target.value);
    };


    const submitHandler = async (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3001/applicationDetails", {
          id:id
        })
        .then((res) => props.setUserData(res.data?.data)); 
      setOpen(true);
    };

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
            value={id}
            onChange={handleChange}
            sx={styles.inputField}
          />
          <Button
            variant="contained"
            sx={styles.submitBtn}
            onClick={submitHandler}
          >
            Submit
          </Button>
          </Paper>
    </Container>
    </>
  )
}
