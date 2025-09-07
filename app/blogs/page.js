"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiFilter, FiEye, FiHeart, FiMessageCircle, FiCalendar, FiArrowLeft, FiEdit3 } from "react-icons/fi";

const allPosts = [
  {
    id: 1,
    title: "5 วิธีเริ่มต้นเขียนบล็อกสำหรับมือใหม่",
    excerpt: "เคล็ดลับง่ายๆ สำหรับผู้ที่อยากเริ่มต้นสร้างบล็อกของตัวเอง ตั้งแต่การเลือกแพลตฟอร์มไปจนถึงการเขียนเนื้อหาที่น่าสนใจ",
    author: "สมชาย ใจดี",
    date: "10 มิ.ย. 2024",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "การเขียน",
    readTime: "5 นาที",
    views: 1250,
    likes: 89,
    comments: 23,
    tags: ["บล็อก", "มือใหม่", "การเขียน"]
  },
  {
    id: 2,
    title: "แรงบันดาลใจจากธรรมชาติรอบตัว",
    excerpt: "ธรรมชาติรอบตัวสามารถเป็นแรงบันดาลใจให้กับงานเขียนของคุณได้อย่างไร มาดูเทคนิคการสังเกตและนำมาประยุกต์ใช้",
    author: "สายฝน พราวแสง",
    date: "8 มิ.ย. 2024",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "แรงบันดาลใจ",
    readTime: "7 นาที",
    views: 980,
    likes: 67,
    comments: 15,
    tags: ["ธรรมชาติ", "แรงบันดาลใจ", "การเขียน"]
  },
  {
    id: 3,
    title: "เทคนิคถ่ายภาพสำหรับบล็อกเกอร์",
    excerpt: "แชร์เทคนิคถ่ายภาพให้สวยโดดเด่นสำหรับนำไปใช้ในบล็อกของคุณ รวมถึงการจัดแสงและการจัดองค์ประกอบ",
    author: "อนันต์ ถ่ายภาพ",
    date: "5 มิ.ย. 2024",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    category: "การถ่ายภาพ",
    readTime: "8 นาที",
    views: 2100,
    likes: 156,
    comments: 42,
    tags: ["การถ่ายภาพ", "บล็อก", "เทคนิค"]
  },
  {
    id: 4,
    title: "การสร้างแบรนด์ส่วนตัวผ่านบล็อก",
    excerpt: "เรียนรู้วิธีการสร้างแบรนด์ส่วนตัวที่แข็งแกร่งผ่านการเขียนบล็อก และการสร้างความน่าเชื่อถือในสายงาน",
    author: "ธนาคาร แบรนด์",
    date: "3 มิ.ย. 2024",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    category: "การตลาด",
    readTime: "6 นาที",
    views: 1800,
    likes: 134,
    comments: 28,
    tags: ["แบรนด์", "การตลาด", "ธุรกิจ"]
  },
  {
    id: 5,
    title: "SEO สำหรับบล็อกเกอร์มือใหม่",
    excerpt: "เทคนิค SEO พื้นฐานที่บล็อกเกอร์มือใหม่ควรรู้ เพื่อให้บล็อกของคุณถูกค้นเจอใน Google มากขึ้น",
    author: "ดิจิทัล มาร์เก็ตติ้ง",
    date: "1 มิ.ย. 2024",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&q=80",
    category: "SEO",
    readTime: "10 นาที",
    views: 3200,
    likes: 245,
    comments: 67,
    tags: ["SEO", "Google", "การตลาด"]
  },
  {
    id: 6,
    title: "การจัดการเวลาในการเขียนบล็อก",
    excerpt: "เคล็ดลับการจัดการเวลาที่มีประสิทธิภาพสำหรับการเขียนบล็อก รวมถึงการสร้างตารางงานที่เหมาะสม",
    author: "เวลา จัดการ",
    date: "29 พ.ค. 2024",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
    category: "การจัดการ",
    readTime: "4 นาที",
    views: 1450,
    likes: 98,
    comments: 19,
    tags: ["การจัดการเวลา", "ประสิทธิภาพ", "การทำงาน"]
  },
  {
    id: 7,
    title: "การเลือกหัวข้อบล็อกที่น่าสนใจ",
    excerpt: "วิธีการเลือกหัวข้อบล็อกที่ผู้อ่านสนใจ และเทคนิคการสร้างเนื้อหาที่มีคุณค่าและน่าอ่าน",
    author: "เนื้อหา สร้างสรรค์",
    date: "27 พ.ค. 2024",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    category: "การเขียน",
    readTime: "6 นาที",
    views: 1900,
    likes: 142,
    comments: 35,
    tags: ["หัวข้อ", "เนื้อหา", "การเขียน"]
  },
  {
    id: 8,
    title: "การสร้างชุมชนผู้อ่านบล็อก",
    excerpt: "เทคนิคการสร้างและรักษาชุมชนผู้อ่านบล็อกให้แข็งแกร่ง รวมถึงการสร้างการมีส่วนร่วม",
    author: "ชุมชน สร้างสรรค์",
    date: "25 พ.ค. 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    category: "ชุมชน",
    readTime: "7 นาที",
    views: 1650,
    likes: 118,
    comments: 41,
    tags: ["ชุมชน", "ผู้อ่าน", "การมีส่วนร่วม"]
  },
  {
    id: 9,
    title: "การวิเคราะห์ข้อมูลบล็อก",
    excerpt: "เรียนรู้วิธีการวิเคราะห์ข้อมูลบล็อกเพื่อปรับปรุงเนื้อหาและเพิ่มจำนวนผู้อ่าน",
    author: "ข้อมูล วิเคราะห์",
    date: "23 พ.ค. 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    category: "การวิเคราะห์",
    readTime: "8 นาที",
    views: 2200,
    likes: 167,
    comments: 29,
    tags: ["การวิเคราะห์", "ข้อมูล", "สถิติ"]
  }
];

const categories = ["ทั้งหมด", "การเขียน", "แรงบันดาลใจ", "การถ่ายภาพ", "การตลาด", "SEO", "การจัดการ", "ชุมชน", "การวิเคราะห์"];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [sortBy, setSortBy] = useState("ล่าสุด");
  
  // โหลดบล็อกที่ผู้ใช้สร้าง
  const [userBlogs, setUserBlogs] = useState([]);
  
  // รวมบล็อกทั้งหมด
  const allBlogs = [...allPosts, ...userBlogs];

  // โหลดข้อมูลจาก localStorage เมื่อ component mount
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("userBlogs") || "[]");
    setUserBlogs(savedBlogs);
  }, []);

  const filteredPosts = allBlogs.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "ทั้งหมด" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "ล่าสุด":
        return new Date(b.date) - new Date(a.date);
      case "ยอดนิยม":
        return b.views - a.views;
      case "ยอดไลค์":
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
              <FiArrowLeft className="text-lg" />
              กลับหน้าแรก
            </Link>
            <Link
              href="/write"
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-smooth shadow-apple hover:shadow-apple-lg"
            >
              <FiEdit3 className="text-lg" />
              เขียนบล็อกใหม่
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            บล็อกทั้งหมด
          </h1>
          <p className="text-xl text-gray-600">
            ค้นพบเรื่องราวที่น่าสนใจและเป็นประโยชน์จากบล็อกเกอร์มืออาชีพ
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-3xl shadow-apple p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="ค้นหาบล็อก..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-smooth"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-smooth appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-smooth appearance-none bg-white"
            >
              <option value="ล่าสุด">เรียงตามวันที่</option>
              <option value="ยอดนิยม">เรียงตามยอดดู</option>
              <option value="ยอดไลค์">เรียงตามยอดไลค์</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            พบ {sortedPosts.length} บทความ
            {selectedCategory !== "ทั้งหมด" && ` ในหมวดหมู่ "${selectedCategory}"`}
            {searchTerm && ` สำหรับ "${searchTerm}"`}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl shadow-apple hover:shadow-apple-lg transition-smooth overflow-hidden border border-gray-100 hover:border-gray-200 animate-fade-in-up"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-smooth group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-apple">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-apple">
                    {post.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FiCalendar className="text-xs" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-smooth">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm">
                      {post.author[0]}
                    </div>
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FiEye className="text-xs" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiHeart className="text-xs" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMessageCircle className="text-xs" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">ไม่พบผลลัพธ์</h3>
            <p className="text-gray-600 mb-6">ลองเปลี่ยนคำค้นหาหรือหมวดหมู่ดูครับ</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("ทั้งหมด");
              }}
              className="bg-gray-900 text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-smooth"
            >
              ล้างตัวกรอง
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
