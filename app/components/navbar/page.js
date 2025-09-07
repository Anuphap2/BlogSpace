"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiHome, FiBookOpen, FiUser, FiSearch, FiEdit3 } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-apple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <FiBookOpen className="text-white text-lg" />
            </div>
            <span className="text-xl font-bold text-gray-900">BlogSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-smooth flex items-center gap-2">
              <FiHome className="text-sm" />
              หน้าแรก
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-gray-900 transition-smooth flex items-center gap-2">
              <FiBookOpen className="text-sm" />
              บล็อกทั้งหมด
            </Link>
            <Link href="/write" className="text-gray-700 hover:text-gray-900 transition-smooth flex items-center gap-2">
              <FiEdit3 className="text-sm" />
              เขียนบล็อก
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-smooth flex items-center gap-2">
              <FiUser className="text-sm" />
              เกี่ยวกับเรา
            </Link>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-smooth flex items-center gap-2">
              <FiSearch className="text-sm" />
              ค้นหา
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-smooth"
            >
              {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-scale">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl rounded-lg mt-2 shadow-apple">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-smooth flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHome className="text-sm" />
                หน้าแรก
              </Link>
              <Link
                href="/blogs"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-smooth flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiBookOpen className="text-sm" />
                บล็อกทั้งหมด
              </Link>
              <Link
                href="/write"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-smooth flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiEdit3 className="text-sm" />
                เขียนบล็อก
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-smooth flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiUser className="text-sm" />
                เกี่ยวกับเรา
              </Link>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-smooth flex items-center gap-2">
                <FiSearch className="text-sm" />
                ค้นหา
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
