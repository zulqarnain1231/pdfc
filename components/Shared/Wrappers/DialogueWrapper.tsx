import React from "react";
import Dialog from "@mui/material/Dialog";
import { RxCross1 } from "react-icons/rx";

interface Props {
  Open: boolean;
  CloseEvent: () => void;
  style?: string;
  children: React.ReactNode;
  height?: string;
}

function DialogueWrapper({
  Open,
  CloseEvent,
  style,
  children,
  height = "sm:h-[600px] h-[500px]",
}: Props) {
  return (
    <Dialog
      open={Open}
      sx={{
        "& .MuiPaper-root": {
          background: "#FFF",
          maxWidth: "unset",
          borderRadius: "8px",
          minWidth: "350px",
        },
        "& ::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
        },
      }}
    >
      <div className={`md:w-[650px] sm:w-[600px] w-[350px] ${style} relative`}>
        <button
          type="button"
          onClick={CloseEvent}
          className="font-semibold p-1.5 text-brand-main rounded-full absolute top-3 right-3"
        >
          <RxCross1 size={25} />
        </button>

        <div className={` ${height} overflow-auto`}>{children}</div>
      </div>
    </Dialog>
  );
}

export default DialogueWrapper;
