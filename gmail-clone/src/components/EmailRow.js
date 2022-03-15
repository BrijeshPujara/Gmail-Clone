import React from "react";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { IconButton } from "@mui/material";

function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className="emailRow">
      <div className="emailRow-options">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow;
