import React, { useState } from "react";
import "./index.css";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import PrepareNode from "../PrepareNode";
import InstallK3s from "../InstallK3s";
import DeployK3sApps from "../DeployK3sApps";
import DeployViztelRuntime from "../DeployViztelRuntime";
import { Box } from "@mui/material";

export default function ServerLogHeader() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Paper className="serverLogHeader">
        <div className="innerWrapper">
          <h3>Location Name</h3>
          <div className="checkedboxed">
            <PrepareNode />
            <InstallK3s />
            <DeployK3sApps />
            <DeployViztelRuntime />
            <Button sx={{marginLeft: 5}}variant="contained">Get Logs</Button>
          </div>
        </div>
      </Paper>

      {/* Extra */}
      <Button sx={{backgroundColor: '#1976D2', color: 'white', marginTop: 1}} onClick={() => setShow(prev => !prev)}>Other Modules</Button>
      {show && <Box>
        
      <Paper className="serverLogBody">
        <div className="extracheckedboxed">
          <div className="extracheckedboxed-inner">
            <div className="extracheckedboxedcheckedItem">
              <PrepareNode />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <InstallK3s />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <DeployK3sApps />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <DeployViztelRuntime />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <PrepareNode />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <InstallK3s />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <DeployK3sApps />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <DeployViztelRuntime />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <InstallK3s />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <DeployK3sApps />
            </div>
            <div className="extracheckedboxedcheckedItem">
              <DeployViztelRuntime />
            </div>
          </div>
        </div>
      </Paper>
        
        </Box>}
      </>
  );
}
