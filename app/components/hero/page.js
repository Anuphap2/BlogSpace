"use client";
import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiPlay, FiStar, FiUsers, FiBookOpen } from "react-icons/fi";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-apple">
                <FiStar className="text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">แพลตฟอร์มบล็อกอันดับ 1</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                สร้างเรื่องราว
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">
                  ที่น่าจดจำ
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                แบ่งปันความคิด ความรู้ และประสบการณ์ของคุณ 
                ในรูปแบบที่สวยงามและเป็นมืออาชีพ
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <FiUsers className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">ผู้ใช้</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <FiBookOpen className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">บทความ</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/write"
                className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-smooth shadow-apple hover:shadow-apple-lg transform hover:scale-105"
              >
                เริ่มต้นเขียนบล็อก
                <FiArrowRight className="text-xl" />
              </Link>
              
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-smooth shadow-apple border border-gray-200"
              >
                <FiPlay className="text-xl" />
                ดูวิดีโอแนะนำ
              </button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-apple-lg p-8 border border-white/20 transform rotate-3 hover:rotate-0 transition-smooth">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                      <FiBookOpen className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">บล็อกใหม่ล่าสุด</h3>
                      <p className="text-sm text-gray-600">5 วิธีเริ่มต้นเขียนบล็อก</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-900 rounded-full w-3/4 animate-pulse-slow"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-900 rounded-full w-1/2 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-900 rounded-full w-2/3 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm text-gray-600">สมชาย ใจดี</span>
                    </div>
                    <span className="text-xs text-gray-500">2 ชั่วโมงที่แล้ว</span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-apple p-4 border border-white/20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <FiStar className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">4.9</div>
                    <div className="text-xs text-gray-600">คะแนน</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-apple p-4 border border-white/20 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <FiUsers className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">1.2K</div>
                    <div className="text-xs text-gray-600">ผู้อ่าน</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full mx-4 animate-fade-in-scale">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">แนะนำ BlogSpace</h3>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="text-gray-500 hover:text-gray-700 transition-smooth"
              >
                <FiX className="text-2xl" />
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <FiPlay className="text-6xl text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">วิดีโอแนะนำจะแสดงที่นี่</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
