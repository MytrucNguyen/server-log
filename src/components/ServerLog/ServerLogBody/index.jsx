import "./index.css";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ServerLogBody() {
  const [open0, setOpen0] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleStepExpanded0 = () => {
    setOpen0(!open0);
  };
  const handleStepExpanded1 = () => {
    setOpen1(!open1);
  };

  return (
    <Paper className="serverLogBody">
      <div className="serverBodyWrapper">
        <div className="topOfServerBody">
          <h3>>_ Logs...</h3>
          <hr />
        </div>
        <div className="logs">
          <Accordion>
            <AccordionSummary
              aria-controls="prepare_noded-content"
              id="prepare_noded-header"
            >
              <CheckCircleIcon sx={{ marginRight: 1 }} />
              <Typography>Prepare Node</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ListItemButton onClick={handleStepExpanded0}>
                <ListItemText>
                    <div className="stepsExpanded">
                        <p>0: </p>
                        {open0 ? <ExpandLess /> : <ExpandMore />}
                        <p>Install Prerequisites for edge server setup</p>
                    </div>
                </ListItemText>
              </ListItemButton>
              <Collapse in={open0} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemText sx={{marginLeft: 6.5}} primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </List>
              </Collapse>
              <ListItemButton onClick={handleStepExpanded1}>
                <ListItemText>
                    <div className="stepsExpanded">
                        <p>1: </p>
                        {open1 ? <ExpandLess /> : <ExpandMore />}
                        <p>add Docker gpg key</p>
                    </div>
                </ListItemText>
              </ListItemButton>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemText sx={{marginLeft: 6.5}} primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </List>
              </Collapse>

              {/* <Typography>
                0: Prepare and Upload Assets to Edge Server
              </Typography>
              <Typography>
                1: Install Prerequisites for edge server setup
              </Typography>
              <div className="stepsExpanded">
                  
                <Typography>2:</Typography>


                 */}
              {/* <AccordionSummary
                  sx={{ marginLeft: "-13px" }}
                  aria-controls="install_k3sd-content"
                  id="install_k3sd-header"
                >
                  <Typography sx={{marginLeft: '-5px'}}>add Docker gpg key</Typography>
                </AccordionSummary> */}

              {/* </div> */}
            </AccordionDetails>
          </Accordion>
          <Accordion
            // expanded={expanded === "install_k3s"}
            // onChange={handleExpandedChange("install_k3s")}
          >
            <AccordionSummary
              aria-controls="install_k3sd-content"
              id="install_k3sd-header"
            >
              <CheckCircleIcon sx={{ marginRight: 1 }} />
              <Typography>Install k3s</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            // expanded={expanded === "deploy_k3s_apps"}
            // onChange={handleExpandedChange("deploy_k3s_apps")}
          >
            <AccordionSummary
              aria-controls="deploy_k3s_appsd-content"
              id="deploy_k3s_appsd-header"
            >
              <CheckCircleIcon sx={{ marginRight: 1 }} />
              <Typography>Deploy K3s Apps</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            // expanded={expanded === "deploy_runtime"}
            // onChange={handleExpandedChange("deploy_runtime")}
          >
            <AccordionSummary
              aria-controls="deploy_runtimed-content"
              id="deploy_runtimed-header"
            >
              <ErrorIcon sx={{ marginRight: 1 }} />
              <Typography>Deploy Viztel Runtime</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Paper>
  );
}
