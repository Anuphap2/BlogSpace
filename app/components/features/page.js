"use client";
import { FiEdit3, FiSmartphone, FiShield, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

const features = [
  {
    icon: FiEdit3,
    title: "เขียนง่าย สวยงาม",
    description: "เครื่องมือเขียนที่ใช้งานง่าย พร้อมเทมเพลตสวยงามที่ออกแบบมาเพื่อให้เนื้อหาของคุณโดดเด่น",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FiSmartphone,
    title: "รองรับทุกอุปกรณ์",
    description: "บล็อกของคุณจะดูสวยงามและใช้งานได้ดีบนทุกอุปกรณ์ ไม่ว่าจะเป็นมือถือ แท็บเล็ต หรือคอมพิวเตอร์",
    color: "from-green-500 to-green-600"
  },
  {
    icon: FiShield,
    title: "ปลอดภัย 100%",
    description: "ข้อมูลและเนื้อหาของคุณได้รับการปกป้องด้วยระบบรักษาความปลอดภัยระดับสูง",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FiTrendingUp,
    title: "SEO ที่ดีเยี่ยม",
    description: "บล็อกของคุณจะถูกค้นเจอใน Google ได้ง่ายขึ้นด้วยระบบ SEO ที่ออกแบบมาเป็นพิเศษ",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: FiUsers,
    title: "ชุมชนที่แข็งแกร่ง",
    description: "เข้าร่วมชุมชนบล็อกเกอร์ที่ใหญ่ที่สุดในประเทศไทย และแลกเปลี่ยนประสบการณ์กัน",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: FiZap,
    title: "เร็วและเสถียร",
    description: "ระบบที่ทำงานได้เร็วและเสถียร ไม่ว่าผู้อ่านของคุณจะมีจำนวนเท่าไหร่ก็ตาม",
    color: "from-indigo-500 to-indigo-600"
  }
];

const stats = [
  { number: "10,000+", label: "ผู้ใช้ที่ไว้วางใจ" },
  { number: "50,000+", label: "บทความที่เผยแพร่" },
  { number: "1M+", label: "ผู้อ่านต่อเดือน" },
  { number: "99.9%", label: "เวลาทำงาน" }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ทำไมต้องเลือก BlogSpace?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            แพลตฟอร์มบล็อกที่ออกแบบมาเพื่อให้คุณสร้างเนื้อหาที่น่าสนใจได้อย่างง่ายดาย
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-apple hover:shadow-apple-lg transition-smooth border border-gray-100 hover:border-gray-200 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                <feature.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-apple-lg p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ตัวเลขที่พูดได้เอง
            </h3>
            <p className="text-lg text-gray-600">
              BlogSpace ได้รับความไว้วางใจจากบล็อกเกอร์ทั่วประเทศ
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              พร้อมเริ่มต้นแล้วหรือยัง?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              เข้าร่วมกับบล็อกเกอร์มากกว่า 10,000 คนที่ไว้วางใจ BlogSpace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-smooth shadow-apple hover:shadow-apple-lg transform hover:scale-105">
                เริ่มต้นฟรี
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-smooth">
                ดูตัวอย่าง
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
