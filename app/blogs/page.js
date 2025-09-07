"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiFilter, FiEye, FiHeart, FiMessageCircle, FiCalendar, FiArrowLeft, FiEdit3 } from "react-icons/fi";

// ใช้เฉพาะข้อมูลจริงจาก API เท่านั้น ไม่มี mock data

const categories = ["ทั้งหมด", "การเขียน", "แรงบันดาลใจ", "การถ่ายภาพ", "การตลาด", "SEO", "การจัดการ", "ชุมชน", "การวิเคราะห์"];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [sortBy, setSortBy] = useState("ล่าสุด");
  
  const [remotePosts, setRemotePosts] = useState([]);

  // โหลดข้อมูลจาก API (Supabase)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/posts');
        const json = await res.json();
        if (res.ok) {
          setRemotePosts(json.posts || []);
        }
      } catch {}
    })();
  }, []);

  const filteredPosts = remotePosts.filter(post => {
    const title = (post.title || '').toLowerCase();
    const excerpt = (post.excerpt || '').toLowerCase();
    const author = (post.author || '').toLowerCase();
    const matchesSearch = title.includes(searchTerm.toLowerCase()) ||
                         excerpt.includes(searchTerm.toLowerCase()) ||
                         author.includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "ทั้งหมด" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "ล่าสุด":
        return new Date(b.created_at || 0) - new Date(a.created_at || 0);
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
              key={`${post.id ?? 'seed'}-${index}`}
              className="group bg-white rounded-3xl shadow-apple hover:shadow-apple-lg transition-smooth overflow-hidden border border-gray-100 hover:border-gray-200 animate-fade-in-up"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"}
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
                    {post.read_time || ''}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FiCalendar className="text-xs" />
                  <span>{post.created_at ? new Date(post.created_at).toLocaleDateString('th-TH') : ''}</span>
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
                  {(post.tags || []).slice(0, 3).map((tag, tagIndex) => (
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
                      {(post.author || '?')[0]}
                    </div>
                    <span className="text-sm text-gray-600">{post.author || ''}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FiEye className="text-xs" />
                      <span>{(post.views ?? 0).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiHeart className="text-xs" />
                      <span>{post.likes ?? 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMessageCircle className="text-xs" />
                      <span>{post.comments_count ?? 0}</span>
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
