"use client";
import Link from "next/link";
import { FiBookOpen, FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <FiBookOpen className="text-gray-900 text-lg" />
              </div>
              <span className="text-xl font-bold">BlogSpace</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              แพลตฟอร์มบล็อกที่สวยงามและใช้งานง่าย สำหรับทุกคนที่ต้องการแบ่งปันเรื่องราวของตัวเอง
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-smooth">
                <FiFacebook className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-smooth">
                <FiTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-smooth">
                <FiInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-smooth">
                <FiYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">ลิงก์ด่วน</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-smooth">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-white transition-smooth">
                  บล็อกทั้งหมด
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-smooth">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-smooth">
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">หมวดหมู่</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/technology" className="text-gray-400 hover:text-white transition-smooth">
                  เทคโนโลยี
                </Link>
              </li>
              <li>
                <Link href="/category/lifestyle" className="text-gray-400 hover:text-white transition-smooth">
                  ไลฟ์สไตล์
                </Link>
              </li>
              <li>
                <Link href="/category/business" className="text-gray-400 hover:text-white transition-smooth">
                  ธุรกิจ
                </Link>
              </li>
              <li>
                <Link href="/category/education" className="text-gray-400 hover:text-white transition-smooth">
                  การศึกษา
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">ติดต่อเรา</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiMail className="text-gray-400" />
                <span className="text-gray-400">contact@blogspace.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-gray-400" />
                <span className="text-gray-400">+66 2 123 4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-gray-400 mt-1" />
                <span className="text-gray-400">
                  123 ถนนสุขุมวิท<br />
                  เขตวัฒนา กรุงเทพฯ 10110
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 BlogSpace. สงวนลิขสิทธิ์ทั้งหมด
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-smooth">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-smooth">
                ข้อกำหนดการใช้งาน
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-smooth">
                นโยบายคุกกี้
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
