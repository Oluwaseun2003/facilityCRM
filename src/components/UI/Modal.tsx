import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ClipLoader } from "react-spinners";
import { FaRegTimesCircle } from "react-icons/fa";

interface ReusableDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  width: string;
  children: React.ReactNode;
}

export const DialogModal: React.FC<ReusableDialogProps> = ({
  open,
  onClose,
  title,
  width,
  subtitle,
  children,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <h5 className="text-[40px] font-semibold text-[#211658] ">{title}</h5>
          <h5 className="text-[16px] font-normal text-[#211658] mt-3 ">
            {subtitle}
          </h5>
        </div>
        <div
          onClick={onClose}
          style={{ position: "absolute", right: 18, top: 18 }}>
          <FaRegTimesCircle size={24} />
        </div>
      </DialogTitle>
      <DialogContent style={{ padding: "20px" }}>{children}</DialogContent>
    </Dialog>
  );
};

export default DialogModal;
