import React, { useState } from "react";
import "./index.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import PrepareNode from "../PrepareNode";
import InstallK3s from "../InstallK3s";
import DeployK3sApps from "../DeployK3sApps";
import DeployViztelRuntime from "../DeployViztelRuntime";

export default function ServerLogHeader() {
  const [checkMark, setCheckMark] = React.useState({
    prepare_node: true,
    install_k3s: true,
    deploy_k3s_apps: true,
    deploy_runtime: true,
  });

  const handleChange = (event) => {
    setCheckMark({
      ...checkMark,
      [event.target.name]: event.target.checked,
    });
  };

  const { prepare_node, install_k3s, deploy_k3s_apps, deploy_runtime } =
    checkMark;

  return (
      <Paper className="serverLogHeader">
        <div className="innerWrapper">
          <h3>Location Name</h3>
          <div className="innerWrapper">
            <PrepareNode />
            <InstallK3s />
            <DeployK3sApps />
            <DeployViztelRuntime />
            <Button sx={{marginLeft: 3}} variant="contained">Get Logs</Button>
          </div>
        </div>
      </Paper>
  );
}
