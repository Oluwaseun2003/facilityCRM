"use client";

import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

import Logo from "./UI/Logo";
// import Logo from "@/public/svgs/logo.svg"
import {
  AiOutlineAudit,
  AiOutlineBell,
  AiOutlineDashboard,
  AiOutlineForm,
  AiOutlineProfile,
} from "react-icons/ai";
import { FaUserTie, FaUserShield } from "react-icons/fa";
import {
  BiGitBranch,
  BiLogOut,
  BiMessageAltDetail,
  BiTask,
} from "react-icons/bi";

// Define types for navLinks
interface NavLink {
  title: string;
  icon: JSX.Element;
  href: string;
  subs?: SubLink[]; // Optional subs property
}

interface SubLink {
  title: string;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    title: "Workflow Management",
    icon: <BiGitBranch className="h-4 w-4 text-sky-600" />,
    href: "/app/dashboard/workflow-management",
  },
  {
    title: "Dashboard and Reporting",
    icon: <AiOutlineDashboard className="h-4 w-4 text-sky-600" />,
    href: "/app/dashboard",
  },
  {
    title: "Request Submission",
    icon: <AiOutlineForm className="h-4 w-4 text-sky-600" />,
    href: "/app/dashboard/request-submission",
  },
  {
    title: "Notification System",
    icon: <AiOutlineBell className="h-4 w-4 text-sky-600" />,
    href: "/app/dashboard/notifications",
  },
  {
    title: "Quotation Management",
    icon: <AiOutlineProfile className="h-4 w-4 text-sky-600" />,
    href: "/app/dashboard/quotation-management",
  },
  {
    title: "Approval Process",
    icon: <BiTask className="h-4 w-4 text-sky-600" />,
    href: "/app/dashboard/approval-process",
  },
  {
    title: "Audit Trail and Logs",
    icon: <AiOutlineAudit className="h-4 w-4 text-sky-600" />,
    href: "/app/dashboard/audit-logs",
  },
  {
    title: "Comments and Corrections",
    icon: <BiMessageAltDetail className="h-4 w-4 text-sky-600" />,
    href: "/app/comments-corrections",
  },
  {
    title: "Staff and Management",
    icon: <FaUserTie className="h-4 w-4 text-sky-600" />,
    href: "/app/dashboard/staff-management",
  },
  {
    title: "Request Summary",
    icon: <FaUserShield className="h-4 w-4 text-sky-600" />,
    href: "/app/dashboard/request-summary",
  },
];

export default function SideBar(): JSX.Element {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sidebar
      className="!absolute left-0 top-0 z-10 h-screen shrink-0 bg-white text-black shadow-lg duration-150 [&>div]:overflow-y-hidden"
      collapsed={collapsed}
      onMouseEnter={() => {
        setCollapsed(false);
      }}
      onMouseLeave={() => {
        setCollapsed(true);
      }}>
      <div className="m-4 block w-full">
        {collapsed ? (
          <Logo size="mini" className="[&>img]:h-[39px] [&>img]:w-auto" />
        ) : (
          <Logo size="full" />
        )}
      </div>
      <ul className="h-[calc(100vh-115px)] overflow-auto">
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#d5edf8",
                color: "#0173B1",
              },
            },
          }}>
          {navLinks.map((link) =>
            link.subs ? (
              <SubMenu
                key={link.href}
                icon={link.icon}
                label={link.title}
                component={<Link href="#" />}>
                {link.subs.map((sub) => (
                  <MenuItem
                    key={sub.href}
                    icon={<span className="h-4 w-4" />}
                    className={clsx(pathname === sub.href && "bg-blue-200")}
                    component={
                      <Link href={sub.href} className="!h-9 !text-sm" />
                    }>
                    {sub.title}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                key={link.href}
                icon={link.icon}
                className={clsx(pathname === link.href && "bg-blue-200")}
                component={<Link href={link.href} />}>
                {link.title}
              </MenuItem>
            )
          )}
          <MenuItem
            icon={<BiLogOut className="h-4 w-4 shrink-0 text-red-500" />}
            className="bg-red-100"
            component={<Link href="/login" />}>
            <span className="text-red-500">Logout</span>
          </MenuItem>
        </Menu>
      </ul>
      {!collapsed && (
        <h3 className="whitespace-nowrap p-4 text-center text-xs font-semibold text-blue-500">
          Powered by Oneflare
        </h3>
      )}
    </Sidebar>
  );
}
