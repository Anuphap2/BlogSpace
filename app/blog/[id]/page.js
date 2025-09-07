"use client";
import { useState, use, useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiUser, FiEye, FiHeart, FiMessageCircle, FiShare2, FiBookmark, FiTag } from "react-icons/fi";

const blogData = {};
export default function BlogDetailPage({ params }) {
  const resolvedParams = use(params);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [blog, setBlog] = useState(null);

  // โหลดข้อมูลบล็อก
  useEffect(() => {
    const blogId = resolvedParams.id;
    
    // ดึงจาก API
    (async () => {
      try {
        const res = await fetch(`/api/posts/${blogId}`);
        const text = await res.text();
        const json = text ? JSON.parse(text) : {};
        if (res.ok) {
          setBlog(json.post);
          setLikes(json.post?.likes ?? 0);
        } else {
          console.error(json.error || 'Failed to load post');
        }
      } catch (e) {
        console.error('Load post error:', e);
      }
    })();
  }, [resolvedParams.id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">ไม่พบบทความ</h1>
          <p className="text-gray-600 mb-6">บทความที่คุณกำลังมองหาอาจถูกลบหรือไม่ปรากฏ</p>
          <Link
            href="/blogs"
            className="bg-gray-900 text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-smooth"
          >
            กลับไปดูบล็อกทั้งหมด
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/blogs" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
              <FiArrowLeft className="text-lg" />
              กลับไปดูบล็อกทั้งหมด
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <article className="bg-white rounded-3xl shadow-apple-lg overflow-hidden border border-gray-100">
          {/* Featured Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={blog.image || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-apple">
                {blog.category}
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-xs" />
                <span>{blog.created_at ? new Date(blog.created_at).toLocaleDateString('th-TH') : ''}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUser className="text-xs" />
                <span>{blog.author || ''}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiEye className="text-xs" />
                <span>{(blog.views ?? 0).toLocaleString()} ครั้ง</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️ {blog.read_time || ''}</span>
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Article Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-smooth ${
                  isLiked 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FiHeart className={`text-sm ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes}</span>
              </button>

              <button
                onClick={handleBookmark}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-smooth ${
                  isBookmarked 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FiBookmark className={`text-sm ${isBookmarked ? 'fill-current' : ''}`} />
                <span>บันทึก</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-smooth">
                <FiShare2 className="text-sm" />
                <span>แชร์</span>
              </button>

              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gray-100 text-gray-600">
                <FiMessageCircle className="text-sm" />
                <span>{blog.comments_count ?? 0} ความคิดเห็น</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <FiTag className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">แท็ก:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(blog.tags || []).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-smooth cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-xl">
                  {(blog.author || '?')[0]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{blog.author || ''}</h3>
                  <p className="text-gray-600">บล็อกเกอร์และนักเขียนที่มีประสบการณ์มากกว่า 5 ปี</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">บทความที่เกี่ยวข้อง</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/2" className="group bg-white rounded-2xl shadow-apple hover:shadow-apple-lg transition-smooth overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="แรงบันดาลใจจากธรรมชาติรอบตัว"
                className="h-32 w-full object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  แรงบันดาลใจจากธรรมชาติรอบตัว
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  ธรรมชาติรอบตัวสามารถเป็นแรงบันดาลใจให้กับงานเขียนของคุณได้อย่างไร
                </p>
              </div>
            </Link>

            <Link href="/blog/3" className="group bg-white rounded-2xl shadow-apple hover:shadow-apple-lg transition-smooth overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="เทคนิคถ่ายภาพสำหรับบล็อกเกอร์"
                className="h-32 w-full object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  เทคนิคถ่ายภาพสำหรับบล็อกเกอร์
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  แชร์เทคนิคถ่ายภาพให้สวยโดดเด่นสำหรับนำไปใช้ในบล็อกของคุณ
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
