"use client";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import type {ReactNode , MouseEventHandler } from "react";

type AppButtonProps = {
    children:ReactNode,
    variant? : "primary" | "secondary" | "danger" | "outline" | "ghost",
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disabled? : boolean,
    loading?:boolean,
    startIcon? : ReactNode,
    endIcon?: ReactNode,
    type? : "button" | "submit" | "reset",
    fullwidth?:boolean,
    className?: String
};

const styles = {
  primary:
    "!bg-[#7C22FA] !text-white hover:!bg-[#6915DF] !border-transparent",

  secondary:
    "!bg-[#F3F0FF] !text-[#7C22FA] hover:!bg-[#E8DEFF] !border-transparent",

  danger:
    "!bg-red-600 !text-white hover:!bg-red-700 !border-transparent",

  outline:
    "!bg-white !text-[#7C22FA] !border !border-[#7C22FA] hover:!bg-purple-50",

  ghost:
    "!bg-transparent !text-gray-700 !border-transparent hover:!bg-gray-100",
};
export default function AppButton ( {
    children ,
    variant = "primary",
    onClick,
    disabled = false,
    loading = false,
    startIcon,
    endIcon,
    type = "button",
    fullwidth = false,
    className = ""
} : AppButtonProps) {
    return (
        <Button
         type={type} 
         onClick={onClick}
         disabled={disabled || loading}
         startIcon={
        loading ? (
          <CircularProgress size={16} color="inherit" />
        ) : (
          startIcon
        )
      }
      endIcon={endIcon}
      fullWidth={fullwidth}
      disableElevation
      disableRipple
      className={`
        min-h-10 rounded-lg px-4 py-2
        text-sm font-semibold normal-case
        shadow-none transition-colors duration-200
        disabled:cursor-not-allowed disabled:opacity-50
        ${styles[variant]}
        ${className}
      `}
        >
            {children}
        </Button>
    );
}