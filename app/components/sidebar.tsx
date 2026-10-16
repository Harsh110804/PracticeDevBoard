"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const menuItems = [
    {
        label: "Dashboard",
        href:"/dashboard",
        icon : <DashboardOutlinedIcon/>
    },
    {
        label: "Projects",
        href:"/project",
        icon : <FolderOutlinedIcon/>
    },
    {
      label: "Settings",
        href:"/settings",
        icon : <SettingsOutlinedIcon/>
    }
]

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-16 shrink-0 flex-col border-r border-gray-200 bg-white px-2 py-6 md:w-64 md:px-4">
      <div className="mb-10 flex items-center justify-center gap-3 px-2 md:justify-start">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl font-bold text-white">
          D
        </div>
        <h2 className="text-xl font-bold tracking-tight text-gray-800 hidden md:block">
          DevBoard
        </h2>
      </div>

      <nav aria-label="Workspace">
        <p className="mb-3 hidden px-3 text-xs font-bold tracking-widest text-gray-400 md:block">
          WORKSPACE
        </p>
        <ul className="space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
                title={item.label}
                className={`flex min-h-11 items-center justify-center gap-3 rounded-md px-2 text-sm font-medium transition-colors md:justify-start md:px-3 ${
                  isActive
                    ? "bg-violet-600 text-white hover:bg-violet-700"
                    : "text-gray-600 hover:bg-violet-50 hover:text-violet-700"
                }`}
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            </li>
          );
        })}
        </ul>
      </nav>
    </aside>
  );
}