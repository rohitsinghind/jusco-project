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

export default function DepoManagerDashboard(props) {
  const mediaQuery = window.matchMedia("(max-width: 650px)");
  const [Table, setTable] = useState(
    <ApplicationTable
      data={AllData.application}
      actionLink={props.link || "/applicationDetails"}
    />
  );

  const [tableName, setTableName] = useState("Applications");

  function handleClickPop(e) {
    setTableName(e.target.innerText);
    setTable(
      <ApplicationTable
        data={AllData[e.target.id]}
        actionLink={props.link || "/applicationDetails"}
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
        <Typography sx={styles.dashboardText}>
          {props.admin || "Depo Manager"} Dashboard
        </Typography>
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
