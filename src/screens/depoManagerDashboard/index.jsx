// import React, { useState } from "react";
// import { styles } from "./styles";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import PopupState from "material-ui-popup-state";
// import { bindTrigger } from "material-ui-popup-state";
// import { Menu } from "@mui/icons-material";
// import { bindMenu } from "material-ui-popup-state";
// import { MenuItem } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ApplicationTable from "./components/ApplicationTable";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function DepoManagerDashboard() {
//   const [value, setValue] = useState(0);

//   const cons = "@34";

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const mediaQuery = window.matchMedia("(max-width: 650px)");

//   return (
//     <>
//       <Container maxWidth="xl" sx={styles.container}>
//         <img
//           style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
//           src={require("../../assets/image/logo.png")}
//           alt=""
//           srcset=""
//         />
//         <Typography sx={styles.head}>Bulk Generation System</Typography>
//         <Typography sx={styles.dashboardText}>Dashboard</Typography>

//         <Box sx={{ width: "100%" }}>
//           <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//             <ApplicationTable
//               data={[
//                 {
//                   name: "1",
//                   mobile: "#1232342",
//                   email: "Mr. Rohit Kumar",
//                   area: "9876543210",
//                   gstNo: "Baridih",
//                   isReturn: "Kashidih",
//                   expiration: "12/01/2023",
//                 },
//                 {
//                   name: "1",
//                   mobile: "#1232342",
//                   email: "Mr. Rohit Kumar",
//                   area: "9876543210",
//                   gstNo: "Baridih",
//                   isReturn: "Kashidih",
//                   expiration: "12/01/2023",
//                 },
//                 {
//                   name: "1",
//                   mobile: "#1232342",
//                   email: "Mr. Rohit Kumar",
//                   area: "9876543210",
//                   gstNo: "Baridih",
//                   isReturn: "Kashidih",
//                   expiration: "12/01/2023",
//                 },
//                 {
//                   name: "1",
//                   mobile: "#1232342",
//                   email: "Mr. Rohit Kumar",
//                   area: "9876543210",
//                   gstNo: "Baridih",
//                   isReturn: "Kashidih",
//                   expiration: "12/01/2023",
//                 },
//                 {
//                   name: "1",
//                   mobile: "#1232342",
//                   email: "Mr. Rohit Kumar",
//                   area: "9876543210",
//                   gstNo: "Baridih",
//                   isReturn: "Kashidih",
//                   expiration: "12/01/2023",
//                 },
//                 {
//                   name: "1",
//                   mobile: "#1232342",
//                   email: "Mr. Rohit Kumar",
//                   area: "9876543210",
//                   gstNo: "Baridih",
//                   isReturn: "Kashidih",
//                   expiration: "12/01/2023",
//                 },
//               ]}
//               actionLink="/applicationDetails"
//             />

//             <div>{cons}</div>
//           </Box>
//         </Box>
//       </Container>
//     </>
//   );
// }

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Container } from "@mui/material";
import { styles } from "./styles";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ApplicationTable from "./components/ApplicationTable";
import { useState } from "react";
import AllData from "./TableData/allData";

export default function DepoManagerDashboard() {
  const mediaQuery = window.matchMedia("(max-width: 650px)");
  const [Table, setTable] = useState(
    <ApplicationTable
      data={AllData.application}
      actionLink="/applicationDetails"
    />
  );

  const [tableName, setTableName] = useState("Applications");

  function handleClickPop(e) {
    setTableName(e.target.innerText);
    setTable(
      <ApplicationTable
        data={AllData[e.target.id]}
        actionLink="/applicationDetails"
      />
    );
    console.log(e.target.id);
  }

  return (
    <div>
      <Container maxWidth="xl" sx={styles.container}>
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../assets/image/logo.png")}
          alt=""
          srcset=""
        />

        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>Dashboard</Typography>
        <Box sx={styles.tabItemContainer}>
          <PopupState
            sx={styles.tabItem}
            variant="popover"
            popupId="demo-popup-menu"
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={styles.tabItem}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  {tableName}
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    id="application"
                    onClick={(e) => {
                      popupState.close();
                      handleClickPop(e);
                    }}
                  >
                    Applications
                  </MenuItem>
                  <MenuItem
                    id="under_l1"
                    onClick={(e) => {
                      popupState.close();
                      handleClickPop(e);
                    }}
                  >
                    Under level 1 review
                  </MenuItem>
                  <MenuItem
                    id="under_l2"
                    onClick={(e) => {
                      popupState.close();
                      handleClickPop(e);
                    }}
                  >
                    Under level 2 review
                  </MenuItem>
                  <MenuItem
                    id="pending_C_A"
                    onClick={(e) => {
                      popupState.close();
                      handleClickPop(e);
                    }}
                  >
                    Pending customer acceptance
                  </MenuItem>
                  <MenuItem
                    id="approved"
                    onClick={(e) => {
                      popupState.close();
                      handleClickPop(e);
                    }}
                  >
                    Approved
                  </MenuItem>
                  <MenuItem
                    id="rejected"
                    onClick={(e) => {
                      popupState.close();
                      handleClickPop(e);
                    }}
                  >
                    Application Rejected
                  </MenuItem>
                  <MenuItem
                    id="under_l2_wr"
                    onClick={(e) => {
                      popupState.close();
                      handleClickPop(e);
                    }}
                  >
                    Under level 2 review with reason
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>

          <PopupState
            sx={styles.tabItem}
            variant="popover"
            popupId="demo-popup-menu"
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={styles.tabItem}
                  variant="outlined"
                  {...bindTrigger(popupState)}
                >
                  Menu
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>

          <PopupState
            sx={styles.tabItem}
            variant="popover"
            popupId="demo-popup-menu"
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={styles.tabItem}
                  variant="outlined"
                  {...bindTrigger(popupState)}
                >
                  Menu
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>

          <PopupState
            sx={styles.tabItem}
            variant="popover"
            popupId="demo-popup-menu"
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={styles.tabItem}
                  variant="outlined"
                  {...bindTrigger(popupState)}
                >
                  Menu
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Box>
        <Box sx={styles.table}>{Table}</Box>
      </Container>
    </div>
  );
}
