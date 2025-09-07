"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiSave, FiEye, FiImage, FiTag, FiCalendar, FiUser } from "react-icons/fi";
// Custom Rich Text Editor Component

const categories = [
  "การเขียน", "แรงบันดาลใจ", "การถ่ายภาพ", "การตลาด", 
  "SEO", "การจัดการ", "ชุมชน", "การวิเคราะห์", "เทคโนโลยี", "ไลฟ์สไตล์"
];

// Custom Rich Text Editor Component
function RichTextEditor({ value, onChange, placeholder }) {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const toggleFormat = (format) => {
    const textarea = document.getElementById('rich-text-editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    if (selectedText) {
      let newText = '';
      switch (format) {
        case 'bold':
          newText = `<strong>${selectedText}</strong>`;
          break;
        case 'italic':
          newText = `<em>${selectedText}</em>`;
          break;
        case 'underline':
          newText = `<u>${selectedText}</u>`;
          break;
        default:
          newText = selectedText;
      }
      
      const newValue = value.substring(0, start) + newText + value.substring(end);
      onChange(newValue);
    }
  };

  const insertList = (type) => {
    const textarea = document.getElementById('rich-text-editor');
    const start = textarea.selectionStart;
    const selectedText = value.substring(start, textarea.selectionEnd);
    
    if (selectedText) {
      const lines = selectedText.split('\n');
      const listItems = lines.map(line => 
        line.trim() ? `<li>${line.trim()}</li>` : ''
      ).filter(item => item).join('\n');
      
      const listTag = type === 'ordered' ? 'ol' : 'ul';
      const newText = `<${listTag}>\n${listItems}\n</${listTag}>`;
      
      const newValue = value.substring(0, start) + newText + value.substring(textarea.selectionEnd);
      onChange(newValue);
    }
  };

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-200 p-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => toggleFormat('bold')}
          className={`p-2 rounded-lg transition-smooth ${
            isBold ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-100'
          }`}
          title="ตัวหนา"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => toggleFormat('italic')}
          className={`p-2 rounded-lg transition-smooth ${
            isItalic ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-100'
          }`}
          title="ตัวเอียง"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => toggleFormat('underline')}
          className={`p-2 rounded-lg transition-smooth ${
            isUnderline ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-100'
          }`}
          title="ขีดเส้นใต้"
        >
          <u>U</u>
        </button>
        <div className="w-px h-8 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => insertList('unordered')}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-smooth"
          title="รายการแบบไม่มีหมายเลข"
        >
          • รายการ
        </button>
        <button
          type="button"
          onClick={() => insertList('ordered')}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-smooth"
          title="รายการแบบมีหมายเลข"
        >
          1. รายการ
        </button>
        <div className="w-px h-8 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => {
            const link = prompt('ใส่ลิงก์:');
            if (link) {
              const textarea = document.getElementById('rich-text-editor');
              const start = textarea.selectionStart;
              const end = textarea.selectionEnd;
              const selectedText = value.substring(start, end) || link;
              const newText = `<a href="${link}" target="_blank">${selectedText}</a>`;
              const newValue = value.substring(0, start) + newText + value.substring(end);
              onChange(newValue);
            }
          }}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-smooth"
          title="ลิงก์"
        >
          🔗
        </button>
      </div>
      
      {/* Editor */}
      <textarea
        id="rich-text-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-96 p-4 border-none outline-none resize-none font-sans text-base leading-relaxed"
        style={{ minHeight: '350px' }}
      />
    </div>
  );
}

export default function WritePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [isDraft, setIsDraft] = useState(false);

  const handleSave = async (publish = false) => {
    if (!title || !content || !author) {
      alert("กรุณากรอกข้อมูลที่จำเป็น: หัวข้อ, เนื้อหา, และชื่อผู้เขียน");
      return;
    }

    setIsPublishing(publish);
    setIsDraft(!publish);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          excerpt: excerpt || (content ? content.replace(/<[^>]+>/g, '').slice(0, 150) + '...' : ''),
          content,
          author,
          image: featuredImage || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
          category: category || 'ทั่วไป',
          tags: tags.split(',').map(t => t.trim()).filter(Boolean),
          read_time: Math.ceil((content || '').replace(/<[^>]+>/g, '').length / 500) + ' นาที',
          status: publish ? 'published' : 'draft',
        }),
      });
      const text = await res.text();
      const json = text ? JSON.parse(text) : {};
      if (!res.ok) throw new Error(json.error || 'บันทึกไม่สำเร็จ');

      alert(publish ? 'เผยแพร่บล็อกเรียบร้อยแล้ว!' : 'บันทึกแบบร่างเรียบร้อยแล้ว!');
      router.push('/blogs');
    } catch (e) {
      alert(e.message);
    } finally {
      setIsPublishing(false);
      setIsDraft(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFeaturedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/blogs" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
                <FiArrowLeft className="text-lg" />
                กลับ
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">เขียนบล็อกใหม่</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleSave(false)}
                disabled={isDraft}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-smooth disabled:opacity-50"
              >
                <FiSave className="text-sm" />
                {isDraft ? "กำลังบันทึก..." : "บันทึกแบบร่าง"}
              </button>
              
              <button
                onClick={() => handleSave(true)}
                disabled={isPublishing}
                className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-smooth disabled:opacity-50"
              >
                <FiEye className="text-sm" />
                {isPublishing ? "กำลังเผยแพร่..." : "เผยแพร่"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white rounded-3xl shadow-apple p-6 border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                หัวข้อบล็อก *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="ใส่หัวข้อที่น่าสนใจ..."
                className="w-full text-2xl font-bold border-none outline-none bg-transparent placeholder-gray-400"
                maxLength={100}
              />
              <div className="text-right text-sm text-gray-500 mt-2">
                {title.length}/100
              </div>
            </div>

            {/* Excerpt */}
            <div className="bg-white rounded-3xl shadow-apple p-6 border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                เนื้อหาย่อ (Excerpt)
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="สรุปเนื้อหาสั้นๆ เพื่อดึงดูดผู้อ่าน..."
                className="w-full h-24 border-none outline-none bg-transparent placeholder-gray-400 resize-none"
                maxLength={200}
              />
              <div className="text-right text-sm text-gray-500 mt-2">
                {excerpt.length}/200
              </div>
            </div>

            {/* Content Editor */}
            <div className="bg-white rounded-3xl shadow-apple border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  เนื้อหาบล็อก *
                </label>
              </div>
              <div className="p-4">
                <RichTextEditor
                  value={content}
                  onChange={setContent}
                  placeholder="เริ่มเขียนเนื้อหาของคุณที่นี่..."
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author */}
            <div className="bg-white rounded-3xl shadow-apple p-6 border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <FiUser className="inline mr-2" />
                ชื่อผู้เขียน *
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="ชื่อของคุณ"
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-smooth"
                maxLength={50}
              />
            </div>

            {/* Category */}
            <div className="bg-white rounded-3xl shadow-apple p-6 border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <FiTag className="inline mr-2" />
                หมวดหมู่
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-smooth"
              >
                <option value="">เลือกหมวดหมู่</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-3xl shadow-apple p-6 border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <FiTag className="inline mr-2" />
                แท็ก
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="แท็ก1, แท็ก2, แท็ก3"
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-smooth"
              />
              <p className="text-sm text-gray-500 mt-2">
                แยกแท็กด้วยเครื่องหมายจุลภาค (,)
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-3xl shadow-apple p-6 border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <FiImage className="inline mr-2" />
                รูปภาพหลัก
              </label>
              
              {featuredImage ? (
                <div className="space-y-3">
                  <img
                    src={featuredImage}
                    alt="Featured"
                    className="w-full h-32 object-cover rounded-2xl"
                  />
                  <button
                    onClick={() => setFeaturedImage("")}
                    className="w-full px-4 py-2 bg-red-100 text-red-600 rounded-2xl hover:bg-red-200 transition-smooth"
                  >
                    ลบรูปภาพ
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center">
                  <FiImage className="text-4xl text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 mb-3">อัปโหลดรูปภาพ</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-smooth cursor-pointer"
                  >
                    เลือกไฟล์
                  </label>
                </div>
              )}
            </div>

            {/* Preview */}
            <div className="bg-white rounded-3xl shadow-apple p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ตัวอย่างบล็อก</h3>
              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  <FiCalendar className="inline mr-2" />
                  {new Date().toLocaleDateString("th-TH")}
                </div>
                <div className="text-sm text-gray-500">
                  <FiUser className="inline mr-2" />
                  {author || "ชื่อผู้เขียน"}
                </div>
                <div className="text-sm text-gray-500">
                  ⏱️ {content ? Math.ceil(content.length / 500) + " นาที" : "0 นาที"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
