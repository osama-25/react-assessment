import React from "react";
import { FaGoogle, FaShoppingBag } from "react-icons/fa";

const icons = [
  { name: "Travel", icon: (<svg height="18" viewBox="0 0 24 24" width="18" focusable="false"><g><rect fill="none" height="24" width="24"></rect><path d="M16.5,6H15l0-3.25C15,2.34,14.66,2,14.25,2h-4.5C9.34,2,9,2.34,9,2.75V6H7.5C6.67,6,6,6.67,6,7.5v11 C6,19.33,6.67,20,7.5,20v0.5C7.5,21.33,8.17,22,9,22s1.5-0.67,1.5-1.5V20h3v0.5c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5V20 c0.83,0,1.5-0.67,1.5-1.5v-11C18,6.67,17.33,6,16.5,6z M10.5,3.5h3V6h-3V3.5z M14.56,15.58c-0.62,0.57-1.47,0.91-2.48,0.91 c-1.46,0-2.73-0.84-3.35-2.07c-0.26-0.51-0.4-1.08-0.4-1.68c0-0.61,0.14-1.18,0.4-1.69c0.62-1.22,1.89-2.07,3.35-2.07 c0.99,0,1.84,0.36,2.48,0.95c0.01,0.01,0.01,0.04,0,0.05L13.54,11c-0.01,0.02-0.04,0.02-0.05,0c-0.39-0.35-0.87-0.53-1.41-0.53 c-0.98,0-1.8,0.66-2.1,1.55c-0.08,0.23-0.12,0.47-0.12,0.71c0,0.25,0.04,0.49,0.12,0.71c0.3,0.89,1.12,1.55,2.1,1.55 c0.5,0,0.93-0.13,1.27-0.36c0.38-0.25,0.64-0.63,0.73-1.08c0-0.02-0.01-0.05-0.04-0.05h-1.93c-0.02,0-0.04-0.02-0.04-0.04v-1.37 c0-0.02,0.02-0.04,0.04-0.04h3.46c0.02,0,0.03,0.01,0.04,0.03c0.04,0.23,0.06,0.48,0.06,0.73C15.68,13.97,15.27,14.93,14.56,15.58z"></path></g></svg>) },
  { name: "Explore", icon: (<svg height="18" viewBox="0 0 24 24" width="18" focusable="false"><rect fill="none" height="24" width="24"></rect><path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path></svg>) },
  { name: "Flights", icon: (<svg height="18" viewBox="0 0 24 24" width="18" focusable="false"><rect fill="none" height="24" width="24"></rect><path d="M3.29,6.56l1.41-1.41l9.55,2.47l3.89-3.89c0.59-0.59,1.53-0.59,2.12,0s0.59,1.53,0,2.12l-3.89,3.89l2.47,9.55l-1.41,1.41 l-4.24-7.78l-3.89,3.89l0.35,2.47L8.6,20.35l-1.77-3.18L3.65,15.4l1.06-1.06l2.47,0.35l3.89-3.89L3.29,6.56z"></path></svg>) },
  { name: "Hotels", icon: (<svg height="18" viewBox="0 0 24 24" width="18" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm12-7h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path></g></g></svg>) },
  { name: "Vacation rentals", icon: (<svg height="18" viewBox="0 0 24 24" width="18" focusable="false"><g><g><rect fill="none" height="24" width="24"></rect></g></g><g><g><g><path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"></path></g></g></g></svg>) },
]

export const NavbarButton = ({ icon, text }) => {
  return (
    <button className="hover:bg-gray-100 hover:text-blue-600 focus:border-none focus:text-blue-600 focus:bg-blue-100 text-gray-800 gap-x-2 px-3 py-2 rounded-full border flex justify-center items-center">
      {icon && <div className="fill-blue-600">
        {icon}
      </div>}
      <div className="text-sm font-medium leading-tight">
        {text}
      </div>
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="relative">
      <nav className="fixed z-10 w-full flex justify-between items-center bg-white border-b border-gray-300 p-1 sm:p-2 px-5 gap-x-6">
        <div className="flex items-center">
          <div className="w-12 h-12 hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
            <svg viewBox="0 0 24 24" className="fill-gray-600 w-6 h-6">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </div>
          <a href="https://www.google.com/?authuser=0" className="w-20 h-7 rounded-full flex justify-center items-center pt-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 24" className="w-20 h-6">
              <path fill="#4285F4" d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" /><path fill="#EA4335" d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" /><path fill="#4285F4" d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z" /><path fill="#FBBC05" d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" /><path fill="#34A853" d="M58 .24h2.51v17.57H58z" /><path fill="#EA4335" d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" />
            </svg>
          </a>
        </div>
        <div className="items-center gap-x-2 w-full hidden lg:flex">
          {icons.map((icon, index) => (
            <NavbarButton key={index} icon={icon.icon} text={icon.name} />
          ))}
        </div>
        <div className="flex justify-end items-center gap-x-1">
          <div className="fill-gray-600 w-10 h-10 hover:bg-gray-200 rounded-full cursor-pointer flex justify-center items-center">
            <svg focusable="false" viewBox="0 0 24 24" className="w-6 h-6"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path><image src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt="" height="24" width="24"></image></svg>
          </div>
          <div className="w-10 h-10 hover hover:bg-gray-200 rounded-full cursor-pointer flex justify-center items-center">
            <img className="rounded-full w-8 h-8" src="https://lh3.googleusercontent.com/a/ACg8ocLVlPH6nuve4OPvTIHVL85_k3oEcB_K6oDcGuvqQSYN_i-qqg=s83-c-mo" />
          </div>
        </div>
      </nav>
    </header>
  )
}