import {
    Checkbox,
    FormControl,
    InputLabel,
    ListItemIcon,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
  } from "@mui/material";
  import React, { useState } from "react";
  import "./index.css";
  
  const steps = [];
  for (let i = 0; i <= 7; i++) {
    steps.push(i);
  }
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
    variant: "menu",
  };
  
  export default function DeployK3sApps() {
    const [selected, setSelected] = useState([]);
    const isAllSelected = steps.length > 0 && selected.length === steps.length;
  
    const handleChange = (event) => {
      const value = event.target.value;
      if (value[value.length - 1] === "all") {
        setSelected(selected.length === steps.length ? [] : steps);
        return;
      }
      setSelected(value);
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-multiple-checkbox-label" className="innerNode">
            <Checkbox
            sx={{paddingLeft: 0}}
              checked={isAllSelected}
              indeterminate={
                selected.length > 0 && selected.length < steps.length
              }
            />
            Deploy K3s
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selected}
            onChange={handleChange}
            input={<OutlinedInput label=">>Deploy K3s<<<" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem value="all">
              <ListItemIcon>
                <Checkbox
                  checked={isAllSelected}
                  indeterminate={
                    selected.length > 0 && selected.length < steps.length
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Select All" />
            </MenuItem>
            {steps.map((step) => (
              <MenuItem key={step} value={step}>
                <Checkbox checked={selected.indexOf(step) > -1} />
                <ListItemText primary={step} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
  