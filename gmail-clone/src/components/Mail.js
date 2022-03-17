import { IconButton } from "@mui/material";
import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DeleteIcon from "@mui/icons-material/Delete";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useHistory } from "react-router-dom";

function Mail() {
  const history = useHistory();

  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mails-toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <PriorityHighIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MailOutlineIcon />
          </IconButton>
          <IconButton>
            <AccessTimeIcon />
          </IconButton>
          <IconButton>
            <MoreTimeIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail-toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyHeader">
          <h2>Subject</h2>
          <LabelIcon className="mail-important" />
          <p>Title</p>
          <p className="mail-time">10pm</p>
        </div>
        <div className="mail-message">
          <p> This is a message </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
