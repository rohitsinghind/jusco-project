import React, { useState } from "react";
import { styles } from "./styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function customerApplicationStatus() {
  const mediaQuery = window.matchMedia("(max-width: 650px)");

  return (
    <>
      <Container maxWidth="xl" sx={styles.container}>
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../../assets/image/logo.png")}
          alt=""
          srcset=""
        />
        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>
          Application Status Page
        </Typography>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}></Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Application No.</Typography>
                <Typography sx={styles.fieldData}>
                  TSUIL/BULK/APPL/2022-23/0073
                </Typography>
              </Box>
            </div>
            <div>
              <Typography sx={styles.dashboardText}></Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Application Status</Typography>
                <Typography sx={styles.fieldData}>Reviewed</Typography>
              </Box>
            </div>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
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
                <Typography sx={styles.fieldData}>
                  rohitkumar@mail.com
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Designation</Typography>
                <Typography sx={styles.fieldData}>Sr. Manager</Typography>
              </Box>
            </div>
            <div>
              <Typography sx={styles.dashboardText}>
                Document Details
              </Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>GSTIN</Typography>
                <Typography sx={styles.fieldData}>20ABCD890J1KZW</Typography>
              </Box>
              <Button variant="contained">view uploaded document</Button>
            </div>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}>Billing Address</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Establishment Name</Typography>
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
              <Typography sx={styles.dashboardText}>
                Garbage Pickup Address
              </Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Establishment Name</Typography>
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
        </Paper>

        {/* jhsdkjfasdfhdlsakjfjshsadlfh */}

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  Frequency of Collection per day
                </Typography>
                <Typography sx={styles.fieldData}>Once</Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Customer Category</Typography>
                <Typography sx={styles.fieldData}>B2B</Typography>
              </Box>
            </div>

            <div>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Area</Typography>
                <Typography sx={styles.fieldData}>Northen Town</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Rate</Typography>
                <Typography sx={styles.fieldData}>15 Rupees</Typography>
              </Box>
            </div>
          </Box>
        </Paper>

        <Box>
          <Button
            sx={{ marginRight: "20px" }}
            variant="contained"
            color="success"
            onClick={() => alert("Accepted")}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => alert("Rejected")}
          >
            Reject
          </Button>
        </Box>
      </Container>
    </>
  );
}
