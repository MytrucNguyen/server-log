import React from "react";
import "./index.css";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import PrepareNode from "../PrepareNode";
import InstallK3s from "../InstallK3s";
import DeployK3sApps from "../DeployK3sApps";
import DeployViztelRuntime from "../DeployViztelRuntime";

export default function ServerLogHeader() {

  return (
      <Paper className="serverLogHeader">
        <div className="innerWrapper">
          <h3>Location Name</h3>
          <div className="checkedboxed">
            <div className="checkedboxed-inner">
              <div className="checkedItem"><PrepareNode /></div>
              <div className="checkedItem"><InstallK3s /></div>
              <div className="checkedItem"><DeployK3sApps /></div>
              <div className="checkedItem"><DeployViztelRuntime /></div>
            </div>
            <Button variant="contained">Get Logs</Button>
          </div>
        </div>
      </Paper>
  );
}
