import React, { useState } from "react";
import { styles } from "./styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

export default function ApplicationDetails() {
  
  const mediaQuery = window.matchMedia("(max-width: 650px)");

  return (
    <>
      <Container maxWidth="xl" sx={styles.container}>
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../../../assets/image/logo.png")}
          alt=""
          srcset=""
        />
        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>Details</Typography>
        
        <Box sx={styles.row}>
        <div>
        <Typography sx={styles.dashboardText}>Personal Info</Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Name</Typography>
          <Typography sx={styles.fieldData}>Mr. Rohit Kumar</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Mobile Number</Typography>
          <Typography sx={styles.fieldData}>9876543210</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Email</Typography>
          <Typography sx={styles.fieldData}>rohitkumar@mail.com</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Designation</Typography>
          <Typography sx={styles.fieldData}>Sr. Manager</Typography>
        </Box>
        </div>
        <div>
        <Typography sx={styles.dashboardText}>GSTIN Details</Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>GSTIN</Typography>
          <Typography sx={styles.fieldData}>20ABCD890J1KZW</Typography>
        </Box>
        </div>

        </Box>
        <Box sx={styles.row}>
          <div>
        <Typography sx={styles.dashboardText}>Billing Address</Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Name</Typography>
          <Typography sx={styles.fieldData}>Mr. Rohit Kumar</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Street/ House No.</Typography>
          <Typography sx={styles.fieldData}>L-Road, Bistupur</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>City</Typography>
          <Typography sx={styles.fieldData}>Jamshedpur</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Region</Typography>
          <Typography sx={styles.fieldData}>Jharkhand</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Country</Typography>
          <Typography sx={styles.fieldData}>India</Typography>
        </Box>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Postal Code</Typography>
          <Typography sx={styles.fieldData}>831001</Typography>
        </Box>
        </div>

        <div>
        <Typography sx={styles.dashboardText}>Pickup Address</Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Name</Typography>
          <Typography sx={styles.fieldData}>Mr. Rohit Kumar</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Street/ House No.</Typography>
          <Typography sx={styles.fieldData}>L-Road, Bistupur</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>City</Typography>
          <Typography sx={styles.fieldData}>Jamshedpur</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Region</Typography>
          <Typography sx={styles.fieldData}>Jharkhand</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Country</Typography>
          <Typography sx={styles.fieldData}>India</Typography>
        </Box>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Postal Code</Typography>
          <Typography sx={styles.fieldData}>831001</Typography>
        </Box>
        </div>
        </Box>

        <Box sx={styles.row}>
          <div>
          <Typography sx={styles.dashboardText}></Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Depot Area</Typography>
          <Typography sx={styles.fieldData}>Kashidih</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Frequency</Typography>
          <Typography sx={styles.fieldData}>Once</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Acknowledgement</Typography>
          <Typography sx={styles.fieldData}>Signature on Mobile Device</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Rate/ Pickup</Typography>
          <Typography sx={styles.fieldData}>₹15.00</Typography>
        </Box>
        </div>
        <div>
          <Typography sx={styles.dashboardText}></Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}></Typography>
          <Typography sx={styles.fieldData}></Typography>
        </Box>
        </div>
        </Box>

      </Container>
    </>
  );
}
