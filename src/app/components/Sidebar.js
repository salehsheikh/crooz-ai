"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UsageCard from "./UsageCard";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: "Dashboard", icon: "system-uicons:graph-box", href: "/" },
    { label: "Leads", icon: "lucide:users", href: "/leads" },
    { label: "Chats", icon: "akar-icons:file", href: "/chats" },
    { label: "Calendar", icon: "mynaui:calendar", href: "/calendar" },
    { label: "Mails", icon: "circum:mail", href: "/mails" },
    { label: "Statistics", icon: "proicons:pie-chart", href: "/statistics" },
  ];

  const generalItems = [
    { label: "Reporting", icon: "proicons:pie-chart", href: "/reporting" },
    { label: "Tasks", icon: "gravity-ui:copy-check", href: "/tasks", badge: 8 },
    { label: "Users", icon: "lucide:users", href: "/users" },
  ];

  const bottomItems = [
    { label: "Support", icon: "lucide:life-buoy", href: "/support" },
    { label: "Settings", icon: "weui:setting-outlined", href: "/settings" },
  ];

  const getItemClasses = (href, isBadge = false) =>
    `flex items-center gap-2.5 pl-3 text-base font-semibold leading-6 cursor-pointer rounded-[6px] ${
      pathname === href
        ? "py-2 px-3 border border-[#FFCA83] bg-gradient-to-r from-[#FFE4A2] to-[#FFCCBC] text-[#622400]"
        : "text-[#414651]"
    } ${isBadge ? "justify-between" : ""}`;

  const getIconClasses = (href) =>
    pathname === href ? "text-[#C9861E]" : "text-[#A4A7AE]";

  return (
    <div className="flex flex-col p-5 items-start gap-8 border border-[#E9EAEB] fixed rounded-xl max-w-[288px] w-full mt-2 ml-2 overflow-y-auto h-screen">
      <Image width={163} height={45} src="/icons/Logo.svg" alt="logo" />

      <p className="pt-8 text-[#717680] text-xs font-bold">GENERAL</p>
      <ul className="w-full space-y-5">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={getItemClasses(item.href)}>
              <Icon
                icon={item.icon}
                width="20"
                height="20"
                className={getIconClasses(item.href)}
              />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="pt-3.5 text-[#717680] text-xs font-bold">GENERAL</p>
      <ul className="w-full space-y-5">
        {generalItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={getItemClasses(item.href, !!item.badge)}>
              <div className="flex items-center gap-2.5">
                <Icon
                  icon={item.icon}
                  width="20"
                  height="20"
                  className={getIconClasses(item.href)}
                />
                {item.label}
              </div>
              {item.badge && (
                <div className="rounded-[6px] border border-[#414651] py-0.5 px-1.5 text-xs">
                  {item.badge}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <UsageCard />
      </div>

      <ul className="w-full space-y-5">
        {bottomItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={getItemClasses(item.href)}>
              <Icon
                icon={item.icon}
                width="20"
                height="20"
                className={getIconClasses(item.href)}
              />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
