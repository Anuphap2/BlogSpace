"use client";
import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiEye, FiHeart, FiMessageCircle, FiCalendar } from "react-icons/fi";

const featuredPosts = [
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
    comments: 23
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
    comments: 15
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
    comments: 42
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
    comments: 28
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
    comments: 67
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
    comments: 19
  }
];

export default function FeaturedBlogs() {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  const categories = ["ทั้งหมด", "การเขียน", "แรงบันดาลใจ", "การถ่ายภาพ", "การตลาด", "SEO", "การจัดการ"];

  const filteredPosts = selectedCategory === "ทั้งหมด" 
    ? featuredPosts 
    : featuredPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            บล็อกยอดนิยม
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ค้นพบเรื่องราวที่น่าสนใจและเป็นประโยชน์จากบล็อกเกอร์มืออาชีพ
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                selectedCategory === category
                  ? "bg-gray-900 text-white shadow-apple"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl shadow-apple hover:shadow-apple-lg transition-smooth overflow-hidden border border-gray-100 hover:border-gray-200 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
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
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

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

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-smooth shadow-apple hover:shadow-apple-lg transform hover:scale-105"
          >
            ดูบล็อกทั้งหมด
            <FiArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
