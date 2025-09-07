"use client";
import { useState, use, useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiUser, FiEye, FiHeart, FiMessageCircle, FiShare2, FiBookmark, FiTag } from "react-icons/fi";

const blogData = {
  1: {
    id: 1,
    title: "5 วิธีเริ่มต้นเขียนบล็อกสำหรับมือใหม่",
    content: `
      <p>การเขียนบล็อกเป็นวิธีที่ดีในการแบ่งปันความรู้และประสบการณ์ของคุณกับผู้อื่น แต่สำหรับมือใหม่แล้ว การเริ่มต้นอาจดูเหมือนเป็นเรื่องยาก วันนี้เราจะมาแนะนำ 5 วิธีง่ายๆ ที่จะช่วยให้คุณเริ่มต้นเขียนบล็อกได้อย่างมีประสิทธิภาพ</p>

      <h2>1. เลือกแพลตฟอร์มที่เหมาะสม</h2>
      <p>การเลือกแพลตฟอร์มเป็นสิ่งสำคัญมาก เพราะจะส่งผลต่อการใช้งานในระยะยาว แพลตฟอร์มยอดนิยมที่แนะนำ ได้แก่:</p>
      <ul>
        <li><strong>WordPress:</strong> มีความยืดหยุ่นสูง เหมาะสำหรับผู้ที่ต้องการควบคุมทุกอย่าง</li>
        <li><strong>Blogger:</strong> ใช้งานง่าย เหมาะสำหรับมือใหม่</li>
        <li><strong>Medium:</strong> มีชุมชนผู้อ่านที่แข็งแกร่ง</li>
        <li><strong>BlogSpace:</strong> แพลตฟอร์มใหม่ที่ออกแบบมาเพื่อความสวยงามและใช้งานง่าย</li>
      </ul>

      <h2>2. กำหนดหัวข้อและเป้าหมาย</h2>
      <p>ก่อนเริ่มเขียน ควรกำหนดให้ชัดเจนว่าคุณต้องการเขียนเกี่ยวกับอะไร และมีเป้าหมายอย่างไร เช่น:</p>
      <ul>
        <li>แบ่งปันความรู้ในสาขาที่คุณเชี่ยวชาญ</li>
        <li>สร้างแบรนด์ส่วนตัว</li>
        <li>สร้างรายได้เสริม</li>
        <li>สร้างชุมชนผู้อ่าน</li>
      </ul>

      <h2>3. วางแผนเนื้อหา</h2>
      <p>การวางแผนเนื้อหาจะช่วยให้คุณเขียนบล็อกได้อย่างต่อเนื่องและมีคุณภาพ ควรสร้าง:</p>
      <ul>
        <li><strong>Editorial Calendar:</strong> ตารางการเผยแพร่เนื้อหา</li>
        <li><strong>Content Pillars:</strong> เสาหลักของเนื้อหา เช่น เทคนิค, แรงบันดาลใจ, ข่าวสาร</li>
        <li><strong>Keyword Research:</strong> วิจัยคำค้นหาที่เกี่ยวข้อง</li>
      </ul>

      <h2>4. เขียนเนื้อหาที่มีคุณค่า</h2>
      <p>เนื้อหาที่ดีควรมีคุณสมบัติดังนี้:</p>
      <ul>
        <li><strong>มีประโยชน์:</strong> ให้ข้อมูลหรือความรู้ที่เป็นประโยชน์ต่อผู้อ่าน</li>
        <li><strong>อ่านง่าย:</strong> ใช้ภาษาที่เข้าใจง่าย มีการจัดรูปแบบที่ชัดเจน</li>
        <li><strong>มีเอกลักษณ์:</strong> สะท้อนบุคลิกและมุมมองของคุณ</li>
        <li><strong>อัปเดต:</strong> เนื้อหาที่ทันสมัยและเกี่ยวข้องกับสถานการณ์ปัจจุบัน</li>
      </ul>

      <h2>5. สร้างการมีส่วนร่วม</h2>
      <p>การสร้างการมีส่วนร่วมกับผู้อ่านเป็นสิ่งสำคัญที่ช่วยให้บล็อกของคุณเติบโต:</p>
      <ul>
        <li>ตอบความคิดเห็นอย่างสม่ำเสมอ</li>
        <li>สร้างเนื้อหาที่กระตุ้นให้ผู้อ่านแสดงความคิดเห็น</li>
        <li>ใช้โซเชียลมีเดียในการโปรโมตบล็อก</li>
        <li>สร้างชุมชนผ่านการจัดกิจกรรมหรือการแข่งขัน</li>
      </ul>

      <h2>สรุป</h2>
      <p>การเริ่มต้นเขียนบล็อกไม่ใช่เรื่องยาก หากคุณทำตาม 5 วิธีที่แนะนำข้างต้น จำไว้ว่าการเขียนบล็อกเป็นกระบวนการที่ต้องใช้เวลาและความอดทน เริ่มต้นด้วยการเขียนเนื้อหาที่คุณสนใจและมีความรู้ แล้วค่อยๆ พัฒนาไปเรื่อยๆ</p>

      <p>หากคุณต้องการความช่วยเหลือในการเริ่มต้น BlogSpace พร้อมให้คำแนะนำและเครื่องมือที่จำเป็นสำหรับการสร้างบล็อกที่สวยงามและมีประสิทธิภาพ</p>
    `,
    author: "สมชาย ใจดี",
    date: "10 มิ.ย. 2024",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    category: "การเขียน",
    readTime: "5 นาที",
    views: 1250,
    likes: 89,
    comments: 23,
    tags: ["บล็อก", "มือใหม่", "การเขียน", "เทคนิค", "เริ่มต้น"]
  }
};

export default function BlogDetailPage({ params }) {
  const resolvedParams = use(params);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [blog, setBlog] = useState(null);

  // โหลดข้อมูลบล็อก
  useEffect(() => {
    const blogId = resolvedParams.id;
    
    // ตรวจสอบในข้อมูลตัวอย่างก่อน
    if (blogData[blogId]) {
      setBlog(blogData[blogId]);
      setLikes(blogData[blogId].likes || 0);
      return;
    }
    
    // ตรวจสอบใน localStorage
    const userBlogs = JSON.parse(localStorage.getItem("userBlogs") || "[]");
    const foundBlog = userBlogs.find(b => b.id == blogId);
    if (foundBlog) {
      setBlog(foundBlog);
      setLikes(foundBlog.likes || 0);
    }
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
              src={blog.image}
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
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUser className="text-xs" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiEye className="text-xs" />
                <span>{blog.views.toLocaleString()} ครั้ง</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️ {blog.readTime}</span>
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
                <span>{blog.comments} ความคิดเห็น</span>
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
                {blog.tags.map((tag, index) => (
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
                  {blog.author[0]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{blog.author}</h3>
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
