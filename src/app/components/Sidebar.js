"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UsageCard from "./UsageCard";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint is 1024px in Tailwind
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  const getItemClasses = (href, isBadge = false) => {
    const isActive = pathname === href;
    const baseClasses = `flex items-center gap-2.5 pl-3 text-base font-semibold leading-6 cursor-pointer rounded-[6px] ${isBadge ? "justify-between" : ""}`;
    
    if (isActive) {
      return `${baseClasses} py-2 px-3 border border-[#FFCA83] bg-gradient-to-r from-[#FFE4A2] to-[#FFCCBC] text-[#622400]`;
    }
    
    return `${baseClasses} text-[#414651]`;
  };

  const getIconClasses = (href) =>
    pathname === href ? "text-[#C9861E]" : "text-[#A4A7AE]";

  
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger button for mobile */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-1 left-2 z-50 p-2 rounded-md text-[#717680] lg:hidden"
        >
           {isOpen ? (
            <Icon icon="material-symbols:close" width="24" height="24" className="text-[#717680]" />
          ) : (
            <Icon icon="ci:hamburger-md" width="24" height="24" className="text-[#717680]" />
          )}
        </button>
      )}
      
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0   z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`flex flex-col p-5 items-start gap-8 border border-[#E9EAEB] rounded-xl max-w-[288px] w-full mt-2 ml-2 overflow-y-auto h-screen bg-white fixed z-40 transition-transform duration-300
          ${isMobile ? 
            (isOpen ? "translate-x-0" : "-translate-x-full") : 
            "translate-x-0"
          }`}
      >
        <Image width={163} height={45} src="/icons/Logo.svg" alt="logo" />

        <p className="pt-8 text-[#717680] text-xs font-bold">GENERAL</p>
        <ul className="w-full space-y-5">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={getItemClasses(item.href)}
                onClick={handleLinkClick}
              >
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
              <Link 
                href={item.href} 
                className={getItemClasses(item.href, !!item.badge)}
                onClick={handleLinkClick}
              >
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
              <Link 
                href={item.href} 
                className={getItemClasses(item.href)}
                onClick={handleLinkClick}
              >
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
    </>
  );
};

export default Sidebar;