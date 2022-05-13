import React, { useState } from "react";
import "./index.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

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
      <div className="serverLogHeader">
        <div className="innerWrapper">
          <h3>Location Name</h3>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={prepare_node}
                  onChange={handleChange}
                  name="prepare_node"
                />
              }
              label="Prepare Node"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={install_k3s}
                  onChange={handleChange}
                  name="install_k3s"
                />
              }
              label="Install k3s"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={deploy_k3s_apps}
                  onChange={handleChange}
                  name="deploy_k3s_apps"
                />
              }
              label="Deploy K3s Apps"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={deploy_runtime}
                  onChange={handleChange}
                  name="deploy_runtime"
                />
              }
              label="Deploy Viztel Runtime"
            />
            <Button variant="contained">Get Logs</Button>
          </div>
        </div>
      </div>
  );
}
