"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b shadow-sm">
        {/* Logo */}
        <h1 className="text-2xl font-bold">THREADS</h1>
        
        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="#" className="hover:underline">Women</Link>
          <Link href="#" className="hover:underline">Men</Link>
          <Link href="#" className="hover:underline">Teams Orders</Link>
          <Link href="#" className="hover:underline">Students</Link>
        </nav>

        {/* Search & Account */}
        <div className="flex items-center space-x-6">
          <input type="text" placeholder="Search" className="border p-2 rounded-md hidden md:block" />
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
              <Image src="/user-icon.svg" alt="User Icon" width={24} height={24} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border shadow-md rounded-md p-2">
<button
  onClick={() => {
    alert("Login button clicked!"); 
    console.log("Redirecting using window.location...");
    window.location.href = "/login";
  }}
  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
>
  Log In
</button>

           <Link href="/register" className="block px-4 py-2 hover:bg-gray-100">Create an Account</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-5xl font-bold mb-4">THE SET</h2>
          <p className="text-lg mb-6">Our best-selling scrubs for $68 — engineered to help you feel good, look good, and perform at your best.</p>
          <p className="text-md font-semibold">Plus, take 15% off your first order!</p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-md">SHOP WOMEN</button>
            <button className="bg-black text-white px-6 py-3 rounded-md">SHOP MEN</button>
          </div>
        </div>
        
        <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/scrubs-men.png" alt="Men's Scrubs" width={300} height={400} className="absolute left-0" />
          <Image src="/scrubs-women.png" alt="Women's Scrubs" width={300} height={400} className="absolute right-0" />
        </div>
      </section>
    </div>
  );
}
