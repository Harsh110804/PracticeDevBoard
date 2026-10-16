"use client";

import  type{ReactNode} from "react";

type AppCardProps = {
    title : string,
    value : ReactNode,
    description : string,
    icon : ReactNode,
    accent? : "primary" | "success" | "warning" | "danger",
    className? : string 
}

const accentStyles = {
  primary: "text-[#7C22FA]",
  success: "text-green-500",
  warning: "text-amber-500",
  danger: "text-red-500",
};

export default function AppCard({
     title,
     value,
     description,
     icon,
     accent = "primary",
     className = ""
} : AppCardProps)  {
    return (
        <div
      className={`
        rounded-xl border border-gray-200 bg-white
        p-5 shadow-sm transition-shadow duration-200
        hover:shadow-md
        ${className}
      `}
    >
      <div className={`mb-3 ${accentStyles[accent]}`}>
        {icon}
      </div>

      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <div className="mt-1 text-3xl font-bold text-gray-900">
        {value}
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </div>
    )
}