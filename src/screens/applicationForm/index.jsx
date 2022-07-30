import React,{useState} from 'react'
import { styles } from './styles';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function ApplicationForm() {

  const [creds, setCreds] = useState({ Fname: '',Lname:"",mobile:"",email:"",designation:"",gstin:"", password: '' });
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (key) => {
    key.preventDefault();
    setCreds({ ...creds, [key.target.id]: key.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
  }
  
  const mediaQuery = window.matchMedia("(max-width: 550px)");

  return (
    <>
        <Container maxWidth="xl" sx={styles.container}>
            <img  style={styles.imgLogo} src={require('../../assets/image/logo.png')} alt="" srcset="" />
            <Typography
                sx={styles.head} >
                Bulk Generation System
            </Typography>
            <Typography
                sx={styles.signupText} >
               Personal Info
            </Typography>
           <Box sx={styles.row}>
                <TextField
                id="Fname"
                type="text"
                label="First Name"
                placeholder="First Name"
                value={creds.Fname || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
            <TextField
                id="Lname"
                type="text"
                label="Last Name"
                placeholder="Last Name"
                value={creds.Lname || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
           <Box sx={styles.row}>
                <TextField
                id="mobile"
                type="number"
                label="Mobile Number"
                placeholder="Mobile Number"
                value={creds.mobile || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
            <TextField
                id="email"
                type="email"
                label="Email Id"
                placeholder="Email Id"
                value={creds.email || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
           <Box sx={styles.row}>
                <TextField
                id="designation"
                type="text"
                label="Designation"
                placeholder="Designation"
                value={creds.designation || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
                    <TextField
                    id="gstin"
                    type="number"
                    label="GSTIN"
                    placeholder="GSTIN"
                    value={creds.gstin || ''}
                    onChange={handleChange}
                    sx={styles.inputField}
                />
           </Box>
           <Box sx = {styles.row}>
           <FormControl variant="outlined" sx={styles.inputField}>
          <InputLabel htmlFor="outlined-adornment-password">Create Passsword</InputLabel>
          <OutlinedInput
            id="password"
            placeholder="*****"
            type={showPassword ? 'text' : 'password'}
            value={creds.password || ''}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Create Password"
          />
        </FormControl>
        <FormControl variant="outlined" sx={styles.inputField}>
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="confirmPassword"
            placeholder="*****"
            type={showPassword ? 'text' : 'password'}
            value={creds.password || ''}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
           </Box>
       
           <Box sx={styles.row}>
            <Typography sx={styles.inputBtnText}>
                Upload your GSTIN Document
            </Typography>
            <input style={styles.inputBtn} type={"file"}></input>
            </Box>

            <Typography
                sx={styles.signupText} >
               Billing Address
            </Typography>
           <Box sx={styles.row}>
                <TextField
                id="streetHouseNo"
                type="text"
                label="Street/House Number"
                placeholder="Street/House Number"
                value={creds.streetHouseNo || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
            <TextField
                id="postalCode"
                type="number"
                label="Postal Code"
                placeholder="Postal Code"
                value={creds.postalCode || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
           <Box sx={styles.row}>
                <TextField
                id="city"
                type="text"
                label="City"
                placeholder="Jamshedpur"
                value="Jamshedpur"
                onChange={handleChange}
                sx={styles.inputField}
            />
            <TextField
                id="country"
                type="text"
                label="Country"
                placeholder="India"
                value="India"
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
           <Box sx={styles.row}>
           <TextField
                id="Region"
                type="text"
                label="Region"
                placeholder="34 Jharkhand"
                value="34 Jharkhand"
                onChange={handleChange}
                sx={styles.inputField}
            />
            <Box sx={styles.inputField}></Box>
           </Box>


        
           <Typography
                sx={styles.signupText} >
               Pickup Address
            </Typography>
           <Box sx={styles.row}>
                <TextField
                id="streetHouseNo"
                type="text"
                label="Street/House Number"
                placeholder="Street/House Number"
                value={creds.streetHouseNo || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
            <TextField
                id="postalCode"
                type="number"
                label="Postal Code"
                placeholder="Postal Code"
                value={creds.postalCode || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
           <Box sx={styles.row}>
                <TextField
                id="city"
                type="text"
                label="City"
                placeholder="Jamshedpur"
                value="Jamshedpur"
                onChange={handleChange}
                sx={styles.inputField}
            />
            <TextField
                id="country"
                type="text"
                label="Country"
                placeholder="India"
                value="India"
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
           <Box sx={styles.row}>
           <TextField
                id="Region"
                type="text"
                label="Region"
                placeholder="34 Jharkhand"
                value="34 Jharkhand"
                onChange={handleChange}
                sx={styles.inputField}
            />
            <Box sx={styles.inputField}></Box>
           </Box>
           <Box sx={styles.row}>
                <TextField
                id="Longitude"
                type="text"
                label="Longitude"
                placeholder="22.804565"
                value={creds.Longitude || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           <TextField
                id="Latitude"
                type="text"
                label="Latitide"
                placeholder="86.202873"
                value={creds.Longitude || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>

        <Button 
        variant="contained" 
        sx={styles.submitBtn} 
        onClick={submitHandler}
        >Submit
        </Button>
        </Container>
    </>
  )
}
